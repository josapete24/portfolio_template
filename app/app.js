function initListeners(){
    $("#nav nav a").click(function (e) {
        var btnID = this.id;
        MODEL.getView(btnID);
    });
    


    $("kingsmen a").click(function (e) {
        var btnID = this.id
        MODEL.getView(btnID);
        console.log("click")
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


function kingsmen(e){
    MODEL.getView("kingsmen");
}

function connectFour(e) {
    MODEL.getView("connectfour")
}

function projects(e) {
    MODEL.getView("projects")
}


$(document).ready(function(){
    initView();
});