import React from 'react'
import { jest } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ConvertKitForm from '../src/index'

const FORMID = 1234567

test('defaults are rendered', () => {
  render(
    <ConvertKitForm formId={FORMID} />
  )

  expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  expect(screen.getByLabelText('Email')).toBeInTheDocument()
  expect(screen.getByLabelText('First name')).toBeInTheDocument()
})

test('custom button text is rendered', () => {
  const btnText = 'Join the list'
  render(
    <ConvertKitForm formId={FORMID} submitText={btnText} />
  )

  expect(screen.getByText(btnText)).toBeInTheDocument()
})

test('allows styling the form element through class', () => {
  const { container } = render(
    <ConvertKitForm formId={FORMID} className="hey yo" />
  )

  expect(container.querySelector('form')).toHaveClass('yo')
  expect(container.querySelector('form')).toHaveClass('hey')
})

test('shows warning when incorrect format is used on template', () => {
  const warningText = 'This template is not available for the chosen format'
  const { container } = render(
    <ConvertKitForm formId={FORMID} format="sticky" template="mills" />
  )
  expect(container.querySelector('#ck-warn')).toBeInTheDocument()
  expect(screen.getByText(warningText)).toBeInTheDocument()
})

test('hides warning when user opts out', () => {
  const { container } = render(
    <ConvertKitForm
      formId={FORMID}
      format="sticky"
      template="mills"
      hideWarnings={true}
    />
  )
  expect(container.querySelector('#ck-warn')).not.toBeInTheDocument()
})

test('shows labels', () => {
  render(
    <ConvertKitForm
      formId={FORMID}
      template="mills"
      hideName={false}
      showLabels={true}
    />
  )
  expect(screen.getByLabelText('First name')).toBeInTheDocument()
  expect(screen.getByLabelText('Email')).toBeInTheDocument()
})

test('allows custom label', () => {
  render(
    <ConvertKitForm
      formId={FORMID}
      template="mills"
      hideName={false}
      showLabels={true}
      nameLabel="The beginning"
      emailLabel="The end"
    />
  )
  expect(screen.getByLabelText('The beginning')).toBeInTheDocument()
  expect(screen.getByLabelText('The end')).toBeInTheDocument()
})

test('throws error when unavailable template is used', () => {
  jest.spyOn(console, 'error')
  console.error.mockImplementation(() => { })
  expect(() => {
    render(<ConvertKitForm formId={FORMID} template="fish" />)
  }).toThrow(ReferenceError)
  console.error.mockRestore()
  expect(() => {
    render(<ConvertKitForm formId={FORMID} template="minimal" />)
  }).not.toThrow(ReferenceError)
})

test('converts all templates to lowercase to find correct match', () => {
  expect(() => {
    render(<ConvertKitForm formId={FORMID} template="Minimal" />)
  }).not.toThrow(ReferenceError)
  expect(() => {
    render(<ConvertKitForm formId={FORMID} template="MINIMAL" />)
  }).not.toThrow(ReferenceError)
})

test('button color and background can be overriden', () => {
  render(
    <ConvertKitForm formId={FORMID} template="clare" buttonBackground="rgb(0, 0, 0)" />
  )
  const submitButton = screen.getByRole('button', { name: /subscribe/i })
  expect(submitButton.style.backgroundColor).toEqual('rgb(0, 0, 0)')
})
