var util = {

    xhrAdapter: {

        'getResource': function (url, callback) {
            this.accessResource("GET", url, callback);
        },
        
        'accessResource': function (method, url, callback) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    callback(xhttp.responseText);
                }
            };
            xhttp.open(method, url, true);
            xhttp.send();
        },
    }

}