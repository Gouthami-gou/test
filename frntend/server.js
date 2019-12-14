const express = require('express')
const app = express()
 var images = require('path').join(__dirname, '/images');
 app.use(express.static(images));

app.get('/', loadstdHtml);
app.get('/admin', adminLoginPage);
app.get('/supervisor', supervisorLogin);

app.get('/adminpage', adminpage);
app.get('/supervisorPage', supervisorPage);


app.get('/adminhomepage',adminhomepage);
app.get('/Admin/addCategory', addCategorys);
app.get('/Admin/addSupervisor', addSupervisors);
app.get('/Admin/viewCategory', viewCategory);
app.get('/Admin/viewProducts', viewProducts);


app.get('/Supervisor/addSubCategory', addSubCategory);
app.get('/Supervisor/addProduct', addProducts);
app.get('/Supervisor/viewsubCategorys', viewsubCategorys);
app.get('/Supervisor/viewProducts', viewProduct);



function loadstdHtml(req, res) {
    res.sendFile('index.html', { root: __dirname });
}

function adminLoginPage(req, res) {
    res.sendFile('adminlogin.html', { root: __dirname });
}
function supervisorLogin(req, res) {
    res.sendFile('supervisorlogin.html', { root: __dirname });
}
function adminpage(req, res) {
    res.sendFile('Admin/adminmainpage.html', { root: __dirname });
}
function adminhomepage(req,res){
    res.sendFile('Admin/adminhome.html',{root:__dirname});
}
function addSupervisors(req, res) {
    res.sendFile('Admin/addSupervisor.html', { root: __dirname });
}
function viewProducts(req, res) {
    res.sendFile('Admin/viewProducts.html', { root: __dirname });
}
function addProducts(req, res) {
    res.sendFile('Supervisor/addProduct.html', { root: __dirname });
}
function viewCategory(req, res) {
    res.sendFile('Admin/viewCategory.html', { root: __dirname });
}

function addCategorys(req, res) {
    res.sendFile('Admin/addCategory.html', { root: __dirname });
}
function supervisorPage(req, res) {
    res.sendFile('Supervisor/supervisorHome.html', { root: __dirname });
}

function addSubCategory(req, res) {
    res.sendFile('Supervisor/addSubCategory.html', { root: __dirname });
}

function viewProduct(req, res) {
    res.sendFile('Supervisor/viewProducts.html', { root: __dirname });
}

function viewsubCategorys(req, res) {
    res.sendFile('Supervisor/viewSubCategory.html', { root: __dirname });
}

app.listen(3000, () => console.log(`Example app listening on port number 3000!`))