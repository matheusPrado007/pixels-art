


window.onload = function(){
  const colorPalette = document.querySelector('#color-palette');
  colorPalette.addEventListener('click', function modifyColorSelected(event) {

  const colorSelect = event.target;

  const selectedRemove = document.querySelector('.selected');

  selectedRemove.classList.remove('selected');

  colorSelect.classList.add('selected');
 console.log(colorPalette);
  }); 
  const pixelColor = document.querySelector('#pixel-board');
   pixelColor.addEventListener('click', function selectedPixel(event2) {
 
   const pixelClick = event2.target;
   const colors = getComputedStyle(document.querySelector('#color-palette .selected '));

   const backColor = colors.backgroundColor;

	pixelClick.style.backgroundColor = backColor;

    
  console.log(pixelColor);
 });
const button = document.querySelector('#clear-board');
button.addEventListener('click', function buttonClick (event3) {
 const click = event3.target;
 const whitePalette = document.querySelectorAll('.pixel')
for (let index = 0; index < whitePalette.length; index++) {
   const element = whitePalette[index];
   if (click){
      element.style.backgroundColor = 'white';
 }
 }
})
} 


 



   

  

  
    
 

  
   
 
  
  


 

  
   
   








 
  
  
   
   
   
 

 

 