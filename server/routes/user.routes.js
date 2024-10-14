const AdminController = require("../controllers/admin.controller");

module.exports = (app) => {
    app.get("/", AdminController.index);
    app.get("/admin", AdminController.getAdmin);
    app.get('/api/admin/orders', AdminController.getAllOrders);
    app.post('/admin-login', AdminController.adminLogin);
    app.post("/place-order", AdminController.placeOrder);
    app.post("/logout", AdminController.adminLogout)

    app.post("/admin/register", AdminController.adminRegister);
}