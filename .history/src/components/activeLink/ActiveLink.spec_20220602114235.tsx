import { render } from '@testing-library/react' //renderiza virtualmente

test('active link renders correctly', () => {
  render(
    <activeLink href="/" activeClassName='="active'>
      
    </activeLink>
  )
}) 