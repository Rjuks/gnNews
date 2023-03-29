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
          modalContent={`
          Pozytywne aspekty:
          - Przetestowanie paczki ant-design
          - Tworzenie projektu od zera
          
          
         Negatywne aspekty:
         - Dosyć chaotyczny "boilerplate" aplikacji. Z opisu zadania można zbudować fajną podstawkę pod rozbudowę, 
         lecz 12 godzin na instalacje paczek, konfiguracje, utworzenie i przemyślenie komponentów, responsywnosci, testów itp, 
         jest imo troszke okrojonym czasem.
         
         
         Uwagi: 
         
         Głownie skupiłem się na funkcjonalnościach. UI odłożyłem na dalszy plan, wiele rzeczy mogłoby zostać dopracowane:
         - Lepsze zabezpieczenie requestów z API (type guardy, mappery)
         - Dopracowanie designu (preferuje zespołowo uzgodnić dany flow UI/IX czy kolorystykę)
         - Zadbanie o bardziej reużywalne i responsywne zastosowanie styli
          `}
        />
      </Button.Group>
    </div>
  </Menu>
)
