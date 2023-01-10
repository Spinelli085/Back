const express = require ('express');
const app = express();
const fs = require ("fs");
const server = app.listen(8080,()=>console.log("Activado puerto 8080"));
const productManager = require ("./ProductManager");
server.on("error", err =>console.log(`error: ${err}`));


app.get('/products', async (req,res)=>{
    const result=await productManager.getProduct()
    res.send(result);
});

app.get("/products/?", async (req,res)=>{
    fs.readFile("productos.json", (err,data)=>{
        if(err) throw err;
        const products = JSON.parse(data);
        const limit = req.query.limit;

        if(limit){
            res.send(products.slice(0,limit));
        }else{
            res.send(products);
        }
    })
});