/**
Online RTI Generator
grayfaceofindia.in
saiy2k (http://saiy2k.blogspot.in)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>
*/

var currentLang = 'en'
var listSubjectsindex = 0
function setup() {

    //console.log("setup");

    $.localise(['package'], {language: currentLang, loadBase: false, path: ['', 'js/i18n/']});
    $("#langtxt").html ("Current Language:  " + (currentLang =='en'? englishLang : tamilLang ) );
    
    $( "#saveButton" ).hide();

    $.reject({
        reject: {
            msie: true, // Microsoft Internet Explorer
            unknown: true, // Everything else
        },
        close: false,
        imagePath: './img/'
    }); // Customized Browsers


    $( "#txtName" ).focus(function() {
        $( "#tipText" ).empty();
        $( "#tipText" ).html(tipNameText);
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#txtAddress1" ).focus(function() {
        $( "#tipText" ).empty();
        $( "#tipText" ).text(tipAddr1Text);
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#txtAddress2" ).focus(function() {
        $( "#tipText" ).text(tipAddr2Text);
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#txtCity" ).focus(function() {
        $( "#tipText" ).text(tipCityText);
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#txtState" ).focus(function() {
        $( "#tipText" ).text(tipStateText);
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#txtPIN" ).focus(function() {
        $( "#tipText" ).text(tipPinText);
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    /**
    $( "#txtPIODesignation" ).focus(function() {
        $( "#tipText" ).text("OPTIONAL Field. In every Government office there is an officer designated as Public Information Officer (PIO) whose responsibility is to reply to RTI applications. The Designation of the PIO can be found by visiting corresponding department's web site and probing for links like 'RTI Contacts' / 'Right to Information;'. If you are not sure of the PIO, you can ignore this field.");
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });
    */

    $( "#txtPIOOffice" ).focus(function() {
        $( "#tipText" ).text(tipPIOText);
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#txtPIOAddress1" ).focus(function() {
        $( "#tipText" ).text(tipAddr1Text);
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#txtPIOAddress2" ).focus(function() {
        $( "#tipText" ).text(tipAddr2Text);
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#txtPIOCity" ).focus(function() {
        $( "#tipText" ).text(tipPIOCityText);
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#txtPIOPIN" ).focus(function() {
        $( "#tipText" ).text(tipPIOPinText);
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#txtPIOState" ).focus(function() {
        $( "#tipText" ).text(tipPIOStateText);
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });
    $( "#txtSubject" ).autocomplete({
        source: listSubjects,
        minLength: 0,
        select: function (event, ui) {
            var i = 0;
            listSubjectsindex = listSubjects.indexOf(ui.item.value);

            if ( $( "#txtDetail" ).val() == '' && 
                 $( "#txtInfo1" ).val() == '' &&
                 $( "#txtInfo2" ).val() == '' &&
                 $( "#txtInfo3" ).val() == '' &&
                 $( "#txtInfo4" ).val() == '' &&
                 $( "#txtInfo5" ).val() == '' &&
                 $( "#txtInfo6" ).val() == '' &&
                 $( "#txtInfo7" ).val() == '' &&
                 $( "#txtInfo8" ).val() == '' &&
                 $( "#txtInfo9" ).val() == '' &&
                 $( "#txtInfo10" ).val() == '' ) {

                updateQuestions(listSubjectsindex);

             } else {
                $('<div></div>').appendTo('body')
                    .html('<div><h4>'+ changeQPopupText +'</h4></div>')
                    .dialog({
                        modal: true, title: 'Delete message', zIndex: 10000, autoOpen: true,
                        width: 'auto', resizable: false,
                        buttons: {
                            "Yes": function () {
                                updateQuestions(listSubjectsindex);
                                $(this).dialog("close");
                            },
                            "No": function () {
                                $(this).dialog("close");
                            }
                        },
                        close: function (event, ui) {
                            $(this).remove();
                        }
                    });
             }
        }
    }).focus(function() {
        $(this).autocomplete("search", "");
    });

    $( "#txtSubject" ).focus(function() {
        $( "#tipText" ).text(tipSubjectText);
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#txtPeriod" ).focus(function() {
        $(this).val($(this).attr("placeholder"));
        $( "#tipText" ).text(tipPeriodText);
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#txtDetail" ).focus(function() {
        $( "#tipText" ).text(tipDetailText);
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( ".txtInformation" ).focus(function() {
        //$(this).val($(this).attr("placeholder"));
        var str, rnd;
        rnd = Math.random();
        if (rnd < 0.3) {
            str = tipRandom1Text;
        } else if (rnd < 0.6) {
            str = tipRandom2Text;
        } else if (rnd < 1.0) {
            str = tipRandom3Text;
        }
        $( "#tipText" ).text(str);
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#radioPovertyYes" ).focus(function() {
        $( "#tipText" ).text(tipPovertyText);
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
        $( "#feeSection" ).slideUp();
    });

    $( "#radioPovertyNo" ).focus(function() {
        $( "#tipText" ).text(tipPovertyNoText);
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
        $( "#feeSection" ).slideDown();
    });

    $( "#radioFeeCourtFee" ).focus(function() {
        $( "#tipText" ).text(tipCourtFeeText);
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#radioFeePostalOrder" ).focus(function() {
        $( "#tipText" ).text(tipPostalOrderText);
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#radioFeeDD" ).focus(function() {
        $( "#tipText" ).text(tipDDText);
        $( "#tipContainer" ).offset({top: $(this).offset().top - 100});
    });

    $( "#btnGenerate" ).off().on('click',function() {
        if(validateFields()) {
            confirmrti();
        }else{
            $(window).scrollTop($("#mainBody").offset().top);
        }
    }); 

    //confirmrti();
    updateQuestions(listSubjectsindex);
	loadFromLocalStorage();

    angular.element(document.getElementById('mainBody')).scope().refreshAll();
};

function validateFields(){
    var isValid = true;
    if($.trim($("#txtName").val()).length == 0){
        $(".txtName").addClass("visible");
        isValid = false;
    }else{
        $(".txtName").removeClass("visible");
    }
    if($.trim($("#txtAddress1").val()).length == 0){
        $(".txtAddress1").addClass("visible");
        $(".txtAddress1").focus();
        isValid = false;
    }else{
        $(".txtAddress1").removeClass("visible");
    }
    if($.trim($("#txtCity").val()).length == 0){
        $(".txtCity").addClass("visible");
        $(".txtCity").focus();
        isValid = false;
    }else{
        $(".txtCity").removeClass("visible");
    }
    if($.trim($("#txtState").val()).length == 0){
        $(".txtState").addClass("visible");
        $(".txtState").focus();
        isValid = false;
    }else{
        $(".txtState").removeClass("visible");
    }
    if($.trim($("#txtPIN").val()).length == 0){
        $(".txtPIN").addClass("visible");
        $(".txtPIN").focus();
        isValid = false;
    }else{
        $(".txtPIN").removeClass("visible");
    }
    if($.trim($("#txtPIOOffice").val()).length == 0){
        $(".txtPIOOffice").addClass("visible");
        $(".txtPIOOffice").focus();
        isValid = false;
    }else{
        $(".txtPIOOffice").removeClass("visible");
    }
    if($.trim($("#txtDetail").val()).length == 0){
        $(".txtDetail").addClass("visible");
        $(".txtDetail").focus();
        isValid = false;
    }else{
        $(".txtDetail").removeClass("visible");
    }
    var isQuestionsAvailable = false;
    for(i=1;i<=10;i++){
        if($.trim($("#txtInfo"+(i)).val()).length != 0){
            isQuestionsAvailable = true;
        }
    }
    if(!isQuestionsAvailable){
        $(".txtInfo1").addClass("visible");
        isValid = false;
    }else{
        $(".txtInfo1").removeClass("visible");
    }
    return isValid;
}


function updateQuestions(index) {

    $( "#txtSubject" ).attr("placeholder", listSubjects[index]);

    $( "#txtDetail" ).val(listDetails[index]);
    //$( "#txtDetail" ).attr("placeholder", listDetails[index]);

    for (i = 0; i < listQuestions[index].length; i++) {
        $( "#txtInfo" + (i+1) ).val(listQuestions[index][i]);
        //$( "#txtInfo" + (i+1) ).attr("placeholder", listQuestions[index][i]);
    }
    for (i = i; i < 10; i++) {
        $( "#txtInfo" + (i+1) ).val("");
        $( "#txtInfo" + (i+1) ).attr("placeholder", "");
    }

};

function confirmrti() {

    var str = generate();

    //console.log(str);

    //var uriContent = "data:application/octet-stream," + encodeURIComponent(str);

    //window.open(uriContent, 'rti.html');
    //location.href = uriContent;

    setSaveFile(str, "rti.txt", "text/html");

    //$( "#saveButton" ).show();
    $('<div></div>').appendTo('body')
        .html(confirmAlertText)
        .dialog({
            modal: true, title: 'Feedback please', zIndex: 10000, autoOpen: true,
            width: 'auto', resizable: false,
            buttons: {
                "Yes": function () {
                    window.open("https://docs.google.com/forms/d/1CKRwVQTTF0Z5hywUiqgFiG3d_Sf2ZTsi8YMhhudAClU/viewform", "_blank");
                    $(this).dialog("close");
                },
                "No": function () {
                    $(this).dialog("close");
                }
            },
            close: function (event, ui) {
                $(this).remove();
            }
        });

}

function generate() {

    var str = "";

    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //Months are zero based
    var curr_year = d.getFullYear();
    var ddate = curr_date + "-" + curr_month + "-" + curr_year;
    str += applicationStr_01 + "\n";
    str += applicationStr_02 + "\n\n";
    str += applicationStr_03 + "\n";
    str += ($("#txtName").val() + "" + "\n");
    str += ($("#txtAddress1").val() + "" + "\n");
    if ( $("#txtAddress2").val() != "") {
        str += ($("#txtAddress2").val() + "" + "\n");
    }

    str += ($("#txtCity").val() + "" + "\n");
    str += ($("#txtState").val() + " - " + $("#txtPIN").val()  + "" + "\n" + "\n");
    str += applicationStr_04 + "\n";
    str += applicationStr_05 + "\n";
    str += ($("#txtPIOOffice").val() + "" + "\n");
    str += ($("#txtPIOAddress1").val() + "" + "\n");
    if ( $("#txtPIOAddress2").val() != "") {
        str += ($("#txtPIOAddress2").val() + "" + "\n");
    }

    str += ($("#txtPIOCity").val() + "" + "\n");
    str += ($("#txtPIOState").val() + " - " + $("#txtPIOPIN").val()  + "" + "\n" + "\n");
    str += applicationStr_06 + "\n";
    str += applicationStr_07 + "\n\n";
    str += applicationStr_08 + "\n";
    if ($("#txtDetail").val() != "") {
        str += ($("#txtDetail").val() + "" + "\n" + "\n");
    } else {
        str += ("" + "\n");
    }   

    for (var i = 0; i < 10; i++) {
        var strQues =  $( "#txtInfo" + (i+1) ).val();
        if (strQues == "") {
            break;
        }
        str += ( "    " + strQues + "" + "\n" + "\n");
    }

    str += applicationStr_09;

    if ( $( "#radioFeeCourtFee" ).is(":checked") ) {
        str += applicationStr_10 + "\n";
    } else if ( $( "#radioFeePostalOrder" ).is(":checked") ) {
        str += applicationStr_11 + "\n";
    } else if ( $( "#radioFeeDD" ).is(":checked") ) {
        str += applicationStr_12 + "\n";
    }

    str += ("" + "\n");
    str += applicationStr_13 + "\n";
    str += ( $( "#txtName" ).val() + "\n" );

    return str;
}

function setSaveFile(contents, file_name, mime_type) {

    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(contents));
    pom.setAttribute('download', file_name);

    pom.style.display = 'none';
    document.body.appendChild(pom);

    pom.click();

    document.body.removeChild(pom);

    /*
    $.ajax({
        type: "POST",
        url: "api/save.php",
        data: {'data': contents},
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    }).done(function( msg ) {
        console.log( "Data Saved: " + msg );
        //document.location = 'api/' + msg;
    });
    */

    /*
    // DOCX Saving code
    $.ajax({
        type: "POST",
        url: "api/htmltodocx.php",
        data: {'data': contents}
    }).done(function( msg ) {
        console.log( "Data Saved: " + msg );
        document.location = 'api/' + msg;
    });
*/
}


$(".language").on('click', function(){
   currentLang = this.id;
   setup();
});

function loadFromLocalStorage(){
	$('#hongkiat-form').find(':input').each(function(){
		if(!(this.id == "radioPovertyYes" ||this.id == "radioPovertyNo" ||this.id == "radioFeeCourtFee" ||this.id == "radioFeePostalOrder" ||this.id == "radioFeeDD" ||this.id == "btnGenerate" ||  this.id == "resetbtn" || this.id == "btnSaveRTI")){
			$(this).val(localStorage.getItem(this.id));
		}
	})
}

function saveToLocalStorage(){
	$('#hongkiat-form').find(':input').each(function(){
		if(!(this.id == "radioPovertyYes" ||this.id == "radioPovertyNo" ||this.id == "radioFeeCourtFee" ||this.id == "radioFeePostalOrder" ||this.id == "radioFeeDD" ||this.id == "btnGenerate" ||  this.id == "resetbtn" || this.id == "btnSaveRTI")){
			localStorage.setItem(this.id,this.value);
		}
	})
    $('<div></div>').appendTo('body')
        .html(saveAlertText)
        .dialog({
            modal: true, title: "Save RTI",
            buttons: {
                Ok: function() {
                    $( this ).dialog( "close" );
                }
            }
        });
}

function clearLocalStorage(){
    localStorage.clear();
}



