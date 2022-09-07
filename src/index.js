const express = require('express');
const cors = require('cors');
const connection = require('./Connection');

let CorsOptions = {
    origin: '*',
    optionSuccessStatus: 200
}

const app = express();
connection
app.use(cors(CorsOptions));
app.use(express.json());


const AuthRoutes = require('./routes/auth.routes');
const MovieRoutes = require('./routes/movie.routes');
const AsientoRoutes = require('./routes/asiento.routes');
const CompraRoutes = require('./routes/compra.routes');


app.use('/auth', AuthRoutes);
app.use('/movie', MovieRoutes);
app.use('/asiento', AsientoRoutes);
app.use('/compra', CompraRoutes);


const port = process.env.PORT || 3000;



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

