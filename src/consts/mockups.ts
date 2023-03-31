import { newsViewTypeEnum } from '../store/slices/configuration/types'
import { NewsItem } from './types'

export const mockupNewsData: NewsItem[] = Array.from({ length: 23 }).map(
  (_, i) => ({
    id: i,
    itemType: newsViewTypeEnum.LIST,
    title: `Title example ${i}`,
    imgUrl: `https://joesch.moe/api/v1/random?key=${i}`,
    url: `https://joesch.moe/api/v1/random?key=${i}`,
    source: {
      id: null,
      name: `source name ${i}`
    },
    publishedAt: `publish at ${i}`,
    author: `randomAuthor${i}`,
    description: 'Lorem ipsum.'
  })
)

export const modalContent = `
Pozytywne aspekty:
- Przetestowanie paczki ant-design
- Tworzenie projektu od zera

Negatywne aspekty:
- Dosyć chaotyczny "boilerplate" aplikacji, z opisu zadania można zbudować fajną podstawkę pod rozbudowę, 
  lecz 12 godzin na instalacje paczek, konfiguracje, utworzenie i przemyślenie komponentów, responsywnosci, testów jest dosyć ograniczonym czasem do stworzenia przemyślanej struktury aplikacji.

Własne uwagi: 
Głownie skupiłem się na funkcjonalnościach. UI odłożyłem na dalszy plan.
 
Wiele rzeczy mogłoby zostać dopracowane:
- Lepsze zabezpieczenie requestów z API (type guardy, mappery)
- Dopracowanie designu (preferuje zespołowo uzgodnić dany flow UI/IX czy kolorystykę)
- Zadbanie o bardziej reużywalne i responsywne zastosowanie styli
`
