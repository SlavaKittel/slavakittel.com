var arrLang = {
    'en': {
        'home': 'Home',

        'about': 'About',
        'about1': "Hi, my name is Slava, I'm an Fronted Developer. Nice to meet you!",
        'about2': 'If you are looking for front-end development or UX / UI design you have come to the right place.',
        'about3': 'After 10 years of experience as an engineer in the construction industry, I recently entered into the Frontend Development and Design industry, I realized that this is my element for years to come. With strong motivation, everyone can be the best!',

        'skills': 'Skills',
        'skills1': 'My skills',
        'skills2': 'What I Offer',
        'skills3': 'UX UI Design',
        'skills4': 'High understanding of the interacting user with the product!',
        'skills5': 'Like a wish in water',
        'skills6': 'Sport',
        'skills7': "Disc Golf, Snooker, Volleyball, MTB Bike - Caution I'm Contagious!",
        'skills8': 'Illustrator',
        'skills9': 'The necessary knowledge to solve non-complex illustrations.',
        'skills10': 'Writing scripts and algorithms. I love clean code.',
        'skills11': 'etc',
        
        'servicers': 'Services',
        'servicers1': 'SERVICES',
        'servicers2': 'What I Offer',
        'servicers3': 'Your new site',
        'servicers4': 'Keep up with the times',
        'servicers5': 'Redesign',
        'servicers6': 'Refresh your site',
        'servicers7': 'Frontend features',
        'servicers8': 'Any functional solutions using JavaScript',
        'servicers9': 'Animation',
        'servicers10': 'Add movement, attract customer',


        
        'portfolio': 'Portfolio',
        
        'contact': 'Contact',
        
        'english': 'EN',
        
        'russian': 'RU',
                
    },
    'ru': {
        'home': 'Домой',
        
        'about': 'Обо мне',
        'about1': 'Привет, меня зовут Слава и я Фронт-энд разработчик. Будем знакомы!',
        'about2': 'Если вы вы ищите услуги по Фронт-энд разработке или UX/UI дизайну вы попали в нужно место.',
        'about3': 'После 10 летнего опыта инженером в строительной сфере я не так давно ворвался в индустрию разроботки фронтенда и дизайна, я понял что это моя стихия и мое любимое дело на много лет вперед. Имея сильную мотивацию каждый может стать лучшим!',

        'skills': 'Опыт',
        'skills1': 'Мой опыт',
        'skills2': 'Что я предлагаю',
        'skills3': 'UX UI Дизайн',
        'skills4': 'Высокое понимание взаимодестивя пользователя с продуктом!',
        'skills5': 'Как рыба в воде',
        'skills6': 'Спорт',
        'skills7': 'Диск гольф, Снукер, Волейбол, MTB велосипед - осторожно я заразен!',
        'skills8': 'Иллюстратор',
        'skills9': 'Необходимые знания для решения не сложных иллюстраций',
        'skills10': 'Написания скритов и алгоритмов. Люблю чистый код.',
        'skills11': 'и прочее..',


        'servicers': 'Услуги',
        'servicers1': 'УСЛУГИ',
        'servicers2': 'Что Я Предлагаю',
        'servicers3': 'Твой новый сайт',
        'servicers4': 'Иди в ногу со временем',
        'servicers5': 'Обновись',
        'servicers6': 'Освежи свой сайт',
        'servicers7': 'Фронтэнд функционал',
        'servicers8': 'Любые решения функционала при помощи JavaScript',
        'servicers9': 'Анимация',
        'servicers10': 'Добавь движения, привлеки клиента',
        
        'portfolio': 'Портфолио',
        
        'contact': 'Контакт',
        
        'english': 'EN',
        
        'russian': 'РУ',
    }
  };

  // Process translation
  $(function() {
    $('.translate').click(function() {
      var lang = $(this).attr('id');

      $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    });
  });