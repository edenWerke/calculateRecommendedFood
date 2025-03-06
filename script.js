 'use strict';


const dogs=[
  {weight:22, currFood:250, owners:['Alice','Bob']},
  {weight:8, currFood:200, owners:['Matilda']},
  {weight:13, currFood:275, owners:['Sarah','John']},
  {weight:32, currFood:340, owners:['Michael','Bob']},
]
//using for each is recommended food
// dogs.forEach(dog=>(
//   dog.recFood=Math.trunc(dog.weight**0.75*28)
// ))
// console.log(dogs)


const calculateRecommendedFood = dogs.map(dog => (
  dog.calculateRecommendedFood=Math.round(dog.weight ** 0.75 * 28)
));
console.log(dogs)

const SarahDog=dogs.find(dog=>dog.owners.includes('Sarah'))
console.log(`${SarahDog.currFood> SarahDog.calculateRecommendedFood ? 'eating too much':'eating too little'}`)
