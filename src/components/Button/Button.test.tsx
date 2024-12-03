import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button component', () => {
  it('Should not be clickable when disabled', () => {
    const handleClick = jest.fn();

    render(
      <Button buttonLabel='Click Me' onClick={handleClick} disabled={true} />
    );

    const buttonElement = screen.getByText('Click Me');

    expect(buttonElement).toBeDisabled();

    fireEvent.click(buttonElement);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it('Should be clickable when enabled', () => {
    const handleClick = jest.fn();

    render(
      <Button buttonLabel='Click Me' onClick={handleClick} disabled={false} />
    );

    const buttonElement = screen.getByText('Click Me');

    expect(buttonElement).not.toBeDisabled();

    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('Should display loading state and be unclickable', () => {
    const handleClick = jest.fn();

    render(
      <Button buttonLabel='Click Me' onClick={handleClick} loading={true} />
    );

    const buttonElement = screen.getByText('Loading...');

    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveTextContent('Loading...');

    fireEvent.click(buttonElement);

    expect(handleClick).not.toHaveBeenCalled();
  });
});
