const express=require('express');
const app =express();
const cors= require('cors');

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({
    origin:'*'
}));

const tipoProyecto=require('./routes/TipoProyecto');
const cliente=require('./routes/cliente');
const universidad=require('./routes/universidad');
const etapa=require('./routes/etapas');
const proyecto=require('./routes/proyecto');


app.use('/api/tipoproyectos',tipoProyecto);
app.use('/api/clientes',cliente);
app.use('/api/universidades',universidad);
app.use('/api/etapas',etapa);
app.use('/api/proyectos',proyecto);




module.exports=app;