import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '@/components/ui/button'

describe('Button Component', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('handles click events', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('can be disabled', () => {
    render(<Button disabled>Disabled button</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('applies variant classes correctly', () => {
    render(<Button variant="destructive">Destructive button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-destructive')
  })

  it('applies size classes correctly', () => {
    render(<Button size="lg">Large button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('h-11')
  })
})