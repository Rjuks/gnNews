import { Menu, Button, Select } from 'antd'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ViewTypeButton } from '../ViewTypeButton/ViewTypeButton'
import { ROUTES } from '../../consts/routing'
import styles from './Header.module.scss'
import { ButtonModal } from './ButtonModal/ButtonModal'
import { modalContent } from '../../consts/mockups'
import { useLanguage } from '../../helpers/useLanguage'
import { LANGUAGES } from '../../consts/types'

const { Option } = Select

export const Header = () => {
  const { t } = useTranslation()

  const [language, setLanguage] = useLanguage()

  return (
    <Menu className={styles.Header} mode='horizontal'>
      <Menu.Item key='logo'>
        <NavLink className={styles.Header__logo} to={ROUTES.HOME}>
          gnNews
        </NavLink>
      </Menu.Item>
      <div className={styles.Header__buttons}>
        <Button.Group>
          <ViewTypeButton type='primary' />

          <ButtonModal
            buttonText={t('MODAL_INFO')}
            modalTitle=''
            modalContent={
              <div
                dangerouslySetInnerHTML={{
                  __html: modalContent.replace(/\n/g, '<br>')
                }}
              />
            }
          />
        </Button.Group>
      </div>

      <Select
        value={language}
        onChange={value => setLanguage(value as LANGUAGES)}
        className={styles.Header__languageSelect}
        dropdownClassName={styles.Header__languageSelect_dropdown}
        dropdownStyle={{ minWidth: '200px' }}
      >
        <Select.OptGroup label={t('CHANGE_LANGUAGE')}>
          <Option value={LANGUAGES.ENGLISH}>{t('LANGUAGE_ENGLISH')}</Option>
          <Option value={LANGUAGES.POLISH}>{t('LANGUAGE_POLISH')}</Option>
        </Select.OptGroup>
      </Select>
    </Menu>
  )
}
