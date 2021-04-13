//Using Immediately Involked Funtion expression

(function(){
    const pictures = [
        "contBcg-0",
        "contBcg-1",
        "contBcg-2",
        "contBcg-3",
        "contBcg-4"
    ];

    //selecting our left and right buttons.
    const buttons = document.querySelectorAll(".btn");
    const imadeDiv =  document.querySelector(".img-container");

    let counter = 0;
    
    //forEach method calls a function
    buttons.forEach( (button) => {
        button.addEventListener('click', function(){
if (button.classList.contains('btn-left')){
counter--
if(counter < 0){
counter = pictures.length - 1
}
imadeDiv.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
 }
if (button.classList.contains('btn-right')){
 counter++
if(counter > pictures.length - 1 ){
   counter = 0
}
imadeDiv.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
          }
        
         })
        })
    }) ();




