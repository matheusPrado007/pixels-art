/*function c1Color () {
   const section1 = document.querySelector('.selected')
   section1.style.backgroundColor = 'black';
} */

//


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
   }

  

  
    
 

  
   
 
  
  


 

  
   
   








 
  
  
   
   
   
 

 

 