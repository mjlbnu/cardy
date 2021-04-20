import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search client/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/add client/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/card membership/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /cardy/i })).toBeInTheDocument()
  })
})
