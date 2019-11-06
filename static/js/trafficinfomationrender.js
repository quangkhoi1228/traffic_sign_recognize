var trafficinfomationrender = {

    build: function () {

        trafficinfomationrender.renderTable();
    },

    renderTable: function () {

        var data = util.xhrAdapter.getResource('/static/json/trafficinfomation.json', function (response) {

            var table = document.getElementsByClassName('table')[0];

            var tbody = table.getElementsByTagName('tbody')[0];

            var data = JSON.parse(response);

            console.log(data);

            for (var i = 0; i < data.length; i++) {

                var tr = tbody.insertRow();

                var imageContainer = tr.insertCell();

                imageContainer.innerHTML = '<figure class="image is-64x64"><img class="is-rounded" src="' +
                    data[i].image + '"></figure>';

                var descriptionContainer = tr.insertCell();

                descriptionContainer.innerHTML = '<strong>' + data[i].name + '</strong> ' + data[i].description;

            }
        })




    }
}