import Product from "../Models/Product.js";
import data from "../sample-data.js";
import expressAsyncHandler from 'express-async-handler';
import PasswordReset from "../Models/Passwordreset.js";
import User from "../Models/User.js";


const productservices={
    send:async ()=>{
        //await Product.remove({});

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
    getcategories:expressAsyncHandler( 
        async ()=>{
        const names = await Product.find().distinct('name');
        res.send(names);
    }
    ),


    addProduct : async(req,res) =>{
      const product = new Product({
          imageUri: req.body.imageUri,
          name:  req.body.name,
          price :  req.body.price,
          discountPercentage :  req.body.discountPercentage,
          label :  req.body.label,
          rating :  req.body.rating,
          categorie :  req.body.categorie,
          isPopular :  req.body.isPopular,
      })
      try {
          const savedProduct = await product.save();
       res.json(savedProduct);
      } catch (error) {
          res.status(500).json(error)
      }
    
   } ,


   getOneProduct: async(req, res) => {
    const id = req.params.id;
  
    Product.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Product with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Product with id=" + id });
      });
  },


   listProduct: async (req, res) => {
      const products = await Product.find();
      res.send(products);
},

 updateProduct :(req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Product to update can not be empty!"
    });
  }

  const id = req.params.id;

  Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Product with id=${id}. Maybe Product was not found!`
        });
      } else res.send({ message: "Product was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Product with id=" + id
      });
    });
  },



  deleteOneProduct: async(req, res) => {
    const id = req.params.id;
  
    Product.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Product with id=${id}. Maybe Product was not found!`
          });
        } else {
          res.send({
            message: "Product was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  },

deleteAllProduct : (req, res) => {
    Product.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Products were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Products."
        });
      });
  },

    getcategories:
        
        async (req, res) => {
            const products = await Product.find().distinct("categorie");
            return products;
        }
    
}
export default productservices;