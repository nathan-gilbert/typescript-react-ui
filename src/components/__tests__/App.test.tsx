import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App Integration Tests', () => {
  test('renders header, body', () => {
    render(<App />)

    const logo = screen.getByAltText('eCorp Logo')
    expect(logo).toBeInTheDocument()

    const linkElement = screen.getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
  })
})
