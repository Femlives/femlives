import { render, screen, waitFor } from '@testing-library/react';
import { verifyEmail } from '@/actions/auth/verify-email';
import { useRouter } from 'next/navigation';
import VerifyEmailVerificationToken from './verify-email-verification-token';

// Mock the useRouter hook
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

// Mock the verifyEmail function
jest.mock('@/actions/auth/verify-email');

describe('VerifyEmailVerificationToken', () => {
  const mockRouter = { push: jest.fn() };
  beforeEach(() => {
    useRouter.mockReturnValue(mockRouter);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('displays success message on valid token', async () => {
    verifyEmail.mockResolvedValueOnce({}); // Simulate successful verification

    render(<VerifyEmailVerificationToken token='valid-token' />);

    await waitFor(() =>
      expect(
        screen.getByText(
          /Success! You will be redirected to login in a moment.../
        )
      ).toBeInTheDocument()
    );
    expect(mockRouter.push).toHaveBeenCalledWith('/login');
  });

  test('displays expired token message', async () => {
    verifyEmail.mockResolvedValueOnce({ message: 'Token expired' });

    render(<VerifyEmailVerificationToken token='expired-token' />);

    await waitFor(() =>
      expect(
        screen.getByText(/the token is already expired/)
      ).toBeInTheDocument()
    );
  });

  test('displays error message on invalid token', async () => {
    verifyEmail.mockResolvedValueOnce({ message: 'Invalid token' });

    render(<VerifyEmailVerificationToken token='invalid-token' />);

    await waitFor(() =>
      expect(screen.getByText(/Something went wrong/)).toBeInTheDocument()
    );
    expect(screen.getByText(/Error: Invalid token/)).toBeInTheDocument();
  });

  test('handles network error', async () => {
    verifyEmail.mockRejectedValueOnce(new Error('Network error'));

    render(<VerifyEmailVerificationToken token='network-error-token' />);

    await waitFor(() =>
      expect(screen.getByText(/Something went wrong/)).toBeInTheDocument()
    );
    expect(screen.getByText(/Error: unknown_error/)).toBeInTheDocument();
  });

  test('does not verify if no token is provided', () => {
    render(<VerifyEmailVerificationToken token='' />);

    expect(screen.getByText(/Verifying your email.../)).toBeInTheDocument();
  });
});
