function openNav() {
	document.getElementById("mySidebar").style.width = "200px";	
	document.getElementById("sidebarTab").style.left = "195px";	
}

function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("sidebarTab").style.left = "-5px";	
}

function openAbout() {
	document.getElementById("aboutContainer").style.height = "380px";
	document.getElementById("aboutContainer").style.opacity = "1";
	document.getElementById("aboutDesc").style.height = "auto";
	
	document.getElementById("wsshContainer").style.height = "50px";	
	document.getElementById("wsshContainer").style.opacity = ".5";
	document.getElementById("wsshDesc").style.height = "0";
	
	document.getElementById("jhwContainer").style.height = "50px";
	document.getElementById("jhwContainer").style.opacity = ".5";
	document.getElementById("jhwDesc").style.height = "0";
	
}


function openWSSH() {
	document.getElementById("wsshContainer").style.height = "380px";
	document.getElementById("wsshContainer").style.opacity = "1";
	document.getElementById("wsshDesc").style.height = "auto";
	
	document.getElementById("aboutContainer").style.height = "50px";
	document.getElementById("aboutContainer").style.opacity = ".5";
	document.getElementById("aboutDesc").style.height = "0";
	
	document.getElementById("jhwContainer").style.height = "50px";	
	document.getElementById("jhwContainer").style.opacity = ".5";
	document.getElementById("jhwDesc").style.height = "0";
}

function openJHW() {
	document.getElementById("jhwContainer").style.height = "380px";
	document.getElementById("jhwContainer").style.opacity = "1";
	document.getElementById("jhwDesc").style.height = "auto";
	
	document.getElementById("aboutContainer").style.height = "50px";
	document.getElementById("aboutContainer").style.opacity = ".5";
	document.getElementById("aboutDesc").style.height = "0";
	
	document.getElementById("wsshContainer").style.height = "50px";
	document.getElementById("wsshContainer").style.opacity = ".5";
	document.getElementById("wsshDesc").style.height = "0";
}



var x = function () {
	var x = document.forms["myForm"]["email"].value;
	var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
	if (x==null || x =="") {
		alert("Email cannot be blank.");
		return false;
	}
	else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
		alert("Please enter a valid email address.");
        return false;
	}

}

var contact = function () {
	var fName = document.forms["contactForm"]["fName"].value;
	var lName = document.forms["contactForm"]["lName"].value;
	var email = document.forms["contactForm"]["email"].value;
	var atpos = email.indexOf("@");
	var dotpos = email.lastIndexOf(".");
	var caseSub = document.forms["contactForm"]["selectionField"].value;
	var message = document.forms["contactForm"]["message"].value;
	if (fName == null || fName =="") {
		alert("Please enter your first name.");
		return false;
	}
	else if (lName == null || lName =="") {
		alert("Please enter your last name.");
		return false;
	}
	else if (email == null || email =="") {
		alert("Please enter your email.");
		return false;
	}
	else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
		alert("Please enter a valid email address.");
		return false;
	}
	else if (caseSub == null || caseSub =="") {
		alert("Please make a selection for case subject.");
		return false;
	}
	else if (message == null || message =="") {
		alert("Please enter your message.");
		return false;
	}
	else {
		alert("Message was submitted! You will hear from us shortly.");
		return true;
	}

}