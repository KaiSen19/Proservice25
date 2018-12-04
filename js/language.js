var dict = {
    'en': {
        'home': 'Home',
        'services': 'Services',
        'about': 'About',
        'contact':'Contact'

    },
    'th': {
        'home': 'หน้าหลัก',
        'services': 'บริการ',
        'about': 'เกี่ยวกับเรา',
        'contact':'ติดต่อ',
        'call':'เบอร์โทร'
    }
};

$(function(){
    $('.translate').click(function(){
        var lang = $(this).attr('id');
        console.log(lang);
        $('.lang').each(function(indext,element){
            $(this).text(dict[lang][$(this).attr('key')]);
        });
    });
    var lang = "th";
    $('.lang').each(function(indext,element){
        $(this).text(dict[lang][$(this).attr('key')]);
    });
});
