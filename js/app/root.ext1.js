;(function($, roadmap) {
    
    console.log('Execute roadmap module extension 1');

    var pub = {

        name: 'Roadmap module extension 1',

        init: function() {
            console.log('Init roadmap module extension 1');
        }
        
    };

    roadmap.registerModule(pub);

})(window.jQuery, window.roadmap);