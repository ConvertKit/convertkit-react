import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ConvertKitForm from '../bin/convertkit-form'

const FORMID = 1234567

test('custom button text is rendered', () => {
  const btnText = 'Join the list'
  const { getByText } = render(
    <ConvertKitForm formId={FORMID} submitText={btnText} />
  )

  expect(getByText(btnText)).toBeInTheDocument()
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
  const { getByText, container } = render(
    <ConvertKitForm formId={FORMID} format="sticky" template="mills" />
  )
  expect(container.querySelector('#ck-warn')).toBeInTheDocument()
  expect(getByText(warningText)).toBeInTheDocument()
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
  const { getByLabelText } = render(
    <ConvertKitForm
      formId={FORMID}
      template="mills"
      showLabels={true}
    />
  )
  expect(getByLabelText('First name')).toBeInTheDocument()
  expect(getByLabelText('Email')).toBeInTheDocument()
})

test('allows custom label', () => {
  const { getByLabelText } = render(
    <ConvertKitForm
      formId={FORMID}
      template="mills"
      showLabels={true}
      nameLabel="The beginning"
      emailLabel="The end"
    />
  )
  expect(getByLabelText('The beginning')).toBeInTheDocument()
  expect(getByLabelText('The end')).toBeInTheDocument()
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
