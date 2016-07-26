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

    
/* START page form validation*/
    (function(){

        // Email Validation 
        function validateEmail(email) { 
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

        // elements value status in array function
        function arrayEleStatus(array, ratio){
            var progressStatus = 0;
            var flag = true;
            for(var item in array){
                var thisVal = array[item].value;
                if(thisVal == "") {
                    flag = false;
                    return false
                }
            }
            if(flag == true){
                progressStatus += ratio;
            }
            return progressStatus;
        }

        // element value status function
        function eleStatus(ele, ratio) {
            var progressStatus = 0;
            if(ele.val() !== ''){
                progressStatus += ratio;
            } 
            return progressStatus;
        }

        // optional field validation
        function optionalFields(fields){
            for(var i=0; i<fields.length; i++){
                if(fields[i] > 0){
                    return fields[i];
                } 
            }
        }

         // element value status function
        function emailStatus(ele, ratio) {
            var progressStatus = 0;
            var eleVal = ele.val();
            if(validateEmail(eleVal)){
                progressStatus += ratio;
            }
            return progressStatus;
        }

        

    /* START School particular page form validation*/
        // global 
        var ratio = 7.69;
        var uDiseCodeEle = $('#uDiseCodeFields input'); // array
        var academicYearEle = $('#academicYearFields input[name]'); // array
        var schoolNameEle = $('#schoolNameField #schoolNameText');
        var villagePinCodeEle = $('#villagePinCodeFields input'); // array
        var villagePanchayatEle = $('#villagePanchayatField #villagePanchayatText');
        var crcEle = $('#crcfields #crcText');
        var nameOfCDBolckEle = $('#nameOfCDBolckField #nameOfCDBolckText');
        var educationalZoneEle = $('#educationalZoneField #educationalZoneText');
        var cityNameEle = $('#cityNameField #cityNameText');
        var officePhoneNumberEle = $('#officeContactNumbersFields #officePhoneNumberText input'); // array
        var officeMobileNumberEle = $('#officeContactNumbersFields #officeMobileNumberText input'); // array
        var respondantPhoneNumberEle = $('#respondantContactNumbersFields #respondantPhoneNumberText input'); // array
        var respondantMobileNumberEle = $('#respondantContactNumbersFields #respondantMobileNumberText input'); // array
        var schoolEmailIDEle = $('#schoolEmailIDField #schoolEmailIDText');
        var schoolWebsiteEle = $('#schoolWebsiteField #schoolWebsiteText');

        // input only one number in number fileds validation

        $('.input-code-wrapper input').on('keypress', function(){
            if($(this).val().length >= 1){
                return false
            }
        });

        /*$('.input-code-wrapper input').on('focus', function(){
            $(this).val("");
        });*/

        // blur on individual element hide/show error or success validation 
        function thisFieldValidation(status, ele){
            if(status > 0){
                $(ele).parents('.input-wrapper').find('.field-error').hide();
                $(ele).parents('.input-wrapper').find('.field-status-icon').removeClass('error-icon').addClass('success-icon');
            } else {
                $(ele).parents('.input-wrapper').find('.field-error').show();
                $(ele).parents('.input-wrapper').find('.field-status-icon').removeClass('success-icon').addClass('error-icon');
            }
        }

        // blur u-Dise-code
        uDiseCodeEle.blur(function(){
            var uDiseCode = arrayEleStatus(uDiseCodeEle, ratio); // array function
            thisFieldValidation(uDiseCode, uDiseCodeEle);
        })

        // blur academic year
        academicYearEle.blur(function(){
            var academicYear = arrayEleStatus(academicYearEle, ratio);
            thisFieldValidation(academicYear, academicYearEle);
        });

        // blur schoold name
        schoolNameEle.blur(function(){
            var schoolName = eleStatus(schoolNameEle, ratio);
            thisFieldValidation(schoolName, schoolNameEle);
        });

        // blur village pin code
        villagePinCodeEle.blur(function(){
            var villagePinCode = arrayEleStatus(villagePinCodeEle, ratio); // array function
            thisFieldValidation(villagePinCode, villagePinCodeEle);
        });

        // blur village panchayat
        villagePanchayatEle.blur(function(){
            var villagePanchayat = eleStatus(villagePanchayatEle, ratio);
            thisFieldValidation(villagePanchayat, villagePanchayatEle);
        });

        // blur cluster resource centre
        crcEle.blur(function(){
            var crc = eleStatus(crcEle, ratio);
            thisFieldValidation(crc, crcEle);
        });

        // blur name of cd block 
        nameOfCDBolckEle.blur(function(){
            var nameOfCDBolck = eleStatus(nameOfCDBolckEle, ratio);
            thisFieldValidation(nameOfCDBolck, nameOfCDBolckEle);
        });

        // blur education zone 
        educationalZoneEle.blur(function(){
            var educationalZone = eleStatus(educationalZoneEle, ratio);
            thisFieldValidation(educationalZone, educationalZoneEle);
        });

        // blur city name
        cityNameEle.blur(function(){
            var cityName = eleStatus(cityNameEle, ratio);
            thisFieldValidation(cityName, cityNameEle);
        });

        // blur office contact number
        var officeContactNumbersFields = $('#officeContactNumbersFields input');
        officeContactNumbersFields.blur(function(){
            var officePhoneNumber = arrayEleStatus(officePhoneNumberEle, ratio); // array function
            var officeMobileNumber = arrayEleStatus(officeMobileNumberEle, ratio); // array function
            //optional fields 
            var officeContact = [officePhoneNumber, officeMobileNumber];
            var officeContactOpt = optionalFields(officeContact);
            thisFieldValidation(officeContactOpt, officeContactNumbersFields);
        });

        // blur respondant contact number
        var respondantContactNumbersFields = $('#respondantContactNumbersFields input');
        respondantContactNumbersFields.blur(function(){
            var respondantPhoneNumber = arrayEleStatus(respondantPhoneNumberEle, ratio); // array function
            var respondantMobileNumber = arrayEleStatus(respondantMobileNumberEle, ratio); // array function
            //optional fields 
            var respondantContact = [respondantPhoneNumber, respondantMobileNumber];
            var respondantContactOpt = optionalFields(respondantContact);
            thisFieldValidation(respondantContactOpt, respondantContactNumbersFields);
        });

        // blur school email id
        schoolEmailIDEle.blur(function(){
            var schoolEmailID = emailStatus(schoolEmailIDEle, ratio);
            thisFieldValidation(schoolEmailID, schoolEmailIDEle);
        });

        // blur school webiste field
        schoolWebsiteEle.blur(function(){
            var shcoolWebsite = eleStatus(schoolWebsiteEle, ratio);
            thisFieldValidation(shcoolWebsite, schoolWebsiteEle);
        });

        // progess status variable 
        var schoolParticularProgress = $('#schoolParticularProgress');
        var schoolParticularProgressStatus = $('#schoolParticularProgress .progress-start');
 
        // main function
        function schoolParticularPageStatus(){            
            var uDiseCode = arrayEleStatus(uDiseCodeEle, ratio); // array function
            var academicYear = arrayEleStatus(academicYearEle, ratio); // array function
            var schoolName = eleStatus(schoolNameEle, ratio);
            var villagePinCode = arrayEleStatus(villagePinCodeEle, ratio); // array function
            var villagePanchayat = eleStatus(villagePanchayatEle, ratio);
            var crc = eleStatus(crcEle, ratio);
            var nameOfCDBolck = eleStatus(nameOfCDBolckEle, ratio);
            var educationalZone = eleStatus(educationalZoneEle, ratio);
            var cityName = eleStatus(cityNameEle, ratio);
            var officePhoneNumber = arrayEleStatus(officePhoneNumberEle, ratio); // array function
            var officeMobileNumber = arrayEleStatus(officeMobileNumberEle, ratio); // array function
            var respondantPhoneNumber = arrayEleStatus(respondantPhoneNumberEle, ratio); // array function
            var respondantMobileNumber = arrayEleStatus(respondantMobileNumberEle, ratio); // array function
            var schoolEmailID = emailStatus(schoolEmailIDEle, ratio);
            var shcoolWebsite = eleStatus(schoolWebsiteEle, ratio);
            
            //optional fields 
            var officeContact = [officePhoneNumber, officeMobileNumber];
            var officeContactOpt = optionalFields(officeContact);

            var respondantContact = [respondantPhoneNumber, respondantMobileNumber];
            var respondantContactOpt = optionalFields(respondantContact);


            // calcuation based on fileds status
            var progressStatusVar  = [uDiseCode, academicYear, schoolName, villagePinCode, 
            villagePanchayat, crc, nameOfCDBolck, educationalZone, cityName, officeContactOpt, 
            respondantContactOpt, schoolEmailID, shcoolWebsite];

            progressStatusVar = progressStatusVar.filter(function(d){
                return d;
            })

            var progressStatus = 0;
            for(var item in progressStatusVar) {
                progressStatus += progressStatusVar[item];
            }

            // progress style update 
            progressStatus = Math.round(progressStatus);
            if(progressStatus > 0 && progressStatus < 99){
                schoolParticularProgress.addClass('progress-started'); 
            } else if(progressStatus == 100){
                schoolParticularProgress.removeClass().addClass('progress-completed'); 
            } else {
                schoolParticularProgress.removeClass('progress-started'); 
            }
            schoolParticularProgressStatus.css('width', progressStatus + '%');  
        }

        $('#schoolParticularPage input').on('blur', function(){
            // main function call 
            schoolParticularPageStatus();
        });

        $('#schoolParticularPage input').on('focus', function(){
            $(this).attr('placeholder', '');
        });

        /* tiny input box on blur */
        function tinyInputNextFocus(inputsBlock, thisEle){
           var inputVal = thisEle.val().length;
            var thisIndex = thisEle.attr('data-index');
            thisIndex++;
            if(inputVal > 0){
                thisEle.blur();
                inputsBlock.map(function(item, index){
                    if(inputsBlock[item].getAttribute('data-index') == thisIndex){
                       inputsBlock[item].focus();
                    }; 
                })
            } 
        }

        uDiseCodeEle.on('keyup', function(){
            var thisEle = $(this);
            tinyInputNextFocus(uDiseCodeEle, thisEle);
        });

        academicYearEle.on('keyup', function(){
            var thisEle = $(this);
            tinyInputNextFocus(academicYearEle, thisEle);
        });

        villagePinCodeEle.on('keyup', function(){
            var thisEle = $(this);
            tinyInputNextFocus(villagePinCodeEle, thisEle);
        });

        officePhoneNumberEle.on('keyup', function(){
            var thisEle = $(this);
            tinyInputNextFocus(officePhoneNumberEle, thisEle);
        });

        officeMobileNumberEle.on('keyup', function(){
            var thisEle = $(this);
            tinyInputNextFocus(officeMobileNumberEle, thisEle);
        });

        respondantPhoneNumberEle.on('keyup', function(){
            var thisEle = $(this);
            tinyInputNextFocus(respondantPhoneNumberEle, thisEle);
        });

        respondantMobileNumberEle.on('keyup', function(){
            var thisEle = $(this);
            tinyInputNextFocus(respondantMobileNumberEle, thisEle);
        });
        
        
    /* END School particular page form validation*/
    
    })();
/* END page form validation*/

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


