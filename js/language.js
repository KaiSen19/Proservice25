var dict = {
    'en': {
        'nameweb':'ProService25',
        'home': 'Home',
        'services': 'Services',
        'about': 'About Us',
        'contact':'Contact',
        'address':'Address',
        'phone':'Phone Number',
        'email':'E-Mail',
        'yourname':'Your Name',
        'youephone':'Your Phone number',
        'subject':'Subject',
        'message':'Message',
        'sendmessage':'Send Message'

    },
    'th': {
        'nameweb':'ProService25',
        'home': 'หน้าหลัก',
        'services': 'บริการ',
        'about': 'เกี่ยวกับเรา',
        'contact':'ติดต่อ',
        'address':'ที่อยู่',
        'phone':'เบอร์โทรศัพท์',
        'email':'อีเมลล์',
        'yourname':'ชื่อผู้ติดต่อ',
        'youephone':'เบอร์ผู้ติดต่อ',
        'subject':'หัวข้อ',
        'message':'ข้อความ',
        'sendmessage':'ส่งข้อความ'

    }
};

$(function(){


    $('.translate').click(function(){
        var lang = $(this).attr('id');
        console.log(lang);
        $('.lang').each(function(indext,element){
            $(this).text(dict[lang][$(this).attr('key')]);
          
        });
        $('#name').attr("placeholder", dict[lang].yourname);
        $('#phone').attr("placeholder", dict[lang].youephone);
        $('#subject').attr("placeholder", dict[lang].subject);
        $('#message').attr("placeholder", dict[lang].message);
    });
    var lang = "th";
    $('.lang').each(function(indext,element){
        $(this).text(dict[lang][$(this).attr('key')]);
       
        
    });
    $('#name').attr("placeholder", dict[lang].yourname);
    $('#phone').attr("placeholder", dict[lang].youephone);
    $('#subject').attr("placeholder", dict[lang].subject);
    $('#message').attr("placeholder", dict[lang].message);

  
});
