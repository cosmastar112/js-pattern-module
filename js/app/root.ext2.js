;(function($, roadmap) {
    
    console.log('Execute roadmap module extension 2');

    var pub = {

        name: 'Roadmap module extension 2',

        init: function() {
            console.log('Init roadmap module extension 2');
        }
        
    };

    roadmap.registerModule(pub);

})(window.jQuery, window.roadmap);