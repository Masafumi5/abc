//function window.opener.pauseVideo(){
//	v.pause();

//};



onload = function(){

//var oya = window.opener.document.getElementById("url"); 

 var goButton;
    goButton = document.getElementById("goButton");
    goButton.onclick = function(){
	return window.close();
  };
 var closeButton;
    closeButton = document.getElementById("closeButton");
    closeButton.onclick = function(){
	return window.close() ;
    };
   
};

//document.write(oya);
