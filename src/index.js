const express = require('express');
const cors = require('cors');

let CorsOptions = {
    origin: '*',
    optionSuccessStatus: 200
}

const app = express();

app.use(cors(CorsOptions));
app.use(express.json());

const port = process.env.PORT || 3000;



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

