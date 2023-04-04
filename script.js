const items = document.querySelectorAll('.item');
const mainItems = document.querySelectorAll('.main__item');
const subItems = document.querySelectorAll('.sub__item');


mainItems[0].addEventListener('click', e => {
  if (mainItems[0].classList.contains('open')) {
    for (let i = 0; i < 6; i++) {
      if (!items[i].classList.contains('close')) {
        items[i].classList.add('close')
      }
    }
    mainItems[0].classList.remove('open');
    mainItems[0].firstElementChild.textContent = '+';
    subItems[0].firstElementChild.textContent = '+'
    subItems[1].firstElementChild.textContent = '+'
    
  } else {
    mainItems[0].firstElementChild.textContent = '–';
    mainItems[0].classList.add('open');
  }
  subItems[0].classList.toggle('close');
  subItems[1].classList.toggle('close');
})

mainItems[1].addEventListener('click', e => {
  if (mainItems[1].classList.contains('open')) {
    for (let i = 6; i < 12; i++) {
      if (!items[i].classList.contains('close')) {
        items[i].classList.add('close')
      }
    }
    mainItems[1].classList.remove('open');
    mainItems[1].firstElementChild.textContent = '+';
    subItems[2].firstElementChild.textContent = '+'
    subItems[3].firstElementChild.textContent = '+'
    
  } else {
    mainItems[1].firstElementChild.textContent = '–';
    mainItems[1].classList.add('open');
  }
  subItems[2].classList.toggle('close');
  subItems[3].classList.toggle('close');
})

mainItems[2].addEventListener('click', e => {
  if (mainItems[2].classList.contains('open')) {
    for (let i = 12; i < 18; i++) {
      if (!items[i].classList.contains('close')) {
        items[i].classList.add('close')
      }
    }
    mainItems[2].classList.remove('open');
    mainItems[2].firstElementChild.textContent = '+';
    subItems[4].firstElementChild.textContent = '+'
    subItems[5].firstElementChild.textContent = '+'
    
  } else {
    mainItems[2].firstElementChild.textContent = '–';
    mainItems[2].classList.add('open');
  }
  subItems[4].classList.toggle('close');
  subItems[5].classList.toggle('close');
})

for (let i = 0; i < 6; i++){
  subItems[i].addEventListener('click', e => {
    if (subItems[i].firstElementChild.textContent == '+') {
      subItems[i].firstElementChild.textContent = '–';
    } else {
      subItems[i].firstElementChild.textContent = '+';
    }
    for (let j = i * 3; j < (i + 1) * 3; j++) {
      items[j].classList.toggle('close');
    }
  })
  }

// subItems[0].addEventListener('click', e => {
//   if (subItems[0].firstElementChild.textContent == '+') {
//     subItems[0].firstElementChild.textContent = '–';
//   } else {
//     subItems[0].firstElementChild.textContent = '+';
//   }
//   for (let j = 0; j < 3; j++) {
//     items[j].classList.toggle('close');
//   }
// })
// subItems[1].addEventListener('click', e => {
//   if (subItems[1].firstElementChild.textContent == '+') {
//     subItems[1].firstElementChild.textContent = '–';
//   } else {
//     subItems[1].firstElementChild.textContent = '+';
//   }
//   for (let j = 3; j < 6; j++) {
//     items[j].classList.toggle('close');
//   }
// })

// subItems[2].addEventListener('click', e => {
//   if (subItems[2].firstElementChild.textContent == '+') {
//     subItems[2].firstElementChild.textContent = '–';
//   } else {
//     subItems[2].firstElementChild.textContent = '+';
//   }
//   for (let j = 6; j < 9; j++) {
//     items[j].classList.toggle('close');
//   }
// })

// subItems[3].addEventListener('click', e => {
//   if (subItems[3].firstElementChild.textContent == '+') {
//     subItems[3].firstElementChild.textContent = '–';
//   } else {
//     subItems[3].firstElementChild.textContent = '+';
//   }
//   for (let j = 9; j < 12; j++) {
//     items[j].classList.toggle('close');
//   }
// })

// subItems[4].addEventListener('click', e => {
//   if (subItems[4].firstElementChild.textContent == '+') {
//     subItems[4].firstElementChild.textContent = '–';
//   } else {
//     subItems[4].firstElementChild.textContent = '+';
//   }
//   for (let j = 12; j < 15; j++) {
//     items[j].classList.toggle('close');
//   }
// })

// subItems[5].addEventListener('click', e => {
//   if (subItems[5].firstElementChild.textContent == '+') {
//     subItems[5].firstElementChild.textContent = '–';
//   } else {
//     subItems[5].firstElementChild.textContent = '+';
//   }
//   for (let j = 15; j < 18; j++) {
//     items[j].classList.toggle('close');
//   }
// })
