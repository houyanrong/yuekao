define(['jquery', 'handlebar'], function($, han) {
    return function render(id, data, wrap) {
        var tpl = $(id).html();
        var template = han.compile(tpl);
        var html = template(data);
        $(wrap).html(html);
    }

});