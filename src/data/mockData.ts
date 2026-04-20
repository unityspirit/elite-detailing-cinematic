export type Language = 'en' | 'ru';

export const translations = {
  en: {
    nav: ['Portfolio', 'The Assembly', 'Journal'],
    hero: {
      titleLines: ['Restoring Time.', 'Building Eternity.'],
      subtitle: 'A private collective dedicated to the preservation of monumental heritage.',
      cta: 'Explore the Archive',
      bgImage: '/hero.png'
    },
    assembly: {
      sectionNum: '01',
      headlineMain: 'The Assembly:',
      headlineSub: 'A Sanctum of Craft.',
      paragraphs: [
        'UnitySpirit is not an agency. We are a guild of master masons, historians, and modernist architects unified by a single ethos: the dialogue between the primordial and the precise.',
        'We believe that true luxury lies in permanence. By restoring the stone monoliths of the past, we construct the spiritual foundations of the future.'
      ],
      image: '/port1.png',
      imageCaption: 'Material Integrity'
    },
    portfolio: {
      title: 'The Archive',
      subtitle: 'Restoration Projects 2018—2024',
      projects: [
        {
          id: 1,
          title: 'The Obsidian Vault',
          description: 'A complete structural restoration of a mid-century coastal fortress. Preserving the brutalist soul through basalt reinforcement.',
          image: '/port1.png',
          alignment: 'left'
        },
        {
          id: 2,
          title: 'Marble Atrium II',
          description: 'Precision restoration of 19th-century Carrara marble flooring using original artisanal techniques and modern stabilization.',
          image: '/port2.png',
          alignment: 'right'
        },
        {
          id: 3,
          title: 'Echo Chamber',
          description: 'Repurposing an industrial silo into a private acoustic gallery. A masterclass in thermal mass and raw material texture.',
          image: '/port3.png',
          alignment: 'left'
        }
      ],
      cta: 'View Project'
    },
    journal: {
      title: 'The Journal of Permanence',
      description: 'Curated insights on heritage, architecture, and the philosophy of stone delivered quarterly to your sanctum.',
      placeholder: 'Enter your email',
      subscribe: 'Subscribe'
    },
    footer: {
      brand: 'UnitySpirit',
      description: 'Preserving the silent weight of history through architectural precision. Member of the International Guild of Restoration Architects.',
      labels: {
        directory: 'Directory',
        network: 'Network',
        headquarters: 'Headquarters'
      },
      socials: ['Instagram', 'LinkedIn', 'Pinterest'],
      nav: ['Portfolio', 'The Assembly', 'Journal', 'Contact'],
      address: '14 Rue des Architectes\n75003 Paris, FR',
      contact: '+33 (0) 1 45 67 89 00\nhq@unityspirit.com',
      copyright: 'UnitySpirit. All rights reserved.',
      links: ['Privacy', 'Terms', 'Credits']
    }
  },
  ru: {
    nav: ['Портфолио', 'Ассамблея', 'Журнал'],
    hero: {
      titleLines: ['Восстанавливая Время.', 'Созидая Вечность.'],
      subtitle: 'Закрытый коллектив, посвященный сохранению монументального наследия.',
      cta: 'Исследовать Архив',
      bgImage: '/hero.png'
    },
    assembly: {
      sectionNum: '01',
      headlineMain: 'Ассамблея:',
      headlineSub: 'Святилище Ремесла.',
      paragraphs: [
        'UnitySpirit — это не агентство. Мы — гильдия мастеров-каменщиков, историков и архитекторов-модернистов, объединенных единым духом: диалогом между первозданным и точным.',
        'Мы верим, что истинная роскошь кроется в постоянстве. Восстанавливая каменные монолиты прошлого, мы закладываем духовный фундамент будущего.'
      ],
      image: '/port1.png',
      imageCaption: 'Целостность Материала'
    },
    portfolio: {
      title: 'Архив',
      subtitle: 'Реставрационные Проекты 2018—2024',
      projects: [
        {
          id: 1,
          title: 'Обсидиановое Хранилище',
          description: 'Полная структурная реставрация прибрежной крепости середины века. Сохранение бруталистской души посредством базальтового армирования.',
          image: '/port1.png',
          alignment: 'left'
        },
        {
          id: 2,
          title: 'Мраморный Атриум II',
          description: 'Точечная реставрация каррарского мраморного пола XIX века с использованием оригинальных ремесленных техник и современной стабилизации.',
          image: '/port2.png',
          alignment: 'right'
        },
        {
          id: 3,
          title: 'Эхо-Камера',
          description: 'Перепрофилирование промышленного силоса в частную акустическую галерею. Мастер-класс в области термомассы и текстуры сырого материала.',
          image: '/port3.png',
          alignment: 'left'
        }
      ],
      cta: 'Смотреть Проект'
    },
    journal: {
      title: 'Журнал Постоянства',
      description: 'Отобранные инсайты о наследии, архитектуре и философии камня, доставляемые ежеквартально в ваше святилище.',
      placeholder: 'Введите ваш email',
      subscribe: 'Подписаться'
    },
    footer: {
      brand: 'UnitySpirit',
      description: 'Сохраняем безмолвный вес истории через архитектурную точность. Член Международной Гильдии Архитекторов-Реставраторов.',
      labels: {
        directory: 'Каталог',
        network: 'Сеть',
        headquarters: 'Штаб-квартира'
      },
      socials: ['Instagram', 'LinkedIn', 'Pinterest'],
      nav: ['Портфолио', 'Ассамблея', 'Журнал', 'Контакты'],
      address: '14 Rue des Architectes\n75003 Paris, FR',
      contact: '+33 (0) 1 45 67 89 00\nhq@unityspirit.com',
      copyright: 'UnitySpirit. Все права защищены.',
      links: ['Конфиденциальность', 'Термины', 'Кредиты']
    }
  }
};
