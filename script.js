var player = "X"; //variável que indica qual jogador vai iniciar
var numjg = 0; //contador que indica a quantidade de jogadas e testa se deu velha 

//--------------------------------------------------------------------|
//------Função que coloca o X ou O caso o fundo for transparente------|
//--------------------------------------------------------------------|
function checkjg(id){
    var pc = document.getElementById('cpu').checked;
    var opt = verificaSrc(id);

    if(opt == "transp.png"){
        document.getElementById(id).src = "img/" + player + ".gif";
        numjg ++;
        //Testa a função wincheck abaixo para saber qual foi o vencedor
        if(wincheck()){
            if(player == "X"){
                document.getElementById("imagem").innerHTML = "<img src='img/fb.gif' width='500' heigth='500'/>"
            }
            if(player == "O"){
                document.getElementById("imagem").innerHTML = "<img src='img/mv.gif' width='500' heigth='500'/>"
            }

            return false;
        }

        if(numjg >= 9){
            alert("Deu velha!");
            return false;
        }
        
        if(player == "X"){
            player = "O";
            }else{
                player = "X";
        }
    }

    if(pc && player == "O"){
        setTimeout(() => {checkjg(jogoDoPc())}, 400);
    }

    function jogoDoPc(){
        if(verificaSrc('c5') == "transp.png"){
            return 'c5';
        }
        return 'c' + Math.floor((Math.random() * 9) + 1);
    } 

}

function btn(){

}
    
function verificaSrc(id){
    var file = document.getElementById(id).src;
    return file.substring(file.length - 10, file.length);
}

//--------------------------------------------------------------------|
//-------------Teste para saber qual jogador ganhou------------------ |
//--------------------------------------------------------------------|
function wincheck(){
    //Teste HORIZONTAL C1 C2 C3
    if((verificaSrc('c1') == verificaSrc('c2')) && (verificaSrc('c1') == 
        (verificaSrc('c3')) && verificaSrc('c1') != "transp.png")){
        return true;
    }
    //Teste HORIZONTAL C4 C5 C6
    if((verificaSrc('c4') == verificaSrc('c5')) && (verificaSrc('c4') == 
        (verificaSrc('c6')) && verificaSrc('c4') != "transp.png")){
        return true;
    }
    //Teste HORIZONTAL C7 C8 C9
    if((verificaSrc('c7') == verificaSrc('c8')) && (verificaSrc('c7') == 
        (verificaSrc('c9')) && verificaSrc('c7') != "transp.png")){
        return true;
    }

    //Teste VERTICAL C1 C4 C7
    if((verificaSrc('c1') == verificaSrc('c4')) && (verificaSrc('c1') == 
        (verificaSrc('c7')) && verificaSrc('c1') != "transp.png")){
        return true;
    }
    //Teste VERTICAL C2 C5 C3
    if((verificaSrc('c2') == verificaSrc('c5')) && (verificaSrc('c2') == 
        (verificaSrc('c8')) && verificaSrc('c2') != "transp.png")){
        return true;
    }
    //Teste VERTICAL C3 C6 C9
    if((verificaSrc('c3') == verificaSrc('c6')) && (verificaSrc('c3') == 
        (verificaSrc('c9')) && verificaSrc('c3') != "transp.png")){
        return true;
    }

    //Teste DIAGONAL C1 C5 C9
    if((verificaSrc('c1') == verificaSrc('c5')) && (verificaSrc('c1') == 
        (verificaSrc('c9')) && verificaSrc('c1') != "transp.png")){
        return true;
    }
    //Teste DIAGONAL C3 C5 C7
    if((verificaSrc('c3') == verificaSrc('c5')) && (verificaSrc('c3') == 
        (verificaSrc('c7')) && verificaSrc('c3') != "transp.png")){
        return true;
    }

    return false;
}


