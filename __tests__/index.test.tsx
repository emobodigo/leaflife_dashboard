import Home from '@/pages/index';
import { createMockRouter } from '@/test-utils/createMockRouter';
import '@testing-library/jest-dom';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import user from '@testing-library/user-event';
import { RouterContext } from 'next/dist/shared/lib/router-context';

describe('Home', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders a form with username and password inputs', async () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Home />
      </RouterContext.Provider>
    );

    const usernameInput = await screen.findByTestId('usernameInput');
    const passwordInput = await screen.findByTestId('passwordInput');

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('submits the form with correct credentials', async () => {
    const router = createMockRouter({});

    render(
      <RouterContext.Provider value={createMockRouter(router)}>
        <Home />
      </RouterContext.Provider>
    );

    const usernameInput = getUsername();
    const passwordInput = getPassword();
    const buttonSubmit = getSubmitButton();

    expect(buttonSubmit.disabled).toBe(true);
    await user.type(usernameInput, 'testuser');
    await user.type(passwordInput, '123456');
    await waitFor(() => {
      expect(buttonSubmit.disabled).toBe(false);
      fireEvent.click(buttonSubmit);
      expect(router.push).toHaveBeenCalledTimes(1);
      expect(router.push).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('show error when field is required', async () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Home />
      </RouterContext.Provider>
    );
    const usernameInput = getUsername();
    const passwordInput = getPassword();
    act(() => {
      usernameInput.focus();
      usernameInput.blur();
      passwordInput.focus();
      passwordInput.blur();
    });

    await waitFor(() => {
      expect(getUsernameError()).toBeInTheDocument();
      expect(getUsernameError().innerHTML).toBe('Username is required');
      expect(getPasswordError()).toBeInTheDocument();
      expect(getPasswordError().innerHTML).toBe('Password is required');
    });
  });

  it('show error when password field is less than 6 character', async () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Home />
      </RouterContext.Provider>
    );
    const passwordInput = getPassword();
    await user.type(passwordInput, '1234');
    act(() => {
      passwordInput.blur();
    });
    await waitFor(() => {
      expect(getPasswordError()).toBeInTheDocument();
      expect(getPasswordError().innerHTML).toBe(
        'Password must have at least 6 characters'
      );
    });
  });
});

function getUsername() {
  return screen.getByRole('textbox', { name: /username/i }) as HTMLInputElement;
}

function getUsernameError() {
  return screen.getByTestId('usernameErrorMessage');
}

function getPassword() {
  return screen.getByLabelText(/password/i) as HTMLInputElement;
}

function getSubmitButton() {
  return screen.getByRole('button', { name: /sign in/i }) as HTMLButtonElement;
}

function getPasswordError() {
  return screen.getByTestId('passwordErrorMessage');
}
