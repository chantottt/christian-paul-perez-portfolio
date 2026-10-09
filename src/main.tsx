import React from 'react'
import ReactDOM from 'react-dom/client'
import { MotionConfig } from 'motion/react'
import '@fontsource-variable/inter'
import './styles/index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><MotionConfig reducedMotion="user"><App /></MotionConfig></React.StrictMode>,
)
