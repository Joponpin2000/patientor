import diagnoses from '../data/diagnoses';
import {
  DiagnoseEntry,
  // NewDiaryEntry,
    // DiaryEntry
  } from '../types';

// const getEntries = (): DiaryEntry[] => {
//   return diaries;
// };

const getDiagnosesEntries = (): DiagnoseEntry [] => {
  return diagnoses.map(({code, name, latin}) => ({
    code,
    name,
    latin
  }));
};

// const addDiary = (entry: NewDiaryEntry
//   ): DiaryEntry => {

//   const newDiaryEntry = {
//      id: Math.max(...diaries.map(d => d.id)) + 1,
//     ...entry
//   };

//   diaries.push(newDiaryEntry);
//   return newDiaryEntry;
// };

// const findById = (id: number): DiaryEntry | undefined => {
//   const entry = diaries.find(d => d.id === id);
//   return entry;
// };

export default {
  // getEntries,
  // addDiary,
  getDiagnosesEntries,
  // findById
};