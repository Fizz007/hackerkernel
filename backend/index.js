const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();



app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userRoute = require('./routes/userRoutes')

const taskRoute = require('./routes/taskRouter')

app.use('/api', userRoute)
app.use('/api', taskRoute)

require('./Config/connectDB')

const PORT = 5000; 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });