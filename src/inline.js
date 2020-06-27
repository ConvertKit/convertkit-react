import React from 'react'
import './inline-styles.css'

// TO-DO:
// derive data-uid of user

const options = {
  settings: {
    after_subscribe: {
      action: 'message',
      success_message: 'Success! Now check your email to confirm your subscription.',
      redirect_url: ''
    },
    analytics: {
      google: null,
      facebook: null,
      segment: null,
      pinterest: null
    },
    modal: {
      trigger: 'timer',
      scroll_percentage: null,
      timer: 5,
      devices: 'all',
      show_once_every: 15
    },
    powered_by: {
      show: true,
      url: 'https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form'
    },
    recaptcha: {
      enabled: false
    },
    return_visitor: {
      action: 'show',
      custom_content: ''
    },
    slide_in: {
      display_in: 'bottom_right',
      trigger: 'timer',
      scroll_percentage: null,
      timer: 5,
      devices: 'all',
      show_once_every: 15
    },
    sticky_bar: {
      display_in: 'top',
      trigger: 'timer',
      scroll_percentage: null,
      timer: 5,
      devices: 'all',
      show_once_every: 15
    }
  },
  version: '5'
}

const InlineForm = ({
  action,
  submitText,
  emailPlaceholder,
  namePlaceholder,
  hideName,
  showLabels,
  nameLabel,
  emailLabel,
  newTab,
  formId,
}) => (
    <>
      <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
      <form action={action} method="post" target={newTab ? '_blank' : '_self'} className="seva-form formkit-form" method="post" data-sv-form={formId} data-format="inline" data-version={options.version} data-uid="e8437783ad" data-options={JSON.stringify(options)} min-width="400 500 600 700 800">
        <div data-style="clean">
          <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert">
          </ul>
          <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields">
            {!hideName && (
              <>
                {showLabels ? <label>{nameLabel}</label> : null}
                <div className="formkit-field">
                  <input className="formkit-input" aria-label="Your first name" name="fields[first_name]" placeholder={namePlaceholder} type="text" style={{ color: 'rgb(0, 0, 0)', borderColor: 'rgb(227, 227, 227)', borderRadius: '4px', fontWeight: 400 }} />
                </div>
              </>
            )}
            {showLabels ? <label>{emailLabel}</label> : null}
            <div className="formkit-field">
              <input className="formkit-input" name="email_address" placeholder={emailPlaceholder} required type="email" style={{ color: 'rgb(0, 0, 0)', borderColor: 'rgb(227, 227, 227)', borderRadius: '4px', fontWeight: 400 }} />
            </div>
            <button data-element="submit" className="formkit-submit formkit-submit" style={{ color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(22, 119, 190)', borderRadius: '4px', fontWeight: 400 }}>
              <div className="formkit-spinner">
                <div></div><div></div><div></div>
              </div>
              <span>{submitText}</span>
            </button>
          </div>
          {options.settings.powered_by.show ? (
            <a href="https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form" className="formkit-powered-by" data-element="powered-by" target="_blank" rel="noopener noreferrer">Powered By ConvertKit</a>
          ) : null}
        </div>
      </form>
    </>
  )

export default InlineForm
