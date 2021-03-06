const express = require ( 'express' );
const connectDB = require ( './config/db' );

const app = express();

connectDB();

app.use ( express.json() );
app.use (( req, res, next ) => {
    res.header ( 'Access-Control-Allow-Origin', '*' );
    res.header ( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
    next();
});
app.use ( '/', require ( './api/users' ));

const PORT = process.env.PORT || 5000;

app.listen ( PORT, () => console.log ( `Server started on port ${PORT}` ));