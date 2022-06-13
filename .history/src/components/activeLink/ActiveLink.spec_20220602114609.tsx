import { render } from '@testing-library/react' //renderiza virtualmente
import { ActiveLink } from '.'

test('active link renders correctly', () => {
  const { debug } = render(
    <ActiveLink href="/" activeClassName="active">
      <a>home</a>
    </ActiveLink>
  )

  debug()
}) 