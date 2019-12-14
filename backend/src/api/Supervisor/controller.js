import Category from '../Common/CategoryModel';
import Supervisor from '../Common/supervisorModel'
import Products from '../Common/productsModel'
import subCategory from '../Common/subCotegoryModel'

export const supervisorLogin = (req, res) => {
    Supervisor.findOne({ "name": req.query.name, "password": req.query.password }, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}

export const viewsubCategory = (req, res) => {
    subCategory.find().populate('category').exec((err, user) => {
        if (err) {
            res.send(err);
        }
        else {
            const ress = user.map(data => {
                return { id: data._id, category: data.category.category, subCategory: data.subCategory }
            })
            res.send(ress);
        }
    })
}
export const addSubCategory = (req, res) => {
    subCategory.create(req.body, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}

export const editSubCategory = (req, res) => {
    subCategory.findById({ "_id": req.params.id }).populate('category').exec((err, user) => {
        if (err) {
            res.send(err);
        }
        else {
            const ress = [user].map(data => {
                return { id: data._id, category: data.category.category, subCategory: data.subCategory }
            })
            res.send(ress);
        }
    })
}

export const updateSubCategory = (req, res) => {
    subCategory.findByIdAndUpdate({ "_id": req.params.id }, req.body, { new: true,upsert:true }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
}


export const categoryData = (req, res) => {
    Category.find((err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    })
}


export const addProduct = (req, res) => {
    Products.create(req.body, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}


export const editProduct = (req, res) => {
    Products.findById({"_id":req.params.id}).populate('category').exec((err, users) => {
        if (err) {
            res.send(err);
        }
        else {
            console.log(users);
            const ress = [users].map(data => {
                return { id: data._id, category: data.category.category, subCategory: data.subCategory, productName: data.productName, price: data.price, modal: data.modal, description: data.description }
            })
            res.send(ress);
        }
    })
}

export const getProductData = (req, res) => {
    Products.find().populate('category').exec((err, user) => {
        if (err) {
            res.send(err);
        }
        else {
            const ress = user.map(data => {
                return { id: data._id, category: data.category.category, subCategory: data.subCategory, productName: data.productName, price: data.price, modal: data.modal, description: data.description }
            })
            res.send(ress);
        }
    })
}

export const updateProduct = (req, res) => {
    Products.findByIdAndUpdate(req.params.id, req.body, { new: true,upsert:true }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
}

export const deletesubCategory = (req, res) =>
    subCategory.findByIdAndRemove(req.params.id, (err, deletedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(deletedObj);
        }
    });

export const deleteProduct = (req, res) =>
    Products.findByIdAndRemove(req.params.id, (err, deletedObj) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(deletedObj);
        }
    });

export const getSubCategoryData = (req, res) => {
    subCategory.find({ "category": req.query.category }, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            console.log(result);

            res.send(result.map(record => {

                return record;

            }));
        }
    })
}
