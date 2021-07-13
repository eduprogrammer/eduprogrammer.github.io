
function beginRadio(type) {    

    var rbFbyname = document.getElementById("rbFbyname");
    var rbFbycnpj = document.getElementById("rbFbycnpj");
    var rbFbyuf = document.getElementById("rbFbyuf");
    var rbUasgbycep = document.getElementById("rbUasgbycep");
    var rbUasgbyname = document.getElementById("rbUasgbyname");
    var rbLicitbyf = document.getElementById("rbLicitbyf");
    var rbLicitbyuasg = document.getElementById("rbLicitbyuasg");
    var rbLicitbyservidor = document.getElementById("rbLicitbyservidor");
    var rbLicitbyobjeto = document.getElementById("rbLicitbyobjeto");
    var rbLicitbyuf = document.getElementById("rbLicitbyuf");


    switch (type) {

        case 1:
            rbFbyname.checked = true;
            rbFbycnpj.checked = false;
            rbFbyuf.checked = false;
            rbUasgbycep.checked = false;
            rbUasgbyname.checked = false;
            rbLicitbyf.checked = false;
            rbLicitbyuasg.checked = false;
            rbLicitbyservidor.checked = false;
            rbLicitbyobjeto.checked = false;
            rbLicitbyuf.checked = false;
            editHolder.placeholder = "Em vez de espaço use o \"+\"";
            mode = "fbyname";
            consultMethod = 1;

            break;

        case 2:
            rbFbyname.checked = false;
            rbFbycnpj.checked = true;
            rbFbyuf.checked = false;
            rbUasgbycep.checked = false;
            rbUasgbyname.checked = false;
            rbLicitbyf.checked = false;
            rbLicitbyuasg.checked = false;
            rbLicitbyservidor.checked = false;
            rbLicitbyobjeto.checked = false;
            rbLicitbyuf.checked = false;
            editHolder.placeholder = "CNPJ (Sem pontos e barras)";
            mode = "fbycnpj";
            consultMethod = 1;
            break;

        case 3:
            rbFbyname.checked = false;
            rbFbycnpj.checked = false;
            rbFbyuf.checked = true;
            rbUasgbycep.checked = false;
            rbUasgbyname.checked = false;
            rbLicitbyf.checked = false;
            rbLicitbyuasg.checked = false;
            rbLicitbyservidor.checked = false;
            rbLicitbyobjeto.checked = false;
            rbLicitbyuf.checked = false;
            editHolder.placeholder = "UF com 2 letras (Ex: sp, rj, pe, etc.)";
            mode = "fbyuf";
            consultMethod = 1;
            break;

        case 4:
            rbFbyname.checked = false;
            rbFbycnpj.checked = false;
            rbFbyuf.checked = false;
            rbUasgbycep.checked = true;
            rbUasgbyname.checked = false;
            rbLicitbyf.checked = false;
            rbLicitbyuasg.checked = false;
            rbLicitbyservidor.checked = false;
            rbLicitbyobjeto.checked = false;
            rbLicitbyuf.checked = false;
            editHolder.placeholder = "CEP sem traços";
            mode = "uasgbycep";
            consultMethod = 2;
            break;

        case 5:
            rbFbyname.checked = false;
            rbFbycnpj.checked = false;
            rbFbyuf.checked = false;
            rbUasgbycep.checked = false;
            rbUasgbyname.checked = true;
            rbLicitbyf.checked = false;
            rbLicitbyuasg.checked = false;
            rbLicitbyservidor.checked = false;
            rbLicitbyobjeto.checked = false;
            rbLicitbyuf.checked = false;
            editHolder.placeholder = "Em vez de espaço use o \"+\"";
            mode = "uasgbyname";
            consultMethod = 2;
            break;

        case 6:
            rbFbyname.checked = false;
            rbFbycnpj.checked = false;
            rbFbyuf.checked = false;
            rbUasgbycep.checked = false;
            rbUasgbyname.checked = false;
            rbLicitbyf.checked = true;
            rbLicitbyuasg.checked = false;
            rbLicitbyservidor.checked = false;
            rbLicitbyobjeto.checked = false;
            rbLicitbyuf.checked = false;
            editHolder.placeholder = "CNPJ (Sem pontos e barras)";
            mode = "licitbyf";
            consultMethod = 3;
            break;

        case 7:
            rbFbyname.checked = false;
            rbFbycnpj.checked = false;
            rbFbyuf.checked = false;
            rbUasgbycep.checked = false;
            rbUasgbyname.checked = false;
            rbLicitbyf.checked = false;
            rbLicitbyuasg.checked = true;
            rbLicitbyservidor.checked = false;
            rbLicitbyobjeto.checked = false;
            rbLicitbyuf.checked = false;
            editHolder.placeholder = "Código da UASG (Ex: 30001 -TCU)";
            mode = "licitbyuasg";
            consultMethod = 3;
            break;

        case 8:
            rbFbyname.checked = false;
            rbFbycnpj.checked = false;
            rbFbyuf.checked = false;
            rbUasgbycep.checked = false;
            rbUasgbyname.checked = false;
            rbLicitbyf.checked = false;
            rbLicitbyuasg.checked = false;
            rbLicitbyservidor.checked = true;
            rbLicitbyobjeto.checked = false;
            rbLicitbyuf.checked = false;
            editHolder.placeholder = "Em vez de espaço use o \"+\"";
            mode = "licitbyservidor";
            consultMethod = 3;
            break;

        case 9:
            rbFbyname.checked = false;
            rbFbycnpj.checked = false;
            rbFbyuf.checked = false;
            rbUasgbycep.checked = false;
            rbUasgbyname.checked = false;
            rbLicitbyf.checked = false;
            rbLicitbyuasg.checked = false;
            rbLicitbyservidor.checked = false;
            rbLicitbyobjeto.checked = true;
            rbLicitbyuf.checked = false;
            editHolder.placeholder = "Em vez de espaço use o \"+\"";
            mode = "licitbyobjeto";
            consultMethod = 3;
            break;

        case 10:
            rbFbyname.checked = false;
            rbFbycnpj.checked = false;
            rbFbyuf.checked = false;
            rbUasgbycep.checked = false;
            rbUasgbyname.checked = false;
            rbLicitbyf.checked = false;
            rbLicitbyuasg.checked = false;
            rbLicitbyservidor.checked = false;
            rbLicitbyobjeto.checked = false;
            rbLicitbyuf.checked = true;
            editHolder.placeholder = "UF com 2 letras (Ex: sp, rj, pe, etc.)";
            mode = "licitbyuf";
            consultMethod = 3;
            break;
    
        default:
            break;
    }


    
};