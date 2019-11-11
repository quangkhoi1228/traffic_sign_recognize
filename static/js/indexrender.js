var indexrender = {
    build: function () {

        indexrender.addEventChooseImage();

        indexrender.addEventRenderResultTraffic();
    },

    addEventRenderResultTraffic: function () {

        var traffictrainidContainer = document.getElementById('traffictrainidContainer');

        if (traffictrainidContainer) {

            var resultContainer = traffictrainidContainer.parentElement;


            var interval = setInterval(function () {

                if (traffictrainidContainer) {

                    if (traffictrainidContainer.innerHTML.trim() != '') {

                        var trafficId = traffictrainidContainer.innerHTML.trim();

                        trafficinfomationrender.getTrafficData(function (data) {

                            var isHasDataSupport = false;
                            var resultColumn = document.getElementById('resultColumn');


                            for (var i = 0; i < data.length; i++) {

                                if (data[i]['trafficid'].includes('-' + trafficId + '-') == true) {

                                    shinobi.mapping.render('#trafficResultContainer', JSON.stringify(data[i]));

                                    isHasDataSupport = true;
                                }
                            }

                            if (isHasDataSupport == false) {
                                resultColumn.classList.remove('has-result');
                            } else {
                                resultColumn.classList.add('has-result');
                            }

                        })

                        clearInterval(interval);
                    }
                }

            }, 500);
        }

    },

    thankReport: function () {

        shinobi.notification.notification.info('Cảm ơn đóng góp của bạn');
    },

    getImageType: function (string) {

        var imageUrlSplit = string.split('.');

        var imageType = imageUrlSplit[imageUrlSplit.length - 1];

        return imageType
    },

    showDetail: function () {

        var detailSection = document.getElementById('detailSection');

        var fileChoosePreview = document.getElementById('fileChoosePreview');

        var imageUrl = fileChoosePreview.getAttribute('src');

        var newImageType = indexrender.getImageType(imageUrl);

        var listImage = detailSection.getElementsByTagName('img');

        for (var i = 0; i < listImage.length; i++) {

            var currentImageUrl = listImage[i].getAttribute('src');

            var currentImageType = indexrender.getImageType(currentImageUrl);

            var currentDate = new Date();
            var milisecond = currentDate.getTime();

            var newImageUrl = currentImageUrl.replace(currentImageType, newImageType) + '?' + milisecond;

            listImage[i].setAttribute('src', newImageUrl);
        }

        detailSection.classList.toggle('is-hidden');
    },

    addEventChooseImage: function () {

        var fileInput = document.getElementsByClassName('file-input')[0];

        var fileName = document.getElementsByClassName('file')[0].getElementsByClassName('file-name')[0];

        var form = document.getElementById('formInput');
        var submitButton = form.querySelector('[type="submit"]');

        var fileChoosePreview = document.getElementById('fileChoosePreview');

        var reader = new FileReader();

        fileInput.onchange = function () {

            shinobi.notification.notification.loading();

            submitButton.click();

            var file = this.files[0];

            fileName.innerHTML = file.name;

        }
    },
};