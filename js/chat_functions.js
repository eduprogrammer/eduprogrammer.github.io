

function displayChat() {
    
    $("#chat_inside").css("visibility", "visible");
    $("#initChat").hide();
}

function closeChat() {
    $("#chat_inside").hide();
}

function sendChatMsg() {
    const name = $("#chat_name").val();
    const surname = $("#chat_surname").val();
    const msg = $("#chat_message").val();

    if(name == "" || name == undefined ||surname == "" || surname == undefined || msg == "" || msg == undefined) {
        alert("Preencha todos os campos"); 
    } else {
        
        //php request
        const xml = new XMLHttpRequest();
        xml.onload = function () {

            $("#insideClose").html("Aguarde. [X]");

            if(this.status == 200) {
                $("#chat_content").hide();
                $("#insideClose").html("Mensagem Enviada com Sucesso. [X]");
            } else {
                $("#insideClose").html("[X]");
                alert("Erro no envio da mensagem.");

            }
        };

        xml.open("POST", "php/chat.php");
        xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xml.send("name=" + $("#chat_name").val() + "&surname=" + $("#chat_surname").val() + "&message=" + $("#chat_message").val() + "&time=" + new Date().toDateString());

        
    }
}