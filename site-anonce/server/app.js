const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const userRoutes = require('./routes/UserRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api/users', userRoutes);

sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});