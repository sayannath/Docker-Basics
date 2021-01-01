const express = require("express");
const app = express();

const PORT = 3000

app.get('/', (req, res) => {
     res.json([{
         "name": "Sayan Nath",
         "email": "sayannath235@gmail.com"
     }]);
});

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}!`);
});