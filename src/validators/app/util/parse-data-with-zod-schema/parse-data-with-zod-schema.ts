import { assertIsFormData } from '@/util/asserts';
import { isFormData } from '@/util/type-guards';
import {
  ValidatorName,
  getFormDataValidator,
} from '../get-form-data-validator/get-form-data-validator';
import { mapFormDataToDto } from '../map-form-data-to-dto/map-form-data-to-dto';

export const parseDataWithZodValidator = <T>(
  data: unknown,
  schemaName: ValidatorName
): T => {
  const schema = getFormDataValidator(schemaName);

  if (isFormData(data)) {
    assertIsFormData(data);
    const mappedData = mapFormDataToDto(data);
    return schema.parse(mappedData) as T;
  }

  return schema.parse(data) as T;
};
