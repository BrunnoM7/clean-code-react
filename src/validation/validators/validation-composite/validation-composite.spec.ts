
import { ValidationComposite } from "./validation-composite";
import { ValidationSpy } from "../test/mock-field-validation";
import faker from "faker";

type SutTypes = {
  sut: ValidationComposite;
  fieldValidationSpies: ValidationSpy[];
}

const makeSut = (fieldName: string): SutTypes => {
  const fieldValidationSpies = [
    new ValidationSpy(fieldName), 
    new ValidationSpy(fieldName)
  ];

  const sut = new ValidationComposite(fieldValidationSpies);

  return {
    sut,
    fieldValidationSpies
  };
};

describe('ValidationComposite', () => {
  test('Should return error if any validation fails', () => {
    const fieldName = faker.random.word();
    const { sut, fieldValidationSpies } = makeSut(fieldName);
    const errorMessage = faker.random.word();
    fieldValidationSpies[0].error = new Error(errorMessage);
    fieldValidationSpies[1].error = new Error(faker.random.word());

    const error = sut.validate(fieldName, faker.random.word());
    expect(error).toBe(errorMessage);
  });

  test('Should return falsy if no validation fails', () => {
    const fieldName = faker.random.word();
    const { sut } = makeSut(fieldName);

    const error = sut.validate(fieldName, faker.random.word());
    expect(error).toBeFalsy();
  });
});