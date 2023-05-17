// Get the button element
const myButton = document.getElementById("Summarise");

// Add an event listener to the button
myButton.addEventListener("click", function() {
  myButton.disabled= true;
  myButton.innerHTML= "Summarising...";

  chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    var url=tabs[0].url;
    var xhr=new XMLHttpRequest();
    xhr.open("GET","http://127.0.0.1:5000/summary?url="+url,true);
    xhr.onload=function(){
        var text= xhr.responseText;
        const p=document.getElementById("Output");
        p.innerHTML=text;
        myButton.disabled= false;
        myButton.innerHTML="Summarise";
    }
    xhr.send();
  });
});
