const { throws } = require("assert");
const fs = require("fs");

class productManager {

    constructor(path,id){
        this.id=id;
        this.path=path;
    }

    async addProducts(title,description,price,thumbnail,code,stock){

       let products={
        title:title,
        description:description,
        price:price,
        thumbnail:thumbnail,
        code:code,
        stock:stock
       };
       if(fs.existsSync(`${this.path}`)){
        products = await this.getProducts();
       }else{
        products=[];
       }
       if(title&&description&&price&&thumbnail&&code&&stock){
        try{
            this.id++;
            await fs.promises.writeFile(
                `${this.id}`,
                JSON.stringify(this.id)
            );
            products.push(products);
            await fs.promises.writeFile(
                `${this.path}`,
                JSON.stringify(products,null,2)
            );
        }catch(err){
            console.error(err);
        }
       
        }
    }
}

