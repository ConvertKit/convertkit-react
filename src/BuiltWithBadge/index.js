import React from 'react'
import './builtwith.css'

export default function BuiltWith({ href }) {
  return (
    <a href={href} className="formkit-powered-by-convertkit" target="_blank" rel="noopener noreferrer" data-element="powered-by">
      Built with ConvertKit
    </a>
  )
}
