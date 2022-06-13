import { render, screen } from '@testing-library/react' //renderiza virtualmente
import { SingInButton } from '.'

jest.mock('next-auth/react', () => {
  return {
    useSession() {
      return [null, false]
    }
  }
})

describe('SignInButthon component', () => { 
  it('renders correctly', () => {
    render(
      <SingInButton />
    )
  
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Posts')).toBeInTheDocument()
  })
})

