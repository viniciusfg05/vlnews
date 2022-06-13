import { render } from '@testing-library/react' //renderiza virtualmente
import { Header } from '.'

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
      <Header />
     )
  
    expect(getByText('home')).toBeInTheDocument()
  })
})

