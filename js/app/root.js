window.roadmap = (function($) {

    console.log('Execute root roadmap module');
    console.log('jquery: ' + $);

    let pub = {

        name: 'Roadmap root module',

        init: function()
        {
            initRoot();
            initModules();
        },

        registerModule: function(pub) {
            modules.push(pub);
        }

    };

    var modules = [];

    function initRoot() {
        console.log('Init root module');
    }

    function initModules() {
        for (var i = 0, l = modules.length; i < l; i++) {
            var module = modules[i];
            console.log('start init module[' + i + ']: ' + module.name);
            module.init();
            console.log('end init module[' + i + ']: ' + module.name);
        }
    }

    return pub;

})(window.jQuery);

window.jQuery(function () {
    window.roadmap.init();
});