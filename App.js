"use strict";
const a = 1;
function getFullName(firstname, surname) {
    return `${firstname} ${surname}`;
}
const getFullNameArrow = (firstname, surname) => {
    return `${firstname} ${surname}`;
};
console.log(getFullName('Kici', 'Jim'));
function getFullInfo(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname} ${userEntity.age} ${userEntity.city}`;
}
const user = {
    firstname: 'Alex',
    surname: 'Takeree',
    city: 'Abu-Dabi',
    age: 32,
};
console.log(getFullInfo(user));
