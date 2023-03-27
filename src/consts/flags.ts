import polandFlagImg from '../assets/flags/poland.png'
import franceFlagImg from '../assets/flags/france.png'
import germanyFlagImg from '../assets/flags/germany.png'
import swedenFlagImg from '../assets/flags/sweden.png'
import spainFlagImg from '../assets/flags/spain.png'
import unitedStatesFlagImg from '../assets/flags/united-states.png'

interface Country {
  code: string
  name: string
  flagImg: string
}

export const CountriesData: Country[] = [
  {
    code: 'pl',
    name: 'Poland',
    flagImg: polandFlagImg
  },
  {
    code: 'de',
    name: 'Germany',
    flagImg: germanyFlagImg
  },
  {
    code: 'se',
    name: 'Sweden',
    flagImg: swedenFlagImg
  },
  {
    code: 'es',
    name: 'Spain',
    flagImg: spainFlagImg
  },
  {
    code: 'fr',
    name: 'France',
    flagImg: franceFlagImg
  },
  {
    code: 'us',
    name: 'United States',
    flagImg: unitedStatesFlagImg
  }
]
