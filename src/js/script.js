const entities = [
   {
      city: 'Rostov-on-Don \n LCD admiral',
      apartament: '81 m2',
      repairTime: '3.5 months',
      repairCost: 'Upon request',
      img: 'img/1.png'
   },
   {
      city: 'Sochi \n Thieves',
      apartament: '105 m2',
      repairTime: '4 months',
      repairCost: 'Upon request',
      img: 'img/2.png'
   },
   {
      city: 'Rostov-on-Don \n Patriotic',
      apartament: '93 m2',
      repairTime: '3 months',
      repairCost: 'Upon request',
      img: 'img/3.png'
   }
];
 
const city = document.getElementById('city');
const apartament = document.getElementById('apartament');
const repairTime = document.getElementById('repairTime');
const repairCost = document.getElementById('repairCost');
const img = document.getElementById('images');
 
const prev = document.getElementById('arrow-prev');
const next = document.getElementById('arrow-next');

const sliderDot = document.querySelectorAll('.slider__dot');
const paragraphTitle = document.querySelectorAll('a.slider__paragraph-title');

const setEntity = (index) => {
   city.innerText = entities[index].city
   apartament.innerText = entities[index].apartament
   repairTime.innerText = entities[index].repairTime
   repairCost.innerText = entities[index].repairCost
   img.src = entities[index].img
}

let currentIndex = 0;
 
setEntity(currentIndex);

prev.addEventListener('click', () => {
   if(currentIndex == 0) {
      currentIndex = (entities.length - 1);
   } else {
      currentIndex --;
   }

   setEntity(currentIndex);
   thisSlider(currentIndex);
});
next.addEventListener('click', () => {
   if(currentIndex == (entities.length - 1)) {
      currentIndex = 0;
   } else {
      currentIndex ++;
   }

   setEntity(currentIndex);
   thisSlider(currentIndex);
});

function thisSlider(index) {
   sliderDot.forEach(item => item.classList.remove('active-rect'));
   sliderDot[index].classList.add('active-rect');

   paragraphTitle.forEach(item => item.classList.remove('active'));
   paragraphTitle[index].classList.add('active');
}

sliderDot.forEach((dot, index) => {
   dot.addEventListener('click', () => {
      currentIndex = index;

      setEntity(currentIndex);
      thisSlider(currentIndex);
   });
});

paragraphTitle.forEach((dot, index) => {
   dot.addEventListener('click', () => {
      currentIndex = index;

      setEntity(currentIndex);
      thisSlider(currentIndex);
   });
});