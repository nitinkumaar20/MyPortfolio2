import { connectToDB } from './db.js';
import  express from 'express';
const app = express()
import cors from 'cors'
const port = 3000
import Message from './router/Message.js'


connectToDB.then(async()=>{
  app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  });
}).catch((error)=>{console.log(error);})


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api', Message)
