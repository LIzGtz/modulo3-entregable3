const Category = require("../models/category.model");

const createCategory = async (req, res) => {
    const { name } = req.body;

    const newCategory = Category.build({ name, createdOn: Date.now()});

    await newCategory.save();

    res.status(200).json(newCategory);
};

// DELETE /categories/:categoryId
const deleteCategory = async (req, res) => {
    const { categoryId } = req.params;

    // Obtener el category basado en categoryId (PK)
    const category = await Category.findByPk(categoryId);

    if (category == null) {
        res.status(404).end();
        return;
    }

    await category.destroy();

    res.status(200).end();
};

module.exports = {
    createCategory,
    deleteCategory
}