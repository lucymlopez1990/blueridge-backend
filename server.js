import express from 'express';import cors from 'cors';
const app = express();app.use(cors({origin:'*'}));app.use(express.json());
app.get('/health',(req,res)=>res.json({ok:true,message:'BlueRidge API is running'}));
const port = process.env.PORT||10000;app.listen(port,()=>console.log('Server :'+port));