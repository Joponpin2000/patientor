import express from 'express';
import diagnoseService from '../services/diagnoseService';
// import toNewDiaryEntry from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diagnoseService.getDiagnosesEntries());
});

// router.post('/', (req, res) => {
//   try {
    
//     const newDiaryEntry = toNewDiaryEntry(req.body);

//     const addedEntry = diaryService.addDiary(newDiaryEntry);
//     res.json(addedEntry);
//   } catch (e) {
//     res.status(400).send(e.message);
//   }
// });
 

// router.get('/:id', (req, res) => {
//   const diary = diaryService.findById(Number(req.params.id));

//   if (diary) {
//     res.send(diary);
//   } else {
//     res.sendStatus(404);
//   }
// });

export default router;