/**
 * 
 */

$(document).ready(function () {
	HindiEnglish('H');
	$("#EN").hide();
	$("#HI").show();
    $('#HI').on('click', function (event) {
	     $('#EN').show();
	     $('#HI').hide();

	 });

	 $('#EN').on('click', function (event) {
	     $('#EN').hide();
	     $('#HI').show();

	 });
	
});


function language(element)
{
	if (element == "E") {
	    HindiEnglish('E');
    }
    else {
        HindiEnglish('H');
    }	
}

function HindiEnglish(x) {
	
	
	if (x == "E") {

//      common start------------------------------------------------------			
		$("#menu").html("Menu");
		$("#directory").html("Directory");
		
//      common end------------------------------------------------------			
//		header.jsp start------------------------------------------------------		
		$("#mini-logo").html("<b>IGRS</b>");
		$("#lg-logo").html("<b>IGRS - U.P.</b>");
		$("#dashboard").html(" Dashboard");
		$("#signout").html("Sign out");

		
//		header.jsp end------------------------------------------------------			
		
//		dplMapping.jsp start------------------------------------------------------
		$("#contheader-dplMapping").html("Add Department Post Level Mapping<small></small>");
		$("#contheader-dplMapping1").html("Add Department Post Level Mapping<small></small>");
		$("#dplmapping").html("Department Post Level Mapping");
		$("#mappingid").html("Mapping ID");
		$("#deptid").html("Department");
		$("#postid").html("Post");
		$("#levelid").html("Level");

		//Department zone district division----------------------
		$("#contheader-depZone").html("Add Department Zone Mapping<small></small>");
		$("#contheader-depZone1").html("Add Department Zone Mapping<small></small>");
		$("#depzone").html("Department Zone Mapping");
		$("#zone_id").html("Zone");
		

		
//		disposableLevel.jsp start------------------------------------------------------		
		
		
		$("#contheader-disple-lblMapping").html("Disposal Level Mapping<small></small>");
		$("#contheader-desplMapping1").html("Disposal Level Mapping");
		$("#desplmapping").html("Disposal Level Mapping");
		$("#dlevelid").html("Disposal Level ID");
		$("#dlevelName").html("Disposal Level");
		$("#dispmapid").html("Mapping Details");
		$("#disposal_Category").html("Category");

	}
	
	else
		{
		
//      common start------------------------------------------------------	
		$("#menu").html("मेनू ");
		$("#directory").html("निर्देशिका");

//      common end------------------------------------------------------	
//		header.jsp start------------------------------------------------------		
		$("#mini-logo").html("<b>आई जी आर एस</b>");
		$("#lg-logo").html("<b>आई जी आर एस - यू पी</b>");
		$("#dashboard").html(" डैशबोर्ड");
		$("#signout").html("साइन आउट");

//		header.jsp end------------------------------------------------------		
		
//		dplMapping.jsp start------------------------------------------------------		
		
		$("#contheader-dplMapping").html("विभाग पोस्ट लेवल मैपिंग जोड़ें<small></small>");
		$("#contheader-dplMapping1").html("विभाग पोस्ट लेवल मैपिंग जोड़ें");
		$("#dplmapping").html("विभाग पोस्ट लेवल मैपिंग");
		$("#mappingid").html("मैपिंग आईडी");
		$("#dplmapping").html("विभाग पोस्ट लेवल मैपिंग");
		$("#deptid").html("विभाग");
		$("#postid").html("पोस्ट");
		$("#levelid").html("स्तर");
		$("#postid_mis").html("माननीय जनप्रतिनिधि का पद");
		
//		dplMapping.jsp end------------------------------------------------------
		
		//Department zone district division----------------------
		$("#contheader-depZone").html("विभाग ज़ोन मैपिंग जोड़ें<small></small>");
		$("#contheader-depZone1").html("विभाग ज़ोन मैपिंग जोड़ें");
		$("#depzone").html("विभाग ज़ोन मैपिंग");
		$("#zone_id").html("जोन");
		
//		disposableLevel.jsp start------------------------------------------------------		
		
		
		$("#contheader-disple-lblMapping").html("निस्तारण  स्तर मैपिंग<small></small>");
		$("#contheader-desplMapping1").html("निस्तारण  स्तर मैपिंग  जोड़ें");
		$("#desplmapping").html("निस्तारण  स्तर मैपिंग");
		$("#dlevelid").html("निस्तारण  स्तर आईडी");
		$("#dlevelName").html("निस्तारण  स्तर");
		$("#dispmapid").html("मैपिंग विवरण");
		$("#disposal_Category").html("श्रेणी");
		
		}
	
	
}


