import React from 'react'
import { Layout } from 'antd'
import SideMenu from '../../components/Sidemenu/Sidemenu'
import { Header } from '../../components/Header/Header'
import './AppLayout.scss'

const { Content, Footer } = Layout

interface LayoutProps {
  children: React.ReactNode
}

export const AppLayout: React.FC<LayoutProps> = ({ children }) => (
  <Layout>
    <Header />
    <Layout>
      <SideMenu />
      <Content>{children}</Content>
    </Layout>
    <Footer>Ant Design ©2023 Created by Ant UED</Footer>
  </Layout>
)
