'use client';

import React, { PropsWithChildren, useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { Button } from './Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { ServerActionResponse } from '@/types/app';
import { generateAuthToken } from '@/actions/token';
import ConditionWrapper from './ConditionWrapper';
import { useRouter } from 'next/navigation';
import {
  getFormDataValidator,
  getKeysFromZodValidator,
  ValidatorName,
} from '@/validators/app';
import { isString } from '@/util/type-guards';

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
  const [hasRequiredFields, setHasRequiredFields] = useState(false);
  const [message, setMessage] = useState<string>('');
  const router = useRouter();

  const validator = getFormDataValidator(validatorName);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    resolver: zodResolver(validator),
  });

  const onSubmitHandler = async (values: FieldValues): Promise<void> => {
    const encryptedData = await generateAuthToken(
      { ...values },
      '5s',
      'AUTH_TOKEN_SECRET'
    );

    const result = await onSubmit(encryptedData);

    if (result?.error) {
      handleServerErrors(result.error);
    }

    if (result?.message) {
      setMessage(result.message);
    }

    if (result?.redirectRoute) {
      router.push(result.redirectRoute);
    }
  };

  const handleServerErrors = (errors: ServerActionResponse['error']): void => {
    console.log(errors);
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
      const validatorKeys = getKeysFromZodValidator(validatorName);

      const childId = (child as { props?: { id?: string } })?.props?.id;

      if (isString(childId) && validatorKeys?.includes(childId)) {
        return mapFormValidationProps(child, childId);
      }
    }

    return child;
  };

  const mapFormValidationProps = (child: JSX.Element, childId: string) => {
    const isRequired = child.props.required;

    if (isRequired && !hasRequiredFields) {
      setHasRequiredFields(true);
    }

    return {
      ...child,
      props: {
        ...child.props,
        ...register(childId),
        errorMsg: errors[childId]?.message,
      },
    };
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
