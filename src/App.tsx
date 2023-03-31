import React from 'react'
import { Routes, Route } from 'react-router-dom'

import styles from './App.module.scss'
import { Home } from './screens/Home/Home'
import { AppLayout } from './layouts/AppLayout/AppLayout'
import { ROUTES } from './consts/routing'
import { CountryNews } from './screens/CountryNews/CountryNews'

export const App = () => (
  <div className={styles.App}>
    <AppLayout>
      <Routes>
        <Route path='*' element={<Home />} />
        <Route
          path={`${ROUTES.COUNTRY}/:countryCode`}
          element={<CountryNews />}
        />
      </Routes>
    </AppLayout>
  </div>
)
