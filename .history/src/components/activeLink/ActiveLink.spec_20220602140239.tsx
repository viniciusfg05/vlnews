import { render } from '@testing-library/react' //renderiza virtualmente
import { ActiveLink } from '.'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

test('active link renders correctly', () => {
  const { getByText } = render(
    <ActiveLink href="/" activeClassName="active">
      <a>home</a>
    </ActiveLink>
  )

   expect(getByText('home'))
}) 

test('active link is receiving active class', () => {
  const { getByText } = render(
    <ActiveLink href="/" activeClassName="active">
      <a>home</a>
    </ActiveLink>
  )

   expect(getByText('home')).toHaveClass('active')
}) 