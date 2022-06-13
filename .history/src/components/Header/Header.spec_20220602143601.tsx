import { render } from '@testing-library/react' //renderiza virtualmente

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

describe('ActiveLink component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <ActiveLink href="/" activeClassName="active">
        <a>home</a>
      </ActiveLink>
     )
  
    expect(getByText('home')).toBeInTheDocument()
  })
})

