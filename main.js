const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");


// 1 call backs

// const animationObject1 = alice1.animate(aliceTumbling, aliceTiming);
// animationObject1.finished
// .then(() => {
//   const animationObject2 = alice2.animate(aliceTumbling, aliceTiming);

//   animationObject2.finished
//   .then(() => {
//     const animationObject3 = alice3.animate(aliceTumbling, aliceTiming);
    
//     animationObject3.finished
//     .then(() => {
//       console.log('finished.');
//       return 0;
//     })
//     .catch(err => console.log(err));
//   })
//   .catch(err => console.log(err));
// })
// .catch(err => console.log(err)); 

// 2 promise chaining

// const animationObject1 = alice1.animate(aliceTumbling, aliceTiming);

// animationObject1.finished
// .then(() => {
//   return alice2.animate(aliceTumbling, aliceTiming).finished;
// })
// .then(secondAnimationFinished => {
//   return alice3.animate(aliceTumbling, aliceTiming).finished;
// })
// .then(thirdAnimationFinished => {
//   console.log('finished');
//   return 0;
// })
// .catch(err => console.log(err));

// 3 async await

// const animate = async () => {
//   try {
//     const animationObject1 = alice1.animate(aliceTumbling, aliceTiming);

//     const firstAnimationFinished = await animationObject1.finished;

//     const animationObject2 = alice2.animate(aliceTumbling, aliceTiming);

//     const secondAnimationFinished = await animationObject2.finished;

//     const animationObject3 = alice3.animate(aliceTumbling, aliceTiming);

//     const thirdAnimationFinished = await animationObject3.finished;

//     console.log('finished');
//     return 0;
//   } catch(err) {
//     console.log(err);
//   }
// };

// animate();
