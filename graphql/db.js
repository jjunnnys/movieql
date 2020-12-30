import shortId from 'shortid';
import faker from 'faker';

export const people = Array(20)
    .fill()
    .map(() => ({
        id: shortId.generate(),
        name: faker.name.findName(),
        age: 20,
        gender: 'male',
    }));

export const getById = (id) => {
    const filteredPeole = people.filter((person) => person.id === id);
    return filteredPeole[0];
};
