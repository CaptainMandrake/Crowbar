var overlay = document.createElement('div');
overlay.setAttribute('style', 'position:absolute; top:0; left:0; z-index:1; background-color:gray; opacity:0.5; width:100%; height:100%');
overlay.id="overlay";
overlay.innerHTML = "turtle";

try{
document.body.appendChild(overlay);
}catch(err){
    alert(err.message);
}

document.req = JSON.parse(document.req); //tainted

//try{

chrome.extension.onConnect.addListener(function(port) {
  alert('connected');
  port.onMessage.addListener(function(msg) {
    alert('message recieved!1');
  });
});
//}catch(err){alert(err.message);}
