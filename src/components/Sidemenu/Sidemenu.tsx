import React from 'react'
import { Layout, Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CountriesData } from '../../consts/flags'
import { ROUTES } from '../../consts/routing'

const { Sider } = Layout

const SideMenu = () => {
  const { t } = useTranslation()

  return (
    <Sider>
      <Menu mode='inline'>
        <Menu.ItemGroup title={t('COUNTRY_NEWS')}>
          {CountriesData.map(country => (
            <NavLink
              to={`${ROUTES.COUNTRY}/${country.code}`}
              key={country.name}
            >
              <Menu.Item
                icon={<img src={country.flagImg} alt={country.name} />}
              >
                <span>{t(`FLAG_${country.name.toUpperCase()}`)}</span>
              </Menu.Item>
            </NavLink>
          ))}
        </Menu.ItemGroup>
      </Menu>
    </Sider>
  )
}

export default SideMenu
