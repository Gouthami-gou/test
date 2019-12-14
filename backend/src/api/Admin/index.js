import { Router } from 'express'

import {
    adminLogin,
    addCategory,
    editCategory,
    updateCategory,
    getCategoryData,
    addSupervisor,
    getProductData

} from './controller'

const router = new Router();

router.get('/', adminLogin)

router.post('/addCategory', addCategory)

router.get('/getCategoryData', getCategoryData)

router.get('/editCategory/:id', editCategory);

router.put('/updateCategory/:id', updateCategory);


router.post('/addSupervisor', addSupervisor);

router.get('/getProductData', getProductData);



export default router