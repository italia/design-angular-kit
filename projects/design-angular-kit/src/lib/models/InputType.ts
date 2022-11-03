import * as t from 'io-ts';

export const InputType = t.keyof({
  text: null,
  email: null,
  password: null,
  number: null,
  time: null,
  search: null,
  date: null
});

const TEXT = 'text';
const EMAIL = 'email';
const PASSWORD = 'password';
const NUMBER = 'number';
const TIME = 'time';
const SEARCH = 'search';
const DATE = 'date';

export const INPUT_TYPES = {
  TEXT: TEXT,
  EMAIL: EMAIL,
  PASSWORD: PASSWORD,
  NUMBER: NUMBER,
  SEARCH: SEARCH,
  TIME: TIME,
  DATE: DATE
};
