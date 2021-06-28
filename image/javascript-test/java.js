
/*using jQuery*/
/*
$('.list li a').click(function(e){

    e.preventDefault()
    
    $(this).addClass('active').parent().siblings().find('a').removeClass('active')

    $('body , html').animate({

        scrollTop : $(""+$(this).data('scroll')+"").offset().top

    },1000)
})

$(window).scroll(function(){

    $('.block').each(function(){

        if($(window).scrollTop() >= $(this).offset().top){

            $('.list li a[data-scroll = #'+$(this).attr('id')+']').addClass('active').parent().siblings().find('a').removeClass('active')
            
        }
    })
})


// galery  image

$(' .galery img').click(function(){

    $(this).addClass('active').parent().siblings().find('img').removeClass('active')

    $('.content .master img').fadeOut(200).attr('src',$(this).attr('src')).fadeIn(800)
})

$('.master .fa-chevron-right').click(function(){

    
    $('.galery img.active').next().click()
})

$('.links li').click(function(){

    $(this).addClass('active').siblings().removeClass('active')
})
*/

// regular function
    
 const nam="azedin",
       age=22;

const user = {
    nam,
    age:15 
}
console.log(user)

