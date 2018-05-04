require.config({
    paths: {
        'jquery': "../lib/jquery-1.8.3",
        'handlebar': "../lib/handlebars-v4.0.11",
        'render': "./tpl",
        'swiper': "../lib/swiper"
    }
})
require(['jquery', 'handlebar', 'render', 'swiper'], function($, han, render, swiper) {
    function getData() {
        $.ajax({
            url: '/index',
            dataType: 'json',
            success: function(data) {
                console.log(data);
                shop(data);
            }
        })
    }

    function shop(data) {
        var data = data.data.page[0].datalist;
        render('#shop', data, ".shop");
    }
    getData()
    $('.tab span').on('click', function() {
        var ind = $(this).index();
        $(this).addClass('line').siblings().removeClass('line');
        $('section').children('div').eq(ind).show().siblings().hide();
    })
})