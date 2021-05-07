import { render, screen } from '@testing-library/react'

import CardImg from '.'

describe('<CardImg />', () => {
  it('should render the heading', () => {
    const { container } = render(<CardImg />)

    expect(screen.getByRole('heading', { name: /CardImg/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
