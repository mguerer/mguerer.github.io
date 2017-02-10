function fonctionRequeteApi(url,id){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById(id).innerHTML = jsonPretty;
    }
};
xmlhttp.open("GET", url , true);
xmlhttp.send();
}
function homePageLoading(){
var url ="http://bitcoin.mubiz.com/info";
var elementID ="info";
fonctionRequeteApi(url,elementID);

var url ="http://bitcoin.mubiz.com/blockchaininfo";
var elementID ="blockchaininfo";
fonctionRequeteApi(url,elementID);

var url ="http://bitcoin.mubiz.com/peerinfo";
var elementID ="peerinfo";
fonctionRequeteApi(url,elementID);

var url ="http://bitcoin.mubiz.com/mininginfo";
var elementID ="mininginfo";
fonctionRequeteApi(url,elementID);
}
homePageLoading();
