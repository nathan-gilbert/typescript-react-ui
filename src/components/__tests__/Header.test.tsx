/* eslint-disable no-magic-numbers */
import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('Header Unit Tests', () => {
  test('renders learn react link', () => {
    render(<Header />)
    const logo = screen.getByAltText('eCorp Logo')
    expect(logo).toBeInTheDocument()
  })
})
