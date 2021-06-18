import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import reducers from './reducers'
import Root from './components/Root'

import './styles/main.css'
import './styles/theme_default.css'

import './i18n'

const store = createStore(reducers)
render(<Root store={store} />, document.getElementById('root'))
