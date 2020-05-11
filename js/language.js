var arrLang = {
    'en': {
        'home': 'Home',

        'about': 'About',
        'about1': 'Hi, I’m Slava. Nice to meet you!',
        'about2':  'After 10 years of experience as an engineer in the construction industry, I recently entered into the Frontend Development and Design industry, I realized that this is my element for years to come. With strong motivation, everyone can be the best!',
        
        'skills': 'Skills',
        'skills1': 'My skills',
        'skills2': 'What I Offer',
        'skills3': 'UX UI Design',
        'skills4': 'High understanding of the interacting user with the product!',
        
        'servicers': 'Services',
        
        'portfolio': 'Portfolio',
        
        'contact': 'Contact',
        
        'english': 'EN',
        
        'russian': 'RU',
                
    },
    'ru': {
        'home': 'Домой',
        
        'about': 'Обо мне',
        'about1': 'Привет, я Слава. Будем знакомы!',
        'about2': 'После 10 летнего опыта инженером в строительной сфере я не так давно ворвался в индустрию разроботки фронтенда и дизайна, я понял что это моя стихия и мое любимое дело на много лет вперед. Имея сильную мотивацию каждый может стать лучшим!',
        
        'skills': 'Опыт',
        'skills1': 'Мой опыт',
        'skills2': 'Что я предлагаю',
        'skills3': 'UX UI Дизайн',
        'skills4': 'Высокое понимание взаимодестивя пользователя с продуктом!',

        'servicers': 'Услуги',
        
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