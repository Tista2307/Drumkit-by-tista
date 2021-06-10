var l=document.querySelectorAll(".set button");
var i;
//var sound=["sounds/crash.mp3","sounds/kick-bass.mp3","sounds/snare.mp3","sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3"]
for(i=0;i<l.length;i++){
    l[i].addEventListener("click", function() {
        
        var choice=this.innerHTML;
        makesound(choice);
        banimate(choice);
    });
}
document.addEventListener("keypress",function(e){
    var ob = e.key;
    makesound(ob);
    banimate(ob);
});

function makesound(choice){
    switch(choice) {
        case "w":
         var au=new Audio("sounds/crash.mp3");
         au.play();
          break;
        case "a":
            var au=new Audio("sounds/kick-bass.mp3");
            au.play();
             break;
        case "s":
                var au=new Audio("sounds/snare.mp3");
                au.play();
                 break;
        case "d":
                 var au=new Audio("sounds/tom-1.mp3");
                 au.play();
                 break;
        case "j":
                  var au=new Audio("sounds/tom-2.mp3");
                  au.play();
                  break;
         case "k":
                var au=new Audio("sounds/tom-3.mp3");
                au.play();
                break;

        case "l":
                    var au=new Audio("sounds/tom-4.mp3");
                    au.play();
                    break;


        default:
          break;
      }
}
function banimate(er){
    var e=document.querySelector("."+er);
  e.classList.add("pressed");
 setTimeout(function(){
    e.classList.remove("pressed");
},100);
}