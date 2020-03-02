$('.close').click(function(){
    $(this).parent().hide();
    $(this).parent().next().children().children('.cart-name').show()
})
$('.menu-select-btn').on('mouseenter','li',function(e){
    $(this).addClass('active').siblings().removeClass('active')  
   var $index = $(this).index()
   var $eq= $('.menu-content-box').eq($index)
   $eq.show().siblings().hide()
   $('.menu-content-wrap').show()
})
$('.menu-select-btn').on('mouseleave','li',function(e){
    $(this).removeClass('active')
   var $index = $(this).index()
   var $eq= $('.menu-content-box').eq($index)
   $eq.hide()
   $('.menu-content-wrap').hide()
})
$('.menu-content-wrap').on('mouseover',function(){
    var $index = $('.menu-select-btn>li').index()
    var $eq= $('.menu-content-box').eq($index)
    $eq.show().siblings().show()
    $(this).finish().show()
})
$('.menu-content-wrap').on('mouseout',function(){
    var $index = $('.menu-select-btn>li').index()
    var $eq= $('.menu-content-box').eq($index)
    $eq.show().siblings().hide()
    $(this).finish().hide()
})
