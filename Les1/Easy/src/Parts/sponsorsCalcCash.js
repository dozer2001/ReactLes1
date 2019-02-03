function sponsorsCalcCash() {
    const sponsors = {
        cash: [40000, 5000, 30400, 12000],
        eu: ['SRL', 'PLO', 'J&K'],
        rus: ['RusAuto', 'SBO'],
    };
    let  {cash,eu,eu:[srl], rus} = sponsors;
    function calcCash(own) {
        own = own || 0;
        let total = own.reduce((sum,current) =>{
            return sum + current
        });
        return total;
    }
    const money = calcCash(cash);
    let all = {cash,eu,rus,money};
    return all;


}

export default sponsorsCalcCash