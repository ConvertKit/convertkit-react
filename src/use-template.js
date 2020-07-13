import Minimal from './templates/minimal'
import Clare from './templates/clare'
import Mills from './templates/mills'
import Rainier from './templates/rainier'
import Powell from './templates/powell'
import Charlotte from './templates/charlotte'
import Pine from './templates/pine'

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
  uid: '',
  version: '5'
}

const renderTemplate = template => {
  const templateName = template.toLowerCase()
  const allTemplates = {
    minimal: Minimal,
    clare: Clare,
    mills: Mills,
    rainier: Rainier,
    powell: Powell,
    charlotte: Charlotte,
    pine: Pine,
  }

  if (!allTemplates.hasOwnProperty(templateName)) {
    const errorMessage = `The chosen template "${template}" is not yet supported`
    throw new ReferenceError(errorMessage)
  }

  return allTemplates[templateName]
}

function useTemplate(template) {
  return {
    options,
    Template: renderTemplate(template)
  }
}

export default useTemplate;
