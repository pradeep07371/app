




<!DOCTYPE html >
<html>
<head>
<meta charset=UTF-8>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>IGRS | Log in</title>
<!-- Tell the browser to be responsive to screen width -->

<!-- Bootstrap 3.3.7 -->
<link rel="stylesheet" href="resources/assets/css/bootstrap341.min.css" integrity="sha512-Dop/vW3iOtayerlYAqCgkVr2aTr2ErwwTYOvRFUpzl2VhCMJyjQF0Q9TjUXIo6JhuM/3i0vVEt2e/7QQmnHQqw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<!-- Font Awesome -->
<link rel="stylesheet"
	href="resources/bower_components/font-awesome/css/font-awesome.min.css">
<!-- Ionicons -->
<link rel="stylesheet"
	href="resources/bower_components/Ionicons/css/ionicons.min.css">
<!-- Theme style -->
<link rel="stylesheet" href="resources/dist/css/AdminLTE.min.css">
<!-- iCheck -->
<link rel="stylesheet" href="resources/plugins/iCheck/square/blue.css">


<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
<!--<script src="/resources/bower_components/jquery/dist/jquery.min.js"></script>-->
<script src="resources/assets/js/jquery-3.6.0.min.js"></script>

<script src="resources/js/crypto/aes.js"></script>
<script src="resources/js/crypto/pbkdf2.js"></script>
<script src="resources/js/crypto/AesUtil.js"></script>

<script type="text/javascript">
	function refeshCaptcha() {
		$("#captchaImg").attr("src", "/Captcha.jpg");
	}
</script>
<!-- Google Font -->
<!-- <link rel="stylesheet"
	href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
 -->
<script type="text/javascript">
	function showLoginDialog() {
		$('#modal-default').modal('show');	
	};
</script>


