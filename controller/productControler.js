
import productservices from "../services/productService.js";

export const senddata = async (req, res) => {
  let finisheddata = await productservices.send();
  res.send(finisheddata);
};
/*export const
if (baguetest) {
    res.send(baguetest);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }*/