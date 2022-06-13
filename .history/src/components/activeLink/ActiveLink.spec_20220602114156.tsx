import { render } from '@testing-library/react' //renderiza virtualmente
import { ActiveLink } from '.'

test('active link renders correctly', () => {
  render(
    <ActiveLink href="/" activeClassName='="active'>
      
    </ActiveLink>
  )
}) 