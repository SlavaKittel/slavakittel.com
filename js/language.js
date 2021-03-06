var arrLang = {
    'en': {
        'home': 'Home',

        'about': 'About',
        'about1': "Hi! My name is Slava. I'm a frontend developer. Nice to meet you!",
        'about2': 'If you are looking for frontend development or UX / UI design you come to the right place.',
        'about3': 'After 10 years of experience as an engineer in the construction industry I recently entered into the frontend development and design industry. I realized that this is going to be my passion for many years. With strong motivation everyone can be the best!',

        'skills': 'Skills',
        'skills1': 'My skills',
        'skills2': 'What I Offer',
        'skills3': 'UX UI Design',
        'skills4': 'High understanding of the interacting user with the product!',
        'skills5': 'Like a wish in water',
        'skills6': 'Sport',
        'skills7': "Disc Golf, Snooker, Volleyball, MTB Bike Riding. Guys, it's contagious!",
        'skills8': 'Illustrator',
        'skills9': 'The necessary knowledge to solve a non-complex illustrations.',
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
        'portfolio1': 'Portfolio',
        'portfolio2': 'Recent Projects',
        'portfolio3': 'Flexibale and modern business card site',
        'portfolio4': 'Fast and stylish site for yoga',
        'portfolio5': 'SVG dynamic animation example',
        'portfolio6': 'So Soon as..',

        
        'contact': 'Contact',
        'contact1': 'Get in touch',
        'contact2': 'Click to copy my email to clipboard',
        'contact3': 'Yeah! You saved email to clipboard',
        
        'english': 'EN',
        
        'russian': 'RU',
                
    },
    'ru': {
        'home': 'Домой',
        
        'about': 'Обо мне',
        'about1': 'Привет, меня зовут Слава и я фронтэнд разработчик. Будем знакомы!',
        'about2': 'Если вы ищите услуги по фронтэнд разработке или UX/UI дизайну, вы попали в нужное место.',
        'about3': 'После 10 летнего опыта инженером в строительной сфере я не так давно ворвался в индустрию разроботки фронтенда и дизайна. Я понял, что это моя стихия и мое любимое дело на много лет вперед. Имея сильную мотивацию, каждый может стать лучшим!',

        'skills': 'Опыт',
        'skills1': 'Мой опыт',
        'skills2': 'Что я предлагаю',
        'skills3': 'UX UI Дизайн',
        'skills4': 'Высокое понимание взаимодействия пользователя с продуктом!',
        'skills5': 'Как рыба в воде',
        'skills6': 'Спорт',
        'skills7': 'Диск гольф, Снукер, Волейбол, MTB байк. Ребята, это заразно!',
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
        'portfolio1': 'ПОРТФОЛИО',
        'portfolio2': 'Недавние проекты',
        'portfolio3': 'Гибкий и современный сайт визитка',
        'portfolio4': 'Быстрый сайт для йоги',
        'portfolio5': 'Пример динамической анимации при помощи SVG',
        'portfolio6': 'В скором времени..',
        
        'contact': 'Контакт',
        'contact1': 'Сяжитесь со мной',
        'contact2': 'Кликните чтобы скопировать почту в буфер обмена',
        'contact3': 'Да! Вы скопировали почту в буфер обмена',
        
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