import { render, screen } from '@testing-library/react' //renderiza virtualmente
import { SingInButton } from '.'

jest.mock('next-auth/react')

describe('SignInButthon component', () => { 
  it('renders correctly when user is not authenticated', () => {
    render(<SingInButton />)

    expect(screen.getByText('Sing in with GitHub')).toBeInTheDocument()
  })

  it('renders correctly when user is authenticated', () => {
    render(<SingInButton />)

    expect(screen.getByText('Sing in with GitHub')).toBeInTheDocument()
  })
})

