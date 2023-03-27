import { Menu, Button } from 'antd'
import { NavLink } from 'react-router-dom'
import { ViewTypeButton } from '../ViewTypeButton/ViewTypeButton'
import { ROUTES } from '../../utils/routing'
import styles from './Header.module.scss'
import { ButtonModal } from './ButtonModal/ButtonModal'

export const Header = () => (
  <Menu className={styles.Header} mode='horizontal'>
    <Menu.Item>
      <NavLink className={styles.Header__logo} to={ROUTES.HOME}>
        gnNews
      </NavLink>
    </Menu.Item>
    <div className={styles.Header__buttons}>
      <Button.Group>
        <ViewTypeButton type='primary' />

        {/* todo - fill modal content */}
        <ButtonModal
          buttonText='Open modal'
          modalTitle='Wymagania'
          modalContent='Content'
        />
      </Button.Group>
    </div>
  </Menu>
)
