const express = require('express');
//require controller files here

const app = express();

app.use(express.json());

//put endpoints here

const port = 4444;
app.listen(port, () => console.log(`Server listening on port ${port}`));