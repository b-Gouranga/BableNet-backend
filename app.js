

require('dotenv').config();


// const express = require('express');
// const authRoutes = require('./routes/authRoutes');


// const app = express();
// app.use(express.json());

// app.use('/auth', authRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// app.js
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const cors=require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
