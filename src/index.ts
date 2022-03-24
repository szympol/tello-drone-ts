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

console.table([user, user2]);
