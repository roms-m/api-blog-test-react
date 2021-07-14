import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from 'express';
import * as cors from 'cors';
import routes from './routes'
const PORT = process.env.PORT || 5000;


createConnection().then(async connection => {
    
    const app = express();
    
    app.use(cors());
    
    app.use(express.json());

    app.use('/api', routes);

    app.listen(PORT, ()=> console.log('Servidor corriendo en el puerto', PORT));

}).catch(error => console.log(error));
