import express from 'express'
import cors from 'cors'

const app = express();

app.use(express.json);
app.use(cors);

app.listen(5000, () => {
    console.log("server running on localhost:5000");
});