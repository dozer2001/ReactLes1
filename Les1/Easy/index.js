import employers from "./src/Parts/employers";
import sponsorsCalcCash from "./src/Parts/sponsorsCalcCash";


employers();
sponsorsCalcCash();
let sponsorsCalcCash1 = employers();
let mon = sponsorsCalcCash();
let  {money,rus,eu,eu:[srl]} = mon;


function makeBusiness(owner, director, cash, emp) {
    director = director || 'Victor';
    let sumSponsors = eu.concat(rus, 'unexpected sponsor');
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers:${emp}`);
    console.log('And we have a sponsors: ');
    console.log(...sumSponsors);
    console.log(`Note. Be careful with ${srl}.It's a huge risk.`);
}

makeBusiness('Sam','', money,sponsorsCalcCash1);
