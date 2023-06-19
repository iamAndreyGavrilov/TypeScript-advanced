// Unknown - это тип, который похож на any, но немного более строгий.
// Его сначала нужно проверить, прежде чем использовать.

let input: unknown;

 input = 5;
 input = 'Hello';

 let res:unknown = input

//  let res2: string = input; // Ошибка

function run(i: unknown) {
    if (typeof i === 'number') {
        let a: number = i;
    } else {
        // let b: string = i; // Ошибка
    }
}

async function getData(){
     try {
          await fetch('');
     } catch (error) {
         if (error instanceof Error) {
         console.log(error.message);
         }
     }
}