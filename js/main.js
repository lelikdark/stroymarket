$(function() {

});

$('.ui.dropdown').dropdown();

$('.browse')
    .popup({
        inline   : true,
        hoverable: true,
        position : 'bottom left',
        delay: {
            show: 300,
            hide: 800
        }
    })
;

$('.ui.sidebar')
    .sidebar({
        context: $('.bottom.row')
    })
    .sidebar('attach events', '.menu .cat')

;

$('.enter').click(function () {
        $('.ui.modal')
            .modal('show');
        return false ;

        ;
    }
);

