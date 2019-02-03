function employers() {
const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
    const employersNames = employers.filter(name => name.length > 0).map(item => item.toLowerCase().trim());

    return employersNames;
}
export default employers;
