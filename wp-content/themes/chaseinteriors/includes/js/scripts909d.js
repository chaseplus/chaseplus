jQuery(document).ready(function($) {

    /*****************************************ANIMISITION JS*****************************/
    $(".animsition-overlay").animsition({
        inClass: 'fade-in-down-sm',
        outClass: 'fade-out-up-sm',
        inDuration: 1500,
        outDuration: 1500,  
        linkElement: 'a:not([target="_blank"]):not([href^=#]):not([href^="javascript:void(0)"]):not([href^="mailto:"]:not([href^="tel:"])',
        // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        unSupportCss: ['animation-duration',
            '-webkit-animation-duration',
            '-o-animation-duration'
        ],
        //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body'
    });
});