import Article from '../models/Article.js';

export const getArticles = async (req, res) => {
  try {
    const articles = await Article.find().populate('category');
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const postArticle = async (req, res) => {
  try {
    const {name, price, stock, image, category, status}= req.body;
    const article = new Article({
      name,
      price,
      stock,
      image,
      category,
      status
    });
    await article.save();
      res.json ({article});
  } catch (error) {
    res.status(400).json({error:"NO se puede registrar el articulo"})
    console.log(error);
  }
}