const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://dscProject:project@cluster0.btb9s4g.mongodb.net/test',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Database connection successful');
  }).catch((err) => {
    console.error('Database connection error:', err);
  });

  const Student = require('./src/backend/Models/student');
  app.use(express.json());

  app.post('/student', (req,res) => {
    const { name, birthDate, gender, classes, address, phoneNumber, email } = req.body;
    console.log(req.body);
  if(!name){
    return res.status(400).json({ error: 'Field required'})
  } else if(!birthDate){
    return res.status(400).json({ error: 'Field required'})
  } else if (!gender){
    return res.status(400).json({ error: 'Field required'})
  } else if (!classes){
    return res.status(400).json({ error: 'Field required'})
  } else if (!phoneNumber){
    return res.status(400).json({ error: 'Field required'})
  } else if (!email){
    return res.status(400).json({ error: 'Field required'})
  } else if (!address){
    return res.status(400).json({ error: 'Field required'})
  }

  // save to db
  const students = new Student({ name, birthDate, gender, classes, address, phoneNumber, email});
  students.save()
  .then(() => {
    res.status(200).json({ message: `Form successfully completed for ${name}`})
  })
  .catch((err) => {
    console.error('error saving student', err);
    res.status(500).json({ error: 'Internal server error' })
  });

 });

app.listen(3001,()=>{
    console.log("on port 3001");
});