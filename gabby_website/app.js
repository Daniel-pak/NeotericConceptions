$(document).ready(function () {

    $('body').scrollspy({
        target: '.scrollSpyList'
    });

    ///////////


    $(".owl-carousel").owlCarousel({
        nav: true,
        responsive: {

        },
        slideBy: 3, 
        margin: 20,
        navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
    })
    /////////
    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
    })

    $('#vice').hide();

    //select options here
    $('#source').on("change", function () {
        if ($('#source').val() == 'sourceNY') {
            $('#nyPost').show();
            $('#vice').hide();
        } else if ($('#source').val() == 'sourceVice') {
            $('#nyPost').hide();
            $('#vice').show();
        }
    })
})
