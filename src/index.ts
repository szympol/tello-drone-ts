interface IUser {
  name: string;
  surname: string;
}

const users: Array<IUser> = [
  {
    name: 'Nela',
    surname: 'Polanowska',
  },
  {
    name: 'Iwona',
    surname: 'Polanowska',
  },
  {
    name: 'Szymon',
    surname: 'Polanowski',
  },
];

const getUser = (name: IUser['name']): IUser | undefined => users.find((user) => user.name === name);

const user = getUser('Szymon');
const user2 = getUser('Iwona');
const user3 = getUser('Nela');

// eslint-disable-next-line no-console
console.table([user, user2, user3]);
