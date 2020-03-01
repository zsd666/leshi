$('.close').click(function(){
    $(this).parent().hide();
})
$('.menu-select-btn').on('mouseenter','li',function(e){
    console.log()
    $(this).addClass('active').siblings().removeClass('active')
    $(this).parent().siblings('.menu-content-wrap').children().toggle()
    
})
$('.menu-select-btn').on('mouseleave','li',function(e){
    console.log()
    $(this).parent().siblings('.menu-content-wrap').children().hide()
    
})
