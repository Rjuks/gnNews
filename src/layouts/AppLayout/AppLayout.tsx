import React from 'react'
import { Layout } from 'antd'
import SideMenu from '../../components/Sidemenu/Sidemenu'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'

import './AppLayout.scss'

const { Content } = Layout

interface LayoutProps {
  children: React.ReactNode
}

export const AppLayout: React.FC<LayoutProps> = ({ children }) => (
  <Layout>
    <Header />
    <Layout>
      <SideMenu />
      <Content className='ContentContainer'>{children}</Content>
    </Layout>
    <Footer />
  </Layout>
)
