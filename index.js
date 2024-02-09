require('dotenv').config();
const PORT = process.env.PORT | 400;
const app = require('./app');


app.listen(PORT,(req,res)=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});
