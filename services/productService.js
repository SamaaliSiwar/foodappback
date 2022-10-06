import Product from "../Models/Product.js";
import data from "../sample-data.js";

const productservices={
    send:async ()=>{
       // await Product.remove({});

        const createdProduct = await Product.insertMany(data.products)
        return createdProduct;
    },
    prodbyid:async ({id}) => {
        const product = await Product.findById(req.params.id);
        
      }

}
export default productservices;