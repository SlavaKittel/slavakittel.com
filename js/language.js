var arrLang = {
    'en': {
        'home': 'Home',

        'about': 'About',
        'about1': 'Hi, I’m Slava. Nice to meet you!',
        'about2': 'GHH hskdjf hsdfh ksjd fhkjsdh fkjsdh fksjdf skjd f',
        
        'skills': 'Skills',
        
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