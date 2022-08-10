/* eslint-disable no-magic-numbers */
import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer Unit Tests', () => {
  test('renders footer text', () => {
    render(<Footer />)
    const footerText = screen.getByText(/all rights reserved/i)
    expect(footerText).toBeInTheDocument()
  })
})
