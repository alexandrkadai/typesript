//Tuples typized array of several types
const skill: [number, string] = [1, 'Dev'];

const [id, skillName] = skill;

const skillArray: [number, string, ...boolean[]] = [1, 'react', true, false, true];

console.log(id, skillName);
