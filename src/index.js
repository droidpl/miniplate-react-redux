import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import models from './models'
import { init } from '@rematch/core'
import App from './components/App'
import axiosConfigurer from './scafold/axiosConfigurer'
import axios from 'axios'

const store = init({
  models
});
export const { dispatch } = store;

axiosConfigurer(axios, store);

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
);