'use client';

import React, { PropsWithChildren } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { Button } from './Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSubmitResponse } from '@/types/app';
import { assertIsString } from '@/util/asserts';
import { getFormValidator, ValidatorName } from '@/api/db/validators/util';

type FormProps = PropsWithChildren<{
  onSubmit: (data: unknown) => Promise<FormSubmitResponse>;
  validatorName: ValidatorName;
  submitButtonLabel: string;
}>;

const FormWrapper = ({
  onSubmit,
  validatorName,
  children,
  submitButtonLabel,
}: FormProps) => {
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
    const result = await onSubmit(values);
    if (result.error) {
      handleServerErrors(result.error);
    }
  };

  const handleServerErrors = (errors: FormSubmitResponse['error']): void => {
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
        disabled={isSubmitting} // Prevent multiple submissions
      />
    </form>
  );
};

export default FormWrapper;
