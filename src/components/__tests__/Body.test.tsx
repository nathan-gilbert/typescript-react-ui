/* eslint-disable no-magic-numbers */
import React from 'react'
import { render, screen } from '@testing-library/react'
import Body from '../Body'

describe('Body Unit Tests', () => {
  test('renders learn react link', () => {
    render(<Body />)
    const linkElement = screen.getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
  })
})
