import React from 'react'
import { Routes, Route } from 'react-router-dom'

import styles from './App.module.scss'
import { Home } from './screens/Home/Home'
import { Header } from './components/Header/Header'

export const App = () => (
  <div className={styles.App}>
    <Header />
    <Routes>
      <Route path='*' element={<Home />} />
    </Routes>
  </div>
)
