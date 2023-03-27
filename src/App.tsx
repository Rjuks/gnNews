import React from 'react'
import { Routes, Route } from 'react-router-dom'

import styles from './App.module.scss'
import { Home } from './screens/Home/Home'
import { AppLayout } from './layouts/AppLayout/AppLayout'

export const App = () => (
  <div className={styles.App}>
    <AppLayout>
      <Routes>
        <Route path='*' element={<Home />} />
      </Routes>
    </AppLayout>
  </div>
)
