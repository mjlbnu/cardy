import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render 4 columns topics', () => {
    // contact
    renderWithTheme(<Footer />)
    expect(screen.getByText(/contact/i)).toBeInTheDocument()
    // follow us
    expect(screen.getByText(/follow us/i)).toBeInTheDocument()
    // links
    expect(screen.getByText(/links/i)).toBeInTheDocument()
    // location
    expect(screen.getByText(/location/i)).toBeInTheDocument()
  })
})
