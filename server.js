const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors())

mongoose.connect('mongodb+srv://dscProject:project@cluster0.btb9s4g.mongodb.net/test',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Database connection successful');
  }).catch((err) => {
    console.error('Database connection error:', err);
  });

  const Student = require('./models/student');
 
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
  const students = new Student({ name, birthDate, gender, classes, address, phoneNumber, email });
  students.save()
  .then(() => {
    res.status(200).json({ message: `Form successfully completed for ${name}`})
  })
  .catch((err) => {
    console.error('error saving student', err);
    res.status(500).json({ error: 'Internal server error' })
  });

 });

 // Faculty DB connection
const Faculty = require('./models/faculty');

app.post('/faculty', (req,res) => {
    const { fname, fbirthDate, femail, position, extension, fphoneNumber } = req.body;
    console.log(req.body);
    if (!fname || !fbirthDate || !femail || !fphoneNumber || !position || !extension) {
        return res.status(400).json({ error: 'All fields are required' });
      }
      // save to db
      const faculty = new Faculty({ fname, fbirthDate, femail, position, extension, fphoneNumber });
      faculty.save()
      .then(() => {
        res.status(200).json({ message: `Form successfully completed for ${fname}`})
      })
      .catch((err) => {
        console.error('error saving faculty', err);
        res.status(500).json({ error: 'Error'});
      });

}); // end faculty db info

// Application DB connection
const Application = require('./models/application');
app.post('/application', (req,res) => {
    const { status, cost} = req.body;
    console.log(req.body);
    if(!status || !cost){
        console.error('All fields are required');
    }
    //save to db
    const application = new Application({ status, cost});
    application.save().then(() => {
        res.status(200).json({ message: `Application successfully saved for student ID of Student`})
       }).catch((err) => {
            console.error('Trouble saving application info', err);
            res.status(500).json({ error: 'Error' });
    })
}); 

// get for application
app.get('/application', async (req, res) => {
  console.log("Received");
  try {
    const applications = await Application.find({});
    res.status(200).json(applications);
  } catch(err) {
    console.error('error', err);
    res.status(500).json({err: "error receiving"})
  }
});


// dorm info for db
const Dorm = require('./models/dorm');
app.post('/dorm', (req,res) => {
    const { daddress, dprice } = req.body;
    console.log(req.body);
    if(!daddress || !dprice){
        console.error('All fields required');
    }

    // save to db
    const dorm = new Dorm({ daddress, dprice });
    dorm.save().then(() => {
        res.status(200).json({message: `Dorm for student saved successfully!`})
    }).catch((err) => {
        console.error('Trouble saving dorm info', err)
        res.status(500).json({ error: 'Error' })
    })
}) // end db for Dorm

// work order type db info
const WorkOrderType = require('./models/workOrderType');
app.post('/workOrderType', (req,res) => {
    const { propertyDamage, applianceDamage, applianceReplacement } = req.body
    console.log(req.body);
    

    //save to db
    const workOrderType = new WorkOrderType({ propertyDamage, applianceDamage, applianceReplacement });
    workOrderType.save().then(() => {
        res.status(200).json({ message: "Work order type saved" });
    }).catch((err) => {
        console.error('Trouble saving work order type');
        res.status(500).json({ error: 'Error' })
    })
})

// rent info for db
const Rent = require('./models/rent');
app.post('/rent', (req,res) => {
    const { paymentInfo } = req.body
    console.log(req.body);
    if(!paymentInfo){
        console.error('All fields required!')
    }
    // save to db
    const rent = new Rent({ paymentInfo });
    rent.save().then(() => {
        res.status(200).json({ message: `Payment info saved successfully. Using payment of ${paymentInfo}` });
    }).catch((err) => {
        console.error('Trouble saving rent info', err);
        res.status(500).json({ error: 'Error' })
    })
});

app.listen(5000,()=>{
    console.log("on port 5000");
});