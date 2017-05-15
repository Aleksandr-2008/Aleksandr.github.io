 	    	var link = document.querySelector(".login");
 	    	var popup = document.querySelector(".modal-content");
 	    	var close = document.querySelector(".modal-content-close");
 	    	var form = popup.querySelector("form");

 	    	var login = popup.querySelector("[name=login]");
 	    	var password = popup.querySelector("[name=password]");
 	    	var storage = localStorage.getItem("login");

 	    	var mapOpen = document.querySelector(".js-open-map");
 	    	var mapPopup = document.querySelector(".modal-content-map");
 	    	var mapClose = mapPopup.querySelector(".modal-content-close");
 	    	var gallery = document.querySelector(".gallery");

 	    	gallery.classList.add("gallery-live");

 	    	//Добавляем управляющие элементы
 	    	//
 	    	//
 	    	var buttons = 
 	    	'<button class="btn gallery-prev" type="button">Назад</button>' + 
              '<button class="btn gallery-next" type="button">Вперёд</button>';

            gallery.innerHTML = gallery.innerHTML + buttons;

            //задаём начальное состояние кнопок
            var prev = document.querySelector(".gallery-prev");
            prev.setAttribute('disabled', 'disabled');

            //Инициализация завершена
            //Далее - типовой код работы галереи:
            //обработка событий переключение слайдов и.т.д.


 	    	link.addEventListener("click", function(event) {
 	    		event.preventDefault();
 	    		//console.log("Клик по ссылке вход");
 	    		popup.classList.add("modal-content-show");
 	    		

 	    		if (storage) {
 	    			login.value = storage;
 	    			password.focus();
 	    		} else {
 	    			login.focus();
 	    		}
 	    	});

 	    	close.addEventListener("click", function(event) {
 	    		event.preventDefault();
 	    		//console.log("Клик по крестику");
 	    		popup.classList.remove("modal-content-show");
 	    		popup.classList.remove("modal-error");
 	    	});

 	    	form.addEventListener("submit", function(event) {
 	    		if (!login.value || !password.value) {
 	    		event.preventDefault();
 	    		//console.log("Нужно ввести логин и паоль");
 	    		popup.classList.add("modal-error");
 	    		} else {
 	    			localStorage.setItem("login", login.value);
 	    		}
 	    		//console.log(login.value);
 	    		//console.log(password.value);
 	    	});

 	    	window.addEventListener("keydown", function(event) {
 	    		if (event.keyCode === 27) {
 	    			if(popup.classList.contains("modal-content-show")) {
 	    				popup.classList.remove("modal-content-show");
 	    				popup.classList.remove("modal-error");
 	    			}
 	    		}
 	    	});

 	    	//работа с map

 	    	mapOpen.addEventListener("click", function(event) {
 	    		event.preventDefault();
 	    		mapPopup.classList.add("modal-content-show");
 	    	});

 	    	mapClose.addEventListener("click", function(event) {
 	    		event.preventDefault();
 	    		mapPopup.classList.remove("modal-content-show");
 	    	});

 	    	window.addEventListener("keydown", function(event) {
 	    		if (event.keyCode === 27) {
 	    			if(mapPopup.classList.contains("modal-content-show")) {
 	    				mapPopup.classList.remove("modal-content-show");
 	    			}
 	    		}
 	    	});