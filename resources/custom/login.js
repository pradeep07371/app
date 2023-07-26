/**
 * 
 */
$(document).ready(function(){
	$('[name="password"]').blur(function(){
		if($('[name="password"]').val != ""){
			var iv = CryptoJS.lib.WordArray.random(128/8).toString(CryptoJS.enc.Hex);
	        var salt = CryptoJS.lib.WordArray.random(128/8).toString(CryptoJS.enc.Hex);
	        var aesUtil = new AesUtil(128, 1000);
	        var ciphertext = aesUtil.encrypt(salt, iv, $('[name="login-encp"]').val(), $('[name="password"]').val());
	        var aesPassword = (iv + "::" + salt + "::" + ciphertext);
	        var password = btoa(aesPassword);
	        $('[name="password"]').val(password);
		}
    });
});
