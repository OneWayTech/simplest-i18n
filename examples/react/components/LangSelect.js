import React, { Component } from 'react'
import Cookie from 'js-cookie'
import { locale, locales } from '../../t'

class LangSelect extends Component {
 
  constructor () {
    super()
    this.state = { locale }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    Cookie.set('locale', e.target.value)
    location.reload()
  }

  render () {
    return (
      <select value={this.state.locale} onChange={this.handleChange}>
        {
          locales.map(lang => (
            <option key={lang} value={lang}>{ lang }</option>
          ))
        }
      </select>
    )
  }

}

export default LangSelect
