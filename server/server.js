const items = require('./routes/groceryRoutes')
const connection = require('./db')
const cors = require('cors');
const express = require('express');
const app = express()

connection();

app.use(express.json());
app.use(cors());

app.use("/api/grocerylist", items);

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))