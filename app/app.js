function initListeners(){
    $("#nav nav a").click(function (e) {
        var btnID = this.id;
        MODEL.getView(btnID);
    });

}



function initView() {
    $.get('../views/navigation.html', function(nav){
        $("#nav").html(nav);
        initListeners();
    });

    $.get('../views/home.html', function(home){    
        $("#app").html(home);
    });

    $.get('../views/footer.html', function(footer){   
        $("#footer").html(footer);
    });

}



$(document).ready(function(){
    initView();
});