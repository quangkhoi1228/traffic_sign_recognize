var contactrender = {

    build: function () {

        contactrender.addEventSubmit();
    },

    addEventSubmit: function () {

        var sendMessageFormContainer = document.getElementById('sendMessageFormContainer');

        var button = sendMessageFormContainer.getElementsByTagName('button')[0];

        button.onclick = function () {

            var request = contactrender.getInput();

            if (request != false) {

                shinobi.notification.notification.info('Cảm ơn góp ý của ' +
                    request.name + '. Chúc ' +
                    request.name + ' một ngày tốt lành.');
            }
        }
    },

    getInput: function () {

        var sendMessageFormContainer = document.getElementById('sendMessageFormContainer');

        var listInput = sendMessageFormContainer.querySelectorAll('[snb-key]');

        var request = {};

        for (var i = 0; i < listInput.length; i++) {

            if (listInput[i].value.trim() == '') {

                shinobi.notification.notification.error('Vui lòng nhập đầy đủ thông tin');

                listInput[i].classList.add('is-danger');

                return false;
            } else {

                listInput[i].classList.remove('is-danger');

                var key = listInput[i].getAttribute('snb-key');

                request[key] = listInput[i].value.trim();

            }
        }

        return request;
    },
};