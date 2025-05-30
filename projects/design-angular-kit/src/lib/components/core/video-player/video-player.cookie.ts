const preferencesMap: {
  ck3: {
    [key: string]: boolean;
  };
} = { ck3: {} };
const STORAGE_KEY = 'bs-ck3';
/*
  Possible choices:
  false => Accept once
  true => Accept always
*/
const rememberChoice = (service: string, remember: boolean) => {
  preferencesMap.ck3[service] = remember;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(preferencesMap.ck3));
};

const isChoiceRemembered = (service: string) => {
  preferencesMap.ck3 = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  return Boolean(preferencesMap.ck3[service]) || false;
};

const clearAllRememberedChoices = () => {
  localStorage.removeItem(STORAGE_KEY);
};

const cookies = {
  rememberChoice,
  isChoiceRemembered,
  clearAllRememberedChoices,
};

export { cookies };
