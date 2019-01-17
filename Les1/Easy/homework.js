const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter((name) => {
    name.length > 0 && name.length !== ''
});
employersNames = employersNames.map((item) => item.toLowerCase());
const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};
let {cash,eu,eu:[srl], rus} = sponsors;
function calcCash(own) {
    own = own || 0;
    let total = own.reduce((sum,current) =>{
        return sum + current
    });
    return total;
}
const money = calcCash(cash);
function makeBusiness(owner, director, cash, emp) {
    director = director || 'Victor';
    let sumSponsors = eu.concat(rus, 'unexpected sponsor');
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers:${emp}`);
    console.log('And we have a sponsors: ');
    console.log(...sumSponsors);
    console.log(`Note. Be careful with ${srl}.It's a huge risk.`);
}

makeBusiness.apply(['Sam', money, employersNames]);