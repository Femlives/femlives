'use client';

import React, { PropsWithChildren } from 'react';
import { useForm, FieldValues, Path } from 'react-hook-form';
import { Button } from './Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSubmitResponse } from '@/types/app';
import { ZodSchema } from 'zod';

type FormProps<T extends FieldValues> = PropsWithChildren<{
  onSubmit: (data: T) => Promise<FormSubmitResponse>;
  validator: ZodSchema<T>;
  submitButtonLabel: string;
}>;

const FormWrapper = <T extends FieldValues>({
  onSubmit,
  validator,
  children,
  submitButtonLabel,
}: FormProps<T>) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<T>({
    resolver: zodResolver(validator),
  });

  const onSubmitHandler = async (values: T): Promise<void> => {
    const result = await onSubmit(values);
    if (result.error) {
      handleServerErrors(result.error);
    }
  };

  const handleServerErrors = (errors: FormSubmitResponse['error']): void => {
    if (!errors) return;
    Object.keys(errors).forEach((key) => {
      setError(key as Path<T>, {
        type: 'custom',
        message: errors[key],
      });
    });
  };

  const mapChild = (child: React.ReactNode) => {
    if (React.isValidElement(child)) {
      const fieldName = child.props.name;
      return React.cloneElement(child, {
        ...child.props,
        ...register(fieldName),
        errorMsg: errors[child.props.name]?.message,
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
    </form>
  );
};

export default FormWrapper;
