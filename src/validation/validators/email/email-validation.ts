import { InvalidFieldError } from "@/validation/errors";
import { FieldValidation } from "@/validation/protocols/field-validation";

export class EmailValidation implements FieldValidation {
  constructor(readonly fieldName: string) {}

  validate(value: string): Error | null {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? null : new InvalidFieldError();
  }
}