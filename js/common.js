$(function() {

	$("#phone, #phone2, #phone3, #phone4, #phone5").mask("+7 (999) 999-9999");

	$(".popup").magnificPopup();


	$(".menu ul li a").mPageScroll2id({
		offset: 55
	});


	// Set options
	 var options = {
	 	offset: '#showHere',
	 	offsetSide: 'top',
	 	classes: {
	 		clone:   'banner--clone',
	 		stick:   'banner--stick',
	 		unstick: 'banner--unstick'
	 	}
	 };

        // Initialise with options
        var banner = new Headhesive('.banner', options);

        // Headhesive destroy
        // banner.destroy();

	ymaps.ready(init);
    var myMap;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [59.869088, 30.270961],
            zoom: 16
        });
   //      var myPlacemark = new ymaps.Placemark([59.868559, 30.269937], {
   //      	balloonContentSize: [400, 100], 
			//     balloonContentHeader: 'Однажды',
			//     balloonContentBody: 'В студёную зимнюю пору',
			//     balloonContentFooter: 'Мы пошли в гору',
			//     hintContent: 'Зимние происшествия'
			// });

        	myPlacemark0 = new ymaps.Placemark([59.868559, 30.269937], { // Создаем метку с такими координатами и суем в переменную
				        balloonContent: '<div style="color: #fff; text-align: left; font-size: 18px; font-family: clearSansRegular, sans-serif; margin-left: 58px;"><p style="margin-bottom: 0; margin-top: 15px;">г. Санкт-Петербург, ул. Автовская, <br />д.17, оф.215</p> <p style="margin-top: 4px;">Ежедневно с 9:00 до 19:00</p></div>' // сдесь содержимое балуна в формате html, все стили в css
					}, {
					balloonContentSize: [408, 126], // размер нашего кастомного балуна в пикселях
					balloonLayout: "default#imageWithContent", // указываем что содержимое балуна кастомная херь
					balloonImageHref: 'img/balloon.png', // Картинка заднего фона балуна
					balloonImageOffset: [-366, -129], // смещание балуна, надо подогнать под стрелочку
					balloonImageSize: [408, 126], // размер картинки-бэкграунда балуна
					balloonShadow: false
				});

			// Балун откроется в точке «привязки» балуна — т. е. над меткой.
			myMap.geoObjects.add(myPlacemark0);
			myPlacemark0.balloon.open();
    }

	$(".slider").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true
	});

	$(".service_item h3").equalHeights();
	$(".machine_item_element").equalHeights();
	$(".item_adv").equalHeights();

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
