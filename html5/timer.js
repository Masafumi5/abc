var myCnt = 0;
var myTim = 0;

function myGo(){
  mySelect = document.myForm.myMenu.selectedIndex;
  myCnt = eval ( document.myForm.myMenu.options[mySelect].value );
  myTim = setInterval ( "myTimer()", 1000 );
};

function myTimer(){
 document.wright("here");
  myCnt = myCnt - 1;
  document.getElementById( "countdown" ).innerHTML = "あと " + myCnt + " 秒 です。";
  if ( myCnt == 0 ){
    clearInterval( myTim );
    alert( "時間です！" );
  };
};

//function window.opener.pauseVideo(){
//	v.pause();

//};

onload = function(){
 var goButton;
    goButton = document.getElementById("goButton");
    goButton.onclick = function(){
	return myGo();
    };
   
};


onload = function(){
 var closeButton;
    closeButton = document.getElementById("closeButton");
    closeButton.onclick = function(){
	 return window.close() ;
    };
   
};
