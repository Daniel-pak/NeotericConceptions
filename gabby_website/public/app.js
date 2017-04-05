$(document).ready(function () {

    $('body').scrollspy({
        target: '.scrollSpyList'
    });
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
