import express from "express";
import cors from "cors";
import routes from './routes/router.js'


const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);


app.listen(5500, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log("Deu certo");
    }
})