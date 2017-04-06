$(document).ready(function () {
    $('body').scrollspy({
        target: '#navbar_items'
    });

    var wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'violet',
        progressColor: 'purple'
    });
    
    
})
