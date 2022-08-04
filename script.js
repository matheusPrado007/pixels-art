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
 
  });
  }
  













 
  
  
   
   
   
 

 

 