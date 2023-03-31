import { Menu, Button } from 'antd'
import { NavLink } from 'react-router-dom'
import { ViewTypeButton } from '../ViewTypeButton/ViewTypeButton'
import { ROUTES } from '../../consts/routing'
import styles from './Header.module.scss'
import { ButtonModal } from './ButtonModal/ButtonModal'
import { modalContent } from '../../consts/mockups'

export const Header = () => (
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
          buttonText='Open modal'
          modalTitle='Opis'
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
  </Menu>
)
