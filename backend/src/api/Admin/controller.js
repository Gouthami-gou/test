import adminModel from './adminModel';
import Category from '../Common/CategoryModel';
import Supervisor from '../Common/supervisorModel'
import product from '../Common/productsModel';
// import {sendEmail} from '../Common/email';

export const adminLogin = (req, res) => {
    adminModel.findOne({ "username": req.query.username, "password": req.query.password }, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}

export const addCategory = (req, res) => {
    Category.create(req.body, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}

export const editCategory = (req, res) => {
    Category.findById({ "_id": req.params.id }, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}

export const getCategoryData = (req, res) => {
    Category.find((err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}

export const updateCategory = (req, res) => {
    Category.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
}


export const addSupervisor = (req, res) => {
    Supervisor.create(req.body, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            // const subject = 'File Received';
            // const body = `You Received a File from Admin<br><br>Phone: ${req.body.phone}<br>Password: ${req.body.password}<br>Please Login Using this Credentials <br>Thank You.`;
            // sendEmail(req.body.emailid, subject, body);
            // res.send(result);
   
            res.send(result);
        }
    })
}


export const getProductData = (req, res) => {
    product.find((err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}