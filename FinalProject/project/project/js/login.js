
var defautusername='admin';
var defautpassword='123'
//check username and password
function check () {
var username;
var password;


		
	username=document.getElementById("uname").value;
	password=document.getElementById("psw").value;
	username=username.toLowerCase();
	password=password.toLowerCase();
	if(username==defautusername&&password==defautpassword)
	{

			alert("congratulaions")
			parent.frames.Menu_Frame.location.href="./menus.html";
			
			setCookie("admin",username,1);
			
			  $(document).ready(function(){
		        $(".log").hide();
	        }); 
	  
	}
		else{

			alert('error username or password');
			document.getElementById("psw").value="";
			document.getElementById("psw").focus();
			parent.frames.Menu_Frame.location.href="./menu.html"
}
	
}

// clear username and password
function rest () {
	document.getElementById("uname").value='';
	document.getElementById("psw").value='';
	
		setCookie("admin",defautusername,-1);
		
	  $(document).ready(function(){
		        $(".log").show();
	        }); 
}

