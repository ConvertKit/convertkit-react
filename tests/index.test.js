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
  const { getByText } = render(
    <ConvertKitForm formId={FORMID} format="sticky" template="mills" />
  )
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
  expect(container.querySelector('ck-warn')).not.toBeInTheDocument()
})

