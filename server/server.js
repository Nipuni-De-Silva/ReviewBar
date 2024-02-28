require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes/reviewRoute');

app.use(cors());
app.use(express.json());

mongoose
.connect(process.env.MONGO_URI)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error(err);
})

app.use('/api', routes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});