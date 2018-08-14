    $(document).ready(function(){
     //$("#rio").mouseover(function(){
       //  $("#rioblanco_punto").css("fill", "#123444");
     //});


     // Efecto Over para el Mapa
     //Cuando el mouse pasa por el ID cambia de color el ID_Punto

     //Rioblanco
     $('#rio').on({
    mouseenter: function () {
        $('#rioblanco_punto').css('fill', '#006837');
    },
    mouseleave: function () {
        $('#rioblanco_punto').css('fill', 'white');
    }
	});

    //Planadas
    $('#pla').on({
    mouseenter: function () {
        $('#planadas_punto').css('fill', '#006837');
    },
    mouseleave: function () {
        $('#planadas_punto').css('fill', 'white');
    }
	});

	//Chaparral
    $('#cha').on({
    mouseenter: function () {
        $('#chaparral_punto').css('fill', '#006837');
    },
    mouseleave: function () {
        $('#chaparral_punto').css('fill', 'white');
    }
	});

	//Ataco
    $('#ata').on({
    mouseenter: function () {
        $('#ataco_punto').css('fill', '#006837');
    },
    mouseleave: function () {
        $('#ataco_punto').css('fill', 'white');
    }
	});


});