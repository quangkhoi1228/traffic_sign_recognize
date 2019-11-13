var table = document.getElementsByTagName('table');

for( var i = 0 ; i < table.length;i++){

    var listImg = table[i].querySelectorAll('[src]');

    for( var j = 0 ; j < listImg.length ; j++){

        var a = document.createElement('a');
        var url = listImg[j].getAttribute('src').split('/');
        a.setAttribute('class','button');
        a.setAttribute('download',url[url.length-1]);
        a.setAttribute('href',listImg[j].getAttribute('src'));
        listImg[j].parentElement.appendChild(a);

        a.click();
    }
}