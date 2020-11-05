var MODEL = (function() {
    var _getView = function(viewName) {   
        $.get(`../views/${viewName}.html`, function(home){    
            $("#app").html(home);
        });
    };

    return {
        getView: _getView,
    }
})();