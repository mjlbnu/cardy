import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'

describe('<Button />', () => {
  it('should render the button', () => {
    renderWithTheme(<Button>Create campaign</Button>)

    expect(screen.getByRole('button', { name: /Create/i }))
  })

  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Create campaign</Button>)

    expect(
      screen.getByRole('button', { name: /Create campaign/i })
    ).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Create campaign</Button>)

    expect(
      screen.getByRole('button', { name: /Create campaign/i })
    ).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Create campaign</Button>)

    expect(
      screen.getByRole('button', { name: /Create campaign/i })
    ).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem'
    })
  })

  it('should render a fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Create campaign</Button>)

    expect(
      screen.getByRole('button', { name: /Create campaign/i })
    ).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>
        Create campaign
      </Button>
    )

    expect(screen.getByText(/Create campaign/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
