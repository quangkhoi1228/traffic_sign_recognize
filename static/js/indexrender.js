var indexrender = {
    build: function () {

        indexrender.addEventChooseImage();

        indexrender.addEventRenderResultTraffic();
    },

    addEventRenderResultTraffic: function () {

        var traffictrainidContainer = document.getElementById('traffictrainidContainer');

        var interval = setInterval(function () {

            if (traffictrainidContainer.innerHTML.trim() != '') {

                var trafficId = traffictrainidContainer.innerHTML.trim();

                trafficinfomationrender.getTrafficData(function (data) {

                    console.log(data);

                    console.log(trafficId);
                })

                clearInterval(interval);
            }
        }, 500);
    },

    addEventChooseImage: function () {

        var fileInput = document.getElementsByClassName('file-input')[0];

        var fileName = document.getElementsByClassName('file')[0].getElementsByClassName('file-name')[0];

        var form = document.getElementById('formInput');
        var submitButton = form.querySelector('[type="submit"]');

        var fileChoosePreview = document.getElementById('fileChoosePreview');

        var reader = new FileReader();

        fileInput.onchange = function () {

            submitButton.click();

            var file = this.files[0];

            fileName.innerHTML = file.name;

        }
    },
};