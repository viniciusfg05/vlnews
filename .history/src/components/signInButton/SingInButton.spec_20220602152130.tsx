import { render } from '@testing-library/react' //renderiza virtualmente
import { SingInButton } from '.'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
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