<script src="resources/custom/login.js"></script> 
</head>
<body class="hold-transition login-page" style="
    background-image: url(/resources/assets/img/download.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
">
	
	<!-- /.login-box -->
	

 <!-- <marquee  onmouseover="this.stop();" onmouseout="this.start();" style="color: white;"><h3> सर्वर मेंटिनेंस के कारण पोर्टल दिनांक -	<b style="color: #fd4940;">  12-11-2022  को  प्रातः   9:00  से  15:30  </b> तक  बंद रहेगा । असुविधा के लिए खेद है । </h3></marquee>  
 -->	<div class="login-box" style="margin-bottom: 5px;>

		     <div class="modal-content" style="margin-top: 7rem;background-color: transparent;">
		  
		 
				<div class="modal-header" style="    border-bottom: solid 3px #0a0a0a;  background-color: #0b87b5;">
				
				<!-- border-bottom-color: #060606;
				background-color: #3c8dbc;
				background-image: url(resources/assets/img/15.jpg);
				background-size: cover;
				background-position: center center;
				height: 9rem; -->
				
				
				<h3 class="modal-title" align="center" style="    padding-top: 14px;    color: black;"><b>
				अधिकारी लॉगिन</b></h3>
				</div>
				<div class="modal-body" style="background-color: #03263af0;border-bottom: solid 3px #0a0a0a;background-color: #0000003b;">
					
					
					<!-- /.login-logo -->
						<div class="login-box-body" style="   background-color: #0000003b; background: #12334600;background-color:  transparent;color:  transparent;">
							<p class="login-box-msg"style="color: white;-webkit-margin-after: 2px;">अपना सत्र शुरू करने के लिए साइन इन करें</p>
							 <!-- <marquee  onmouseover="this.stop();" onmouseout="this.start();" style="color: white;">गूगल क्रोम ब्राउज़र का प्रयोग करने के लिए कृपया लाल रंग से लिखे हुए शब्दों को	<b style="color: #fd4940;"> chrome://settings/resetProfileSettings?origin=userclick</b> कॉपी कर गूगल क्रोम ब्राउज़र के दूसरे टैब में पेस्ट कर के सेटिंग को रिसेट कर लें। </marquee>
							
							  <marquee  onmouseover="this.stop();" onmouseout="this.start();" style="color: white;"> सर्वर मेंटिनेंस के कारण पोर्टल दिनांक -	<b style="color: #fd4940;">  19-12-2020  को  शाम  12:00 से शाम 3:00  </b> तक  बंद रहेगा । असुविधा के लिए खेद है । </marquee>
							 -->  								
							<form method="POST"
								action="/login"
								id="loginForm" autocomplete="off">
								<div class="form-group has-feedback">
									<input type="text" name="username" class="form-control"
										placeholder="User Id" autocomplete="off" tabindex="1"/> <span
										class="glyphicon glyphicon-envelope form-control-feedback"></span>
								</div>
								<div class="form-group has-feedback">
									<!-- <a id = "tooltip-1" title = "Caps Lock On" href = "#"></a> -->
									<input type="password" autocomplete="off" class="form-control" id="password"
										placeholder="Password" name="password" onclick="checkCapsLock(event)"
										onkeypress="checkCapsLock(event)" tabindex="2"/> <span
										class="glyphicon glyphicon-lock form-control-feedback"></span>
										<input type="hidden" name="salt"/>
            							<input type="hidden" name="iv"/>
								</div>
								<iframe src="/Captcha.jpg" border="0" id="captchaImg"
									width="120px" height="45px" frameborder="0" scrolling="no"></iframe>
								<i class="btn-flat fa fa-refresh" onclick="refeshCaptcha()" style="  color: white;"></i>
								<div class="form-group has-feedback">
									<input type="hidden" id="randomToken" name="randomToken"
										value="" /> <input type="text"
										class="form-control" name="captcha" size="20" maxlength="4" tabindex="3"/>

									<span class="glyphicon form-control-feedback"></span>
								</div>


								<div class="row">
									<div class="col-xs-8">
										<div class="checkbox icheck">
											<label class="hover" style="    -webkit-text-fill-color:  white;"> <input type="checkbox"> Remember Me
											</label>
										</div>

									</div>
									<!-- /.col -->
									<div class="col-xs-4">
									<button type="submit" class="btn btn-primary btn-block btn-flat" 
									style="    background-color: #129bd0;    border-color: #367fa9;">
									साइन इन </button>
									</div>
									<!-- /.col -->
								</div>
								<input type="hidden" name="_csrf" value="5d4c381a-d01e-46fb-a6b0-ad82f35c3199"/>
								<input type="hidden" name="login-encp" value="b43b-1dfef40279f"/>
							</form>
							
						
						
                                                        
                                                        
						
						
						<div class="social-auth-links text-center">
								<a href="passwordReset"  class="btn btn-block btn-social btn-facebook btn-flat" style="
   						 background-color: #129bd0;"><i
									class="fa  fa-frown-o"></i> पासवर्ड भूल गए
</a> <!-- <a
									href="registerComplaint"
									class="btn btn-block btn-social btn-google btn-flat"><i
									class="fa fa-registered"></i>Register Complaints</a> -->
							</div>

								
						</div>
					
				</div>
								<!-- <div class="modal-footer">
					<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
				</div> -->
			</div>
			<!-- /.modal-content -->
		</div>
		<!-- /.modal-dialog -->
		
		<a href="/" class="btn btn-raised btn-royal" style=" background-color: #129bd0;  color: rgba(255,255,255,.84);
    margin-left: 48%;    box-shadow: 0 2px 2px 0 rgba(0,0,0,0),0 3px 1px -2px rgba(0,0,0,0),0 1px 5px 0 rgba(0,0,0,0);">
           <i class="fa fa-home" style=" padding-right: 4px;"></i>
           होम</a>
		
	
	<!-- jQuery 3 -->
<!--	<script src="resources/bower_components/jquery/dist/jquery.min.js"></script>-->
	<!-- Bootstrap 3.3.7 -->
<!--	<script
		src="resources/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
	-->
        <script src="resources/assets/js/bootstrap341.min.js" integrity="sha512-oBTprMeNEKCnqfuqKd6sbvFzmFQtlXS3e0C/RGFV0hD6QzhHV+ODfaQbAlmY6/q0ubbwlAM/nCJjkrgA3waLzg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
         <!-- iCheck -->
	<script src="resources/plugins/iCheck/icheck.min.js"></script>
	

	
	<script>
		$(function() {
			$('input').iCheck({
				checkboxClass : 'icheckbox_square-blue',
				radioClass : 'iradio_square-blue',
				increaseArea : '20%' // optional
			});
		});
		
		
		function checkCapsLock(e) {
			if (e.getModifierState("CapsLock")) {
				/* $('#password').tooltip({'trigger':'focus', 'title': 'Password tooltip'}); */
			}else{
				/* $('#tooltip-1').tooltip("close"); */
			}
		}
	</script>
	<style>
.example-modal .modal {
	position: relative;
	top: auto;
	bottom: auto;
	right: auto;
	left: auto;
	display: block;
	z-index: 1;
}

.example-modal .modal {
	background: transparent !important;
}
</style>
<div class="modal fade" id="modal-info">
		<div class="modal-dialog" style="width: 95%;">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">
						<span aria-hidden="true">&times;</span>
					</button>
					
					<!-- data-dismiss="modal"   aria-label="Close"-->
					<h4 class="modal-title" id="modeltitle"> <b>नया  पासवर्ड   अपने पंजीकृत  मोबाइल अथवा ईमेल द्वारा प्राप्त  करें !</b> </h4>
				</div>
				<div class="modal-body">

					<div id="filebody"></div>

				</div>
			</div>
			<!-- /.modal-content -->
		</div>
		<!-- /.modal-dialog -->
	</div>
</body>
</html>