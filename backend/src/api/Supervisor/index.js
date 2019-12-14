import { Router } from 'express'

import {
    supervisorLogin,
    addSubCategory,
    editSubCategory,
    updateSubCategory,
    getSubCategoryData,
    categoryData,
    addProduct,
    getProductData,
    editProduct,
    updateProduct,
    viewsubCategory,
    deletesubCategory,
    deleteProduct
} from './controller'

const router = new Router();

router.get('/supervisorLogin', supervisorLogin)

router.post('/addSubCategory', addSubCategory)

router.get('/getSubCategoryData', getSubCategoryData)

router.get('/viewsubCategory',viewsubCategory)

router.get('/editSubCategory/:id', editSubCategory);

router.put('/updateSubCategory/:id', updateSubCategory)

router.get('/categoryData', categoryData)

router.post('/addProduct', addProduct)

router.get('/getProductData', getProductData)

router.get('/editProduct/:id', editProduct);

router.put('/updateProduct/:id', updateProduct)

 router.delete('/deletesubCategory/:id', deletesubCategory);

 router.delete('/deleteProduct/:id', deleteProduct);


export default router