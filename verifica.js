function foto(){
	var xmlHttp;
		try{
			xmlHttp=new XMLHttpRequest(); // Firefox, Opera 8.0+, Safari
		}
		catch (e){
			try{
				xmlHttp=new ActiveXObject("Msxml2.XMLHTTP"); // Internet Explorer
			}
			catch (e){
				try{
					xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
				}
				catch (e){
					alert("Tu explorador no soporta AJAX.");
					return false;
				}
			}
		}

	


	xmlHttp.onreadystatechange=function(){
			if(xmlHttp.readyState== 4 && xmlHttp.readyState != null){
				alert(xmlHttp.responseText);
			}
		}
		xmlHttp.open("GET","http://192.168.1.86/ejemplo/return.php",true);
		xmlHttp.send(null);
}