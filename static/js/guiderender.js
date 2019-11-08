var guiderender = {

    build: function () {

        guiderender.addEventTabs();

    },

    addEventTabs: function () {

        var guideTabs = document.getElementById('guideTabs');

        var listTabs = guideTabs.getElementsByTagName('li');

        var listGuide = document.querySelectorAll('[guide-content]');


        for (var j = 0; j < listTabs.length; j++) {

            listTabs[j].onclick = function () {

                for (var i = 0; i < listTabs.length; i++) {

                    if (listTabs[i] == this) {

                        listTabs[i].classList.add('is-active');
                    } else {

                        listTabs[i].classList.remove('is-active');
                    }

                }

                if (this.hasAttribute('guide')) {

                    var key = this.getAttribute('guide');

                    for (var k = 0; k < listGuide.length; k++) {

                        if (listGuide[k].getAttribute('guide-content') == key) {

                            listGuide[k].classList.remove('is-hidden');
                        } else {

                            listGuide[k].classList.add('is-hidden');

                        }

                    }

                }
            }

        };


    },
};