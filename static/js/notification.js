shinobi.notification = {
	'modal' : {
		'modalId' : 'confirmPanel',
		'isInitLoad' : false,
		'isAccept' : false,
		'confirm' : function(callback) {
			var modal = document.getElementById(this.modalId);

			modal.classList.add("is-active");

			if (!this.isInitLoad) {
				this.registerButton();
			}

			this.isInitLoad = true;
			this.isAccept = false;

			this.doAccept = callback;
		},
		'registerButton' : function() {
			var modal = document.getElementById(this.modalId);

			var closeButton = modal.getElementsByClassName("delete")[0];

			closeButton.addEventListener("click", function() {
				modal.classList.remove("is-active");
			});

			var cancelButton = modal.getElementsByClassName("cancel")[0];

			cancelButton.addEventListener("click", function() {
				modal.classList.remove("is-active");
			});

			var yesButton = modal.getElementsByClassName("yes")[0];

			var modalObject = this;

			yesButton.addEventListener("click", function() {
				modal.classList.remove("is-active");

				modalObject.isAccept = true;

				modalObject.doAccept();
			});
		},
		'doAccep' : function() {
		}
	},
	'notification' : {
		'notificationId' : 'shinobinotification',
		'isInitLoad' : false,
		'isLoading' : true,
		'show' : function(type, content) {
			var notification = document.getElementById(this.notificationId);

			if ("info" === type) {
				notification.classList.add("infomessage");
				notification.classList.remove("errormessage");

				setTimeout(function() {
					notification.classList.remove("infomessage");
				}, 3000);
			} else {
				notification.classList.remove("infomessage");
				notification.classList.add("errormessage");
			}

			var notificationcontent = notification
					.getElementsByClassName("notificationcontent")[0];
			notificationcontent.innerHTML = content;

			if (!this.isInitLoad) {
				this.registerButton();
				this.isInitLoad = true;
			}
		},
		'info' : function(content) {
			this.show('info', content);
		},
		'error' : function(content) {
			this.show('error', content);
		},
		'loading' : function() {

			var notification = document.getElementById(this.notificationId);

			this.isInitLoad = true;

			notification.classList.add("infomessage");
			notification.classList.remove("errormessage");

			var notificationcontent = notification
					.getElementsByClassName("notificationcontent")[0];
			notificationcontent.innerHTML = '<div class="columns is-vcentered"> <a class="button is-text  is-loading"></a> <div class="">Đang xử lý</div> </div>';

		},
		'loaded' : function() {

			this.isInitLoad = false;

			var notification = document.getElementById(this.notificationId);

			notification.classList.remove("infomessage");

		},
		'registerButton' : function() {
			var notification = document.getElementById(this.notificationId);

			var closeButton = notification.getElementsByClassName("delete")[0];

			closeButton.addEventListener("click", function() {
				notification.classList.remove("infomessage");
				notification.classList.remove("errormessage");
			});
		}
	}

};