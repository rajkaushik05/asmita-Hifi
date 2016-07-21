$(document).ready(function(){

/* START English to Regional language translation */
    var regionalLanguage = "hindi";
    pramukhIME.addLanguage(PramukhIndic, regionalLanguage);

    // list of element enable write regional language
    pramukhIME.enable('schoolNameTextRegional');
    pramukhIME.enable('habitationNameTextRegional');
    pramukhIME.enable('villageNameTextRegional');
    pramukhIME.enable('villagePanchayatTextRegional');
    pramukhIME.enable('crcTextRegional');
    pramukhIME.enable('nameOfCDBolckTextRegional');
    pramukhIME.enable('eductionalZoneTextRegional');
    pramukhIME.enable('assemblyConstituencyTextRegional');
    pramukhIME.enable('municipalityTextRegional');
    pramukhIME.enable('cityTextRegional');
    pramukhIME.enable('geographicalTextRegional');

    // function for traslate english to regional language
    $('input[data-lang="language-convert"]').on('keyup', function(){
        var InputString =  $(this).val();
        var app = pramukhIME.convert(InputString, 'english', regionalLanguage);
        $(this).parent().siblings().find('input').val(app);
    });

    // label convert in regional language
    var labelArray = $('label[data-lang]');
    for(var i=0; i<labelArray.length; i++){
        var InputString = labelArray[i].innerHTML;
        var app = pramukhIME.convert(InputString, 'english', regionalLanguage);
        labelArray[i].innerHTML = app;
    }

    
    
/* END English to Regional language translation */   

    /* input single numeric value */
    $('.input-code input').on('keyup', function(){
        var inputVal = $(this).val().length;
        if(inputVal > 0){
            $(this).blur();
            $(this).next().focus();
        }
    });

    // Toggle hide/show language
    $("#toggle").click(function(){
        $("#more-lang").slideToggle();
        $("#toggle").css("content", "\f106");
    });

    // Toggle active class in languages
    $('.languages li a').click(function(e) {
        e.preventDefault(); //prevent the link from being followed
        $('.languages li a').removeClass('active');
        $(this).addClass('active');
    });


});


