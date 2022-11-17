import * as t from 'io-ts';

export const InputType = t.keyof({
  text: null,
  email: null,
  password: null,
  number: null,
  time: null,
  search: null,
  date: null,
  radio: null,
  checkbox: null,
  textarea: null,
  button: null,
  reset: null,  
  submit: null,
  'datetime-local': null,
  hidden: null,
  image: null,
  month: null,
  range: null,
  tel: null,
  url: null,
  week: null,
  datetime: null,
  color: null,
  file: null
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
