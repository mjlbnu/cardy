import { render, screen } from '@testing-library/react'

import CardItem from '.'

describe('<CardItem />', () => {
  it('should render the heading', () => {
    const { container } = render(<CardItem />)

    expect(screen.getByRole('heading', { name: /CardItem/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
