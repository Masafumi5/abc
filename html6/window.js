//function win_open(){
//console.log("here");
//subwin = window.open('../../html/index.html', 'ramen', 'width=600,height=200');

//};



window.onload = function(){

chrome.tabs.getSelected(window.id, function (tab) {
    //tab.urlに開いているタブのURLが入っている
    var url = document.createTextNode(tab.url);
    document.getElementById('url').appendChild(url); 
  });



var addButton;
    addButton = document.getElementById("addButton");
    addButton.onclick = function(){
	 return window.open('../ramen.html', 'ramen', 'width=400,height=200');;
    };
   
};
