/*function deleteDataH()
{
            
           if (!document.getElementById('Checkbox').checked) {
               alert('Checkbox not checked');
               //return false;
           }
           else {
               //createCookie('IGRSCookies','46537',7);
               setCookie("Checking", "123", 1);
               window.open("PublicPageH.aspx");

           }
       }
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    //d.setTime(d.getTime() + (exdays * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";";
}
*/


function deleteDataE() {

    if (!document.getElementById('Checkbox').checked) {
        alert('Checkbox not checked');
        //return false;
    }
    else {
        //createCookie('IGRSCookies','46537',7);
        setCookie("Checking", "123", 1);
        window.open("onlineComplaint");

    }
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    //d.setTime(d.getTime() + (exdays * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";";
}


function antiBhooMafia() {
	setCookieAntiBhooMafia("Checking", "123", 1);
    window.open("AbmpOnlineComplaint");
}

function setCookieAntiBhooMafia(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    //d.setTime(d.getTime() + (exdays * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";";
}




