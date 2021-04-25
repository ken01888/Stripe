import * as express from 'express';
import { rmSync } from 'fs';
import apiRouter from './routes';
import * as path from 'path';

const app = express();

app.use(express.static('public'));
app.use(express.json())
app.use(apiRouter);
app.use('*',(req,res)=>{
    res.sendFile(path.join(__dirname,''))
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
