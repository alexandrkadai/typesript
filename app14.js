"use strict";
const skills = ['Javascript', 'React', 'Native'];
for (const skill of skills) {
    console.log(skill.toUpperCase());
}
const res = skills
    .filter((s) => {
    return s !== 'Native';
})
    .map((s) => s + '! ')
    .reduce((a, b) => a + b);
console.log(res);
