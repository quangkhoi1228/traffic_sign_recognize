var indexrender = {
    build: function () {

        indexrender.addEventChooseImage();
    },
    addEventChooseImage: function () {

        var fileInput = document.getElementsByClassName('file-input')[0];

        var fileName = document.getElementsByClassName('file')[0].getElementsByClassName('file-name')[0];

        var fileChoosePreview = document.getElementById('fileChoosePreview');

        var reader = new FileReader();

        reader.onloadend = function () {

            fileChoosePreview.src = reader.result;
        }

        fileInput.onchange = function () {

            console.log(this.files[0]);

            var file = this.files[0];

            fileName.innerHTML = file.name;

            if (file) {
                reader.readAsDataURL(file);
            } else {
                fileChoosePreview.src = "";
            }

            indexrender.sendRequestDetectTrafficSign(file);

        }
    },
    sendRequestDetectTrafficSign: function (file) {

        console.log(file);
        $.ajax({
            type: "POST",
            url: 'my-ajax-test/',
            data: { csrfmiddlewaretoken: '{{ csrf_token }}', text: 'file' },
            success: function callback(response) {
                /* do whatever with the response */
                alert(response);
            }
        });

    }
};