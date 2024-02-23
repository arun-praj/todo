import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../page'
 
describe('Page', () => {
  it(' shoul not render a heading', () => {
    render(<Home />)
 
    const heading = screen.getByRole('main')
 
    expect(heading).toBeInTheDocument()
  })
})