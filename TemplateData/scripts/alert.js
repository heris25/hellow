$(document).ready(function(){
    var $temp = $("<input>");
    var $url = $(location).attr('href');
    $('#btn').click(function() {
    $("body").append($temp);
    $temp.val($url).select();
    document.execCommand("copy");
    $temp.remove();
    /*$("p").text("URL copied!");*/
    $(".alert").show();
    setTimeout(function() { $(".alert").hide(); }, 3000);
    
    });
});
