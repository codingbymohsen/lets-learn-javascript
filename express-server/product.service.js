const Joi = require("joi");
const db = require("./database");
productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().min(0).required(),
  tag: Joi.string().optional(),
});

async function createProduct(product, res) {
  const { error, value } = productSchema.validate(product);
  if (error) {
    return res.status(400).json({ error: error.details });
  }
  const result = await db.createProduct(product);
  res.send(result);
}
