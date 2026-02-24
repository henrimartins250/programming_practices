import { faker } from '@faker-js/faker';

const alunos = [];

for (let i = 0; i < 10; i++) {
  alunos.push({
  nome: faker.person.fullName(),
  notas: [
  faker.number.int({ min: 1, max: 100 }),
  faker.number.int({ min: 1, max: 100 })
  ]
  });
    
}

console.log(alunos);