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

$(document).ready(function(){

    /* English to Regional language translation */
    var regionalLanguage = "hindi";
    pramukhIME.addLanguage(PramukhIndic, regionalLanguage);
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

    $('input[data-lang="language-convert"]').on('keyup', function(){
        var InputString =  $(this).val();
        var app = pramukhIME.convert(InputString, 'english', regionalLanguage);
        $(this).parent().siblings().find('input').val(app);
    });    


    /* input single numeric value */
    $('.input-code input').on('keyup', function(){
        var inputVal = $(this).val().length;
        if(inputVal > 0){
            $(this).blur();
            $(this).next().focus();
        }
    });
});



/*$('input,textarea').focus(function() {
        $(this).data('placeholder', $(this).attr('placeholder'))
            .attr('placeholder', '');
    }).blur(function() {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });

    var container = document.getElementsByClassName("input-code")[0];
    container.onkeyup = function(e) {
        var target = e.srcElement;
        var maxLength = parseInt(target.attributes["maxlength"].value, 10);
        var myLength = target.value.length;
        if (myLength >= maxLength) {
            var next = target;
            while (next = next.nextElementSibling) {
                if (next == null)
                    break;
                if (next.tagName.toLowerCase() == "input") {
                    next.focus();
                    break;
                }
            }
        }
    }
*/
