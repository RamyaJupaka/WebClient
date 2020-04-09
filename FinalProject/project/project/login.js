var login_username="admin";
var login_password="123";
 var v1, v2;

function authenticate_login()
{
   //v1 = document.getElementById("user").value;
  v1 = document.getElementById("user").value;
  v2 = document.getElementById("pwd").value;
	if ((v1 == login_username) &&
	   (v2 ==  login_password))
	{
	  alert('Welcome to our website');
	 setCookie("username",v1,1);
	  parent.frames.Menu_Frame.location.href  ="menu.html";
	  $(document).ready(function(){
		  &(".log").hide();
	  });
	  
	}
	else
	{
	  alert('Invalid User or Password Login');
	  document.getElementById("pwd").value="";
	  document.getElementById("pwd").focus();
	  parent.frames.Menu_Frame.location.href ="menu2.html";
	}
}
function setCookie(cname,cvalue,exdays){
			var d = new Date();
			d.setTime(d.getTime()+(exdays*24*60*60*1000));
			var expires = "expires="+d.toGMTString();
			document.cookie = cname+"="+cvalue+"; "+expires;
		}
		function getCookie(cname){
			var name = cname + "=";
			var ca = document.cookie.split(';');
			for(var i=0; i<ca.length; i++) {
				var c = ca[i].trim();
				if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
			}
			return "";
		}

function authenticate_logout()
{
   setCookie("username",v1,-1);
  alert('Thank you!'+getCookie("username"));
  document.getElementById("user").value="";
  document.getElementById("pwd").value="";
  document.getElementById("user").focus();
  parent.frames.Menu_Frame.location.href ="menu2.html";
  parent.frames.Content_Frame.location.href ="content.html";
}
