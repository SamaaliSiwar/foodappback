import mongoose from "mongoose";

const productSchema =  new mongoose.Schema(
    {
        imageUri: { type: String, required: true },
        name:  { type: String, required: true },
        price:  { type: Number, required: true,  },
        discountPercentage:  {type: Number  },
        label: {type:String},
        rating: {type:Number, require:true},
        categorie: {type: String, required: true },
        
        isPopular:{type:Boolean,require:true}
      }
      )
      const Product = mongoose.model('Product', productSchema);

export default Product;