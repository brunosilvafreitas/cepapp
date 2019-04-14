import React from 'react'
import { render } from 'react-testing-library'
import Button from '../Button'

describe('[Element] Button', () => {
  it('deve conseguir renderizar [snapshot]', async () => {
    const { container } = render(<Button>Clique aqui!</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
