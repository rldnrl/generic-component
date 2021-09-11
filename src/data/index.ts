import faker from "faker";

export const bigList = [...Array(100)].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar(),
}));

export type BigList = typeof bigList;