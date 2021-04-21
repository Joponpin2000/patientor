import { DiagnoseEntry, Gender, NewPatientEntry } from './types';

const parseCode = (code: unknown): string => {
  if (!code || !isString(code)) {
  console.log(code);
    throw new Error('Incorrect or missing code');
  }

  return code;
};

const parseName = (name: unknown): string => {
  if (!name || !isString(name)) {
    throw new Error('Incorrect or missing name');
  }

  return name;
};

const parseLatin = (latin: unknown): string => {
  if (!latin || !isString(latin)) {
    throw new Error('Incorrect or missing latin');
  }

  return latin;
};

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDob = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
      throw new Error('Incorrect or missing date of birth: ' + date);
  }
  return date;
};

const parseSsn = (ssn: unknown): string => {
  if (!ssn || !isString(ssn)) {
    throw new Error('Incorrect or missing ssn');
  }

  return ssn;
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isGender(gender)) {
      throw new Error('Incorrect or missing gender: ' + gender);
  }
  return gender;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};

const parseOccupation = (occupation: unknown): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error('Incorrect or missing occupation');
  }

  return occupation;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toNewDiagnoseEntry = (object: any): DiagnoseEntry => {
  const newEntry: DiagnoseEntry = {
    code: parseCode(object.code),
    name: parseName(object.name),
    latin: object.latin ? parseLatin(object.latin) : '',
  };

  return newEntry;
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toNewPatientEntry = (object: any): NewPatientEntry => {
  const newEntry: NewPatientEntry = {
    name: parseName(object.name),
    dateOfBirth: parseDob(object.dateOfBirth),
    ssn: parseSsn(object.ssn),
    gender: parseGender(object.gender),
    occupation: parseOccupation(object.occupation),
  };

  return newEntry;
};

export default {
  toNewDiagnoseEntry,
  toNewPatientEntry 
};