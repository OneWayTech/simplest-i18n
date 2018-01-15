import React, { Component } from 'react'
import LangSelect from './LangSelect'
import t from '../../t'

class App extends Component {

  componentDidMount () {
    console.log(
      t(
        '欢迎来到中国',
        'Welcome to the US',
        'ようこそ日本へ'
      )
    )
  }

  render () {
    return (
      <div>
        <LangSelect />

        { t(
          '你好，世界',
          'Hello, world',
          'こんにちは、世界'
        ) }
      </div>
    )
  }

}

export default App
