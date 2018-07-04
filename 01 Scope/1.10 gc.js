function process(data) {
  
}
//destroy after execution 
{
    let someReallyBigData = { };
    process(someReallyBigData);
}
var btn = document.getElementById("button");
btn.addEventListener("click", function click(evt) {
    console.log("clicked");
    process(evt.data);
}, false);