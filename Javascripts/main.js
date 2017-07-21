
function sync(){
    var slide = document.getElementById("myRange").value;
    document.getElementById("myNum").value = slide;
}


function syncN(){
    var num = document.getElementById("myNum").value;
    document.getElementById("myRange").value = num;
}

document.addEventListener("keyup", function(event){
  if (event.which === 13){
    syncN();
  }
});

