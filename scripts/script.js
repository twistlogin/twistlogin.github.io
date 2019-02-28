function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
};

var state = getQueryVariable("state");
var code = getQueryVariable("code");
var error_message = getQueryVariable("error_message");
var error = getQueryVariable("error");

$("#code").text(state + ";" + code);
if (code)
{
	$('button').on('click', function(){
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val($("#code").text()).select();
		document.execCommand("copy");
		$temp.remove();
		$("#success").text("Код скопирован, это окно можно закрыть");
	});
}
else if (error === "ACCESS_DENIED")
{
	$("h1").hide();
	$("button").hide();
	$("#success").text(error_message.replace("+", " ") + "\nДействие отменено пользователем.");
}