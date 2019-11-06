var trafficinfomationrender = {

    build: function () {

        trafficinfomationrender.renderTable();
    },

    renderTable: function () {

        trafficinfomationrender.getTrafficData(function (data) {

            var table = document.getElementsByClassName('table')[0];

            var tbody = table.getElementsByTagName('tbody')[0];

            for (var i = 0; i < data.length; i++) {

                var tr = tbody.insertRow();

                var imageContainer = tr.insertCell();

                imageContainer.innerHTML = '<figure class="image is-64x64"><img class="is-rounded" src="' +
                    data[i].image + '"></figure>';

                var descriptionContainer = tr.insertCell();

                descriptionContainer.innerHTML = '<strong>' + data[i].name + '</strong> ' + data[i].description;

            }

        })

    },
    getTrafficData: function (callback) {

        var data = util.xhrAdapter.getResource('/static/json/trafficinfomation.json', function (response) {

            var data = JSON.parse(response);

            if (typeof callback == 'function') {

                callback(data);

            }
        })
    }
}