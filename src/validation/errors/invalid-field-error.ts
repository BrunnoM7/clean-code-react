export class InvalidFieldError extends Error {
  constructor() {
    super('Valor de campo inválido');
    this.name = 'InvalidFieldError';
  }
}