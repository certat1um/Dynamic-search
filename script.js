const input = document.querySelector('#elastic-search');

input.addEventListener('input', () => {
   const value = input.value.trim(); // trim spaces between the letters
   const elements = document.querySelectorAll('.list li');

   if(value != '') {
      elements.forEach((item) => { // we search ${value} in every item of the list
         if(item.innerText.search(value) == -1) { // if there are no matching words, then list is empty (class 'hide')
            item.classList.add('hide')
         } else { // else show them
            item.classList.remove('hide')
         }
      });
   } else { // to show all items of the list (because input is empty)
      elements.forEach((item) => {
         item.classList.remove('hide');
      });
   }
   // console.log(value)
});