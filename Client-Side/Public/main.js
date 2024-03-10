
// quiz page
const count = document.querySelector("#count");
const buttons = document.querySelectorAll(".answers-box");
//console.log(buttons);

/*
function edittest(){
   const words = count.innerHTML.split("")
   const val = parseInt( words[11]) ;

   for(let i = 0; i < 8;i++){
        count.textContent = `City quiz - ${i}/8`
   }

}

setTimeout(edittest, 1000)*/
let i = 0;
buttons.forEach(button => {
    button.addEventListener("click", function(e){ 
         console.log(e.target);
         if (i < 8){
         i++
         count.textContent = `City quiz - ${i}/8`
    
        setTimeout(edittext, 1000)
    
        }
    })
});