'use client';

import React, { PropsWithChildren, useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { Button } from './Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { ServerActionResponse } from '@/types/app';
import { assertIsString } from '@/util/asserts';
import { generateToken } from '@/actions/token';
import ConditionWrapper from './ConditionWrapper';
import { useRouter } from 'next/navigation';
import { getFormValidator, ValidatorName } from '@/validators/app';

type FormProps = PropsWithChildren<{
  onSubmit: (data: unknown) => Promise<ServerActionResponse>;
  validatorName: ValidatorName;
  submitButtonLabel: string;
}>;

const FormWrapper = ({
  onSubmit,
  validatorName,
  children,
  submitButtonLabel,
}: FormProps) => {
  const [message, setMessage] = useState<string>('');
  const router = useRouter();

  const validator = getFormValidator(validatorName);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    resolver: zodResolver(validator),
  });

  const onSubmitHandler = async (values: FieldValues): Promise<void> => {
    const encryptedData = await generateToken({ ...values }, '5s');

    const result = await onSubmit(encryptedData);

    if (result.error) {
      handleServerErrors(result.error);
    }

    if (result.message) {
      setMessage(result.message);
    }

    if (result.redirectRoute) {
      router.push(result.redirectRoute);
    }
  };

  const handleServerErrors = (errors: ServerActionResponse['error']): void => {
    if (!errors) return;
    Object.keys(errors).forEach((key) => {
      setError(key, {
        type: 'custom',
        message: errors[key],
      });
    });
  };

  const mapChild = (child: React.ReactNode) => {
    if (React.isValidElement(child)) {
      const fieldName = child.props.name;
      assertIsString(child.props?.id);

      return React.cloneElement(child, {
        ...child.props,
        ...register(fieldName),
        errorMsg: errors[child.props.id]?.message,
      });
    }
    return child;
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className='space-y-4'>
      {React.Children.map(children, (child) => mapChild(child))}

      <Button
        type='submit'
        buttonLabel={submitButtonLabel}
        loading={isSubmitting}
        disabled={isSubmitting}
      />

      <ConditionWrapper condition={!!message}>
        <p>{message}</p>
      </ConditionWrapper>
    </form>
  );
};

export default FormWrapper;
