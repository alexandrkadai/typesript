const a = 1;

function getFullName(firstname: string, surname: string): string {
  return `${firstname} ${surname}`;
}

const getFullNameArrow = (firstname: string, surname: string): string => {
  return `${firstname} ${surname}`;
};

console.log(getFullName('Kici', 'Jim'));

function getFullInfo(userEntity: {
  firstname: string;
  surname: string;
  age: number;
  city: string;
}) {
  return `${userEntity.firstname} ${userEntity.surname} ${userEntity.age} ${userEntity.city}`;
}

const user = {
  firstname: 'Alex',
  surname: 'Takeree',
  city: 'Abu-Dabi',
  age: 32,
};

console.log(getFullInfo(user));
