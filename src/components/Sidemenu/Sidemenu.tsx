import React from 'react'
import { Layout, Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import { CountriesData } from '../../consts/flags'
import { ROUTES } from '../../consts/routing'

const { Sider } = Layout

const SideMenu = () => (
  <Sider>
    <Menu mode='inline'>
      <Menu.ItemGroup title='Country news'>
        {CountriesData.map(country => (
          <NavLink to={`${ROUTES.COUNTRY}/${country.code}`}>
            <Menu.Item
              key={country.code}
              icon={<img src={country.flagImg} alt={country.name} />}
            >
              <span>{country.name}</span>
            </Menu.Item>
          </NavLink>
        ))}
      </Menu.ItemGroup>
    </Menu>
  </Sider>
)

export default SideMenu
