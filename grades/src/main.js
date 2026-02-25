import { faker } from '@faker-js/faker';

const alunos = [];

for (let i = 0; i < 10; i++) {

  const nota_1 = faker.number.int({ min: 1, max: 10 });
  const nota_2 = faker.number.int({ min: 1, max: 10 });

  alunos.push({
  nome: faker.person.fullName(),
  notas: [
  nota_1,
  nota_2
  ],
  media: CalcularMedia(nota_1, nota_2)
  });  
}

console.log(alunos);

function CalcularMedia(nota_1, nota_2) {
  let media;
  try {
    media = (nota_1 + nota_2) / 2;
  } catch (error) {
    console.log("erro: falha ao calcular a media do aluno");
  }

  return media;

}