const categorieSchema =  new mongoose.Schema(
    {
        imageUri: { type: String, required: true },
        name:  { type: String, required: true },
      }
      )
      const Categorie = mongoose.model('Categorie', categorieSchema);

export default Categorie;