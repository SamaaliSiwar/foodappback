import Product from "../Models/Product.js";
import data from "../sample-data.js";

const productservices={
    send:async ()=>{
       // await Product.remove({});

        const createdProduct = await Product.insertMany(data.products)
        return createdProduct;
    },
    prodbyid:async (req,res) => {
        const product = await Product.findById(req.params.id);
        if (product ) {
          res.send(product );
        } else {
          res.status(404).send({ message: 'Product Not Found' });
        }        
      },
    getcategories:async ()=>{
        const categories = await Product.find().distinct('categorie');
        res.send(categories);
    }
}
export default productservices;