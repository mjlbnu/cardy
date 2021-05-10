import { render, screen } from '@testing-library/react'

import Card2 from '.'

describe('<Card2 />', () => {
  it('should render the heading', () => {
    const { container } = render(<Card2 />)

    expect(screen.getByRole('heading', { name: /Card2/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
