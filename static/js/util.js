var util = {

    xhrAdapter: {

        'getResource': function (url, callback, failcallback) {
            this.accessResource("GET", url, callback, failcallback);
        },

        'accessResource': function (method, url, callback, failcallback) {
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