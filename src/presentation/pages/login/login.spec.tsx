import React from "react";
import { render } from "@testing-library/react";
import Login from "./login";

describe('Login component', () => {
  test('Should start with initial state', () => {
    const { getByTestId } = render(<Login />);
    const errorWrap = getByTestId('error-wrap');

    expect(errorWrap.childElementCount).toBe(0);

    const submitButton = getByTestId('submit') as HTMLButtonElement;

    expect(submitButton.disabled).toBe(true);

    // const emailInput = screen.getByLabelText(/email/i);
    // const passwordInput = screen.getByLabelText(/password/i);
    // const submitButton = screen.getByRole('button', { name: /submit/i });

    // expect(emailInput).toBeInTheDocument();
    // expect(passwordInput).toBeInTheDocument();
    // expect(submitButton).toBeInTheDocument();
  });
})