/*function HindiEnglish(option) {
   
    $("#hdnLanguage").val(option);
   // LoadDropdownList();

    if ($("#hdnLanguage").val() == 'E') {
        $("#Tehsil").empty();
        $("#Tehsil").append($("<option selected>       </option>").val('0').html('Select Tehsil'));

        $("#VillagePanchayat").empty();
        $("#VillagePanchayat").append($("<option selected>       </option>").val('0').html('Select Village Panchayat'));
        $("#Block").empty();
        $("#Block").append($("<option selected>       </option>").val('0').html('Select Block'));

        $("#Village").empty();
        $("#Village").append($("<option selected>       </option>").val('0').html('Select Village'));
        $("#Thana").empty();
        $("#Thana").append($("<option selected>       </option>").val('0').html('Select Thana'));

        $("#TownArea").empty();
        $("#TownArea").append($("<option selected>       </option>").val('0').html('Select town'));
    }
    else {
        $("#Tehsil").empty();
        $("#Tehsil").append($("<option selected>       </option>").val('0').html('तहसील चुनें'));

        $("#VillagePanchayat").empty();
        $("#VillagePanchayat").append($("<option selected>       </option>").val('0').html('ग्रामसभा चुनें'));
        $("#Block").empty();
        $("#Block").append($("<option selected>       </option>").val('0').html('विकासखण्ड चुनें'));

        $("#Village").empty();
        $("#Village").append($("<option selected>       </option>").val('0').html('ग्राम चुनें'));
        $("#Thana").empty();
        $("#Thana").append($("<option selected>       </option>").val('0').html('थाना चुनें'));

        $("#TownArea").empty();
        $("#TownArea").append($("<option selected>       </option>").val('0').html('शहर चुनें'));
    }
    if ($("#hdnLanguage").val() == 'E') {
        $("#TehsilP").empty();
        $("#TehsilP").append($("<option selected>       </option>").val('0').html('Select Tehsil'));

        $("#VillagePanchayatP").empty();
        $("#VillagePanchayatP").append($("<option selected>       </option>").val('0').html('Select Village Panchayat'));
        $("#BlockP").empty();
        $("#BlockP").append($("<option selected>       </option>").val('0').html('Select Block'));

        $("#VillageP").empty();
        $("#VillageP").append($("<option selected>       </option>").val('0').html('Select Village'));
        $("#ThanaP").empty();
        $("#ThanaP").append($("<option selected>       </option>").val('0').html('Select Thana'));
        $("#TownAreaP").empty();
        $("#TownAreaP").append($("<option selected>       </option>").val('0').html('Select Town'));
    }
    else {
        $("#TehsilP").empty();
        $("#TehsilP").append($("<option selected>       </option>").val('0').html('तहसील चुनें'));

        $("#VillagePanchayatP").empty();
        $("#VillagePanchayatP").append($("<option selected>       </option>").val('0').html('ग्रामसभा चुनें'));
        $("#BlockP").empty();
        $("#BlockP").append($("<option selected>       </option>").val('0').html('विकास खण्ड चुनें'));

        $("#VillageP").empty();
        $("#VillageP").append($("<option selected>       </option>").val('0').html('ग्राम चुनें'));
        $("#ThanaP").empty();
        $("#ThanaP").append($("<option selected>       </option>").val('0').html('थाना चुनें'));
        $("#TownAreaP").empty();
        $("#TownAreaP").append($("<option selected>       </option>").val('0').html('शहर चुनें'));
    }

    if (option == "E") {
        $("#deletefile").text("Delete");
        $("#viewdoc").val("View Attachment");
        $("#otherup1").html("If you are not a resident of Uttar Pradesh, then Please check" );
        $("#otherup2").html(" this box and fill the complete address below.")
        $("#aHindi").html("हिंदी");
        $("#aEnglish").html("English");
        $("#spanHindiU").html("Download Hindi Utility");
        $("#lblGroupGrievance").html("Group Grievance");
        $("#lblSelectLang").html("Select Language");
        $("#lblRefType").html("Referece Type");
        $("#lblTypeofRef").html("Type of Reference");
        $("#lblName").html("Name");
        $("#lblFatherName").html("Father/Husband Name");
        $("#lblGender").html("Gender");
        $("#lblMobile1").html("Mobile No1");
        $("#lblMobile2").html("Mobile No2");
        $("#lblEmail").html("Email");
        $("#lblAadhar").html("Aadhar Card No.");
        $("#lblArea").html("Area");
        $("#lblState").html("State");
        $("#lblDistrict").html("District");
        $("#lblddlMandal").html("Mandal");
        $("#lblddlZone").html("Zone");

        $("#lblAddreshDistict").html("District");
        $("#lblTehsil").html("Tehsil");
        $("#lblBlock").html("Block");
        $("#lblTownArea").html("Town Area");
        $("#lblWard").html("Ward");
        $("#lblVillagePanchayat").html("Village Panchayat");
        $("#lblVillage").html("Village");
        $("#lblThana").html("Thana");
        $("#lblddlThana").html("Thana");
        $("#lblAddresstext").html("Address(House no. etc)");
       
        $("#lblAreaP").html("Area");
        $("#lblStateP").html("State");
        $("#lblDistrictP").html("District");
        $("#lblTehsilP").html("Tehsil");
        $("#lblddlTehsil").html("Tehsil");

        $("#lblBlockP").html("Block");
        $("#lblddlBlock").html("Block");

        $("#lblVillagePanchayatP").html("Village Panchayat");
        $("#lblVillageP").html("Village");
        $("#lblTownAreaP").html("Town Area");
        $("#lblWardP").html("Ward");
        $("#lblThanaP").html("Thana");
        $("#lblApplicationDetail").html("Application Detail");
        $("#lblIsOldReference").html("Old reference no.(if any) ");
        $("#lblOldRef1").html("Referece No 1");
        $("#lblOldRef2").html("Referece No 2");
        $("#lblDepartment").html("Department");
        $("#lblGrievanceCategory").html("Grievance Category");
        $("#lblGrievanceSubCategory").html("Other Grievance Category");
        $("#lblAddressToOfficer").html("Address To Officer");
        $("#lblUploadRef").html("click for Upload reference Documents");

        //head
        $("#head1").html("Register Your Grievance");
        $("#head2").html("Applicant Detail");
        $("#head3").html("Grievance Area Detail");
        $("#head4").html("Application Detail");

        //complaint Type
        $("#lblRefTypeComp").html("Complaint");
        $("#lblRefTypeDemand").html("Demand");
        $("#lblRefTypeSuggestion").html("Suggestion");
        $("#lblRefTypeOther").html("Others");
        $("#spanSame").html("Same as Above");

        $("#Gender").html("<option value='0'>--Select One--</option><option value='1'>Male</option><option value='2'>Female</option><option value='3'>Transgender</option>");
        
        $("#btnSave").val("Save");
        $("#btnupdate").val("Update");

        $("#btnCancel").html("Exit");
        $(".urban").html("Urban");
        $(".rural").html("Rural");
        $("#spanIsGravieance").html("Please type name of applicant seperated by (,)");
        $("#notes1").html('Note - ');
        $("#notes2").html('Fields are Mandatory.');
        $('#nikas').html("After entering into the system through OTP, You can enter only one complaint. To enter another complaint, you will have to obtain another OTP. ");
        $("#lblUploadPDF").html("Please Upload PDF/JPG/JPEG/PNG file only.")
        $("#lblpdfSize").html("(Only 500KB File Size is allowed.)");
        $("#spannewnote").html("Note: Kindly be careful while selecting District and Department.");

        $("#Comfill").html("Note: Kindly ignore special charecter(<>`='~%\"*^$&#()~) during fill the details and write complete details of your complaint, otherwise it will be difficult to take proper action.");
        $("#nideshlyalbl").html("Post");


       
    }
    else {
        $("#deletefile").text("डिलीट");
        $("#viewdoc").val("संलग्नक देखे");
        $("#otherup1").html("यदी  आप उत्तर  प्रदेश क निवासी  नहीं है तो कृपया इस बॉक्स पर");
        $("#otherup2").html("चेक करे और सम्पूर्ण पता दर्ज करे। ")
        $("#aHindi").html("हिंदी");
        $("#aEnglish").html("English");

        $("#spanHindiU").html("डाउनलोड हिंदी यूटिलिटी");
        $("#lblGroupGrievance").html("सामूहिक शिकायत");
        $("#lblSelectLang").html("भाषा चुनें");
        $("#lblRefType").html("सन्दर्भ का प्रकार");
        $("#lblTypeofRef").html("सन्दर्भ की श्रेणी");
        $("#lblName").html("नाम");
        $("#lblFatherName").html("पिता/पति का नाम");
        $("#lblGender").html("लिंग");
        $("#lblMobile1").html("मोबाइल नंबर 1");
        $("#lblMobile2").html("मोबाइल नंबर 2");
        $("#lblEmail").html("ईमेल");
        $("#lblAadhar").html("आधार संख्या");
        $("#lblArea").html("क्षेत्र");
        $("#lblState").html("प्रदेश");
        $("#lblDistrict").html("जनपद");
        $("#lblAddreshDistict").html("जनपद");
        $("#lblTehsil").html("तहसील");
        $("#lblddlTehsil").html("तहसील");
        $("#lblBlock").html("ब्लाक");
        $("#lblddlBlock").html("ब्लाक");
        $("#lblTownArea").html("नगर");
        $("#lblWard").html("वार्ड/मोहल्ला");
        $("#lblVillagePanchayat").html("ग्राम पंचायत");
        $("#lblVillage").html("ग्राम");
        $("#lblThana").html("थाना");
        $("#lblddlThana").html("थाना");
        $("#lblAddresstext").html("पता");
       // $("#lblAddress").html("Address(House no. etc)");
        $("#lblAreaP").html("क्षेत्र");
        $("#lblStateP").html("प्रदेश");
        $("#lblDistrictP").html("जनपद");
        $("#lblTehsilP").html("तहसील");
        $("#lblBlockP").html("ब्लाक");
        $("#lblVillagePanchayatP").html("ग्राम पंचायत");
        $("#lblVillageP").html("ग्राम");
        $("#lblTownAreaP").html("नगर");
        $("#lblWardP").html("वार्ड/मोहल्ला");
        $("#lblThanaP").html("थाना");
        $("#lblApplicationDetail").html("आवेदन पत्र का विस्तृत विवरण");
        $("#lblIsOldReference").html("पूर्व सन्दर्भ संख्या(यदि है तो) ");
        $("#lblOldRef1").html("सन्दर्भ संख्या 1");
        $("#lblOldRef2").html("सन्दर्भ संख्या 2");
        $("#lblDepartment").html("विभाग");
        $("#lblGrievanceCategory").html("सन्दर्भ श्रेणी");
        $("#lblGrievanceSubCategory").html("अन्य सन्दर्भ श्रेणी");
        $("#lblAddressToOfficer").html("किस अधिकारी को प्रेषित करें");
        $("#lblUploadRef").html("आवेदन एवम् सम्बंधित दस्तावेज अपलोड करने हेतु क्लिक करें");
        $("#spanSame").html("उपरोक्तानुसार");


        $("#head1").html("आवेदन करे");
        $("#head2").html("आवेदनकर्ता का विवरण");
        $("#head3").html("शिकायत/सुझाव क्षेत्र की जानकारी");
        $("#head4").html("आवेदन का विवरण");

        $("#lblRefTypeComp").html("शिकायत");
        $("#lblRefTypeDemand").html("मांग");
        $("#lblRefTypeSuggestion").html("सलाह");
        $("#lblRefTypeOther").html("अन्य");
        $("#lblddlMandal").html("मंडल");
        $("#lblddlZone").html("जोन");

        $("#Gender").html("<option value='0'>--कोई एक चयन करे--</option><option value='1'>पुरुष</option><option value='2'>महिला</option><option value='3'>ट्रांसजेंडर</option>");
        $("#btnSave").val("सन्दर्भ सुरक्षित करे");
        $("#btnupdate").val("सन्दर्भ संशोधन करे");
        $("#btnCancel").html("निकास ");
        $(".urban").html("नगरीय");
        $(".rural").html("ग्रामीण");
        $("#spanIsGravieance").html("कृपया आवेदकों के नाम ( , ) से पृथक करके भरे!");
        $("#notes1").html("नोट - ");
        $("#notes2").html("फील्ड में सूचना अवश्य भरे। ");
        $('#nikas').html("एक OTP के माध्यम से प्रणाली में मात्र एक ही शिकायत ऑनलाइन दर्ज की जायेगी| दूसरी शिकायत दर्ज करने हेतु आपको OTP पुनः प्राप्त करनी होगी| ");
        $("#lblUploadPDF").html("कृपया PDF/JPG/JPEG/PNG अपलोड करे!");
        $("#lblpdfSize").html("(केवल 500KB तक ही मान्य है)!");
        $("#spannewnote").html("नोट : कृपया जनपद एवं विभाग का चयन करते समय विशेष सावधानी बरतें|");
        $("#Comfill").html("नोट :कृपया विवरण अंकित करते समय स्पेशल कैरेक्टर (<>`='~%\"*^$&#()~) का प्रयोग न करें एवं अपूर्ण विवरण अंकित न करें, अन्यथा आपकी शिकायत पर कार्यवाही करने में असुविधा होगी|")
        //$("#nideshlyalbl").html("निदेशालय");
        $("#nideshlyalbl").html("पद");
    }
}*/

/*
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/**";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}*/