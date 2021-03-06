const mongoose = require('mongoose');
var Schema = mongoose.Schema;

//user schema-model
var MemberSchema = new Schema({
    _id: Number,
    fname: String,
    lname: String,
    userName: String,
    email: String,
    password: String,
    city: String,
    street: String,
    role: String,
    cart: [{ type: Schema.Types.ObjectId, ref: 'cart' }],
    order: [{ type: Schema.Types.ObjectId, ref: 'order' }]
});

// category schema-model
var CategorySchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String
});

var OrderSchema = new Schema({
    _id: Schema.Types.ObjectId,
    member_id: [{ type: Schema.Types.ObjectId, ref: 'members' }],
    cart_id: [{ type: Schema.Types.ObjectId, ref: 'cart' }],
    Price: Number,
    derliver_city: String,
    deliver_street: String,
    dliver_date: Date,
    order_date: Date,
    credit_card_4dig: Number
});


var CartSchema = new Schema({
    _id: Schema.Types.ObjectId,
    member_id: [{ type: Schema.Types.ObjectId, ref: 'Member' }],
    date_created: Date
});

var ProductSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    category_id: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    price: Number,
    image: String
});

var CartItem = new Schema({
    _id: Schema.Types.ObjectId,
    product_id: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    quantity: Number,
    totla_price: Number,
    cart_id: [{ type: Schema.Types.ObjectId, ref: 'Cart' }]

});


var ShopCity = new Schema({
    _id: Number,
    city: String
});


module.exports = {
    Member: mongoose.model('members', MemberSchema),
    Category: mongoose.model('category', CategorySchema),
    Order: mongoose.model('order', OrderSchema),
    Cart: mongoose.model('cart', CartSchema),
    Product: mongoose.model('product', ProductSchema),
    Cart_item: mongoose.model('cart_item', CartItem),
    City: mongoose.model('city', ShopCity)

};

// db.city.save({"_id":1, "city":"Jerusalem"},{"_id":2, "city":"Tel Aviv"},{"_id":3, "city":"Be'er Sheva"},{"_id":4, "city":"Ashdod"},{"_id":5, "city":"Haifa"},{"_id":6, "city":"Rishon Letzion"},{"_id":7, "city":"Afula"},{"_id":8, "city":"Eilat"},{"_id":9, "city":"Bnei Brak"},{"_id":10, "city":"Raanana"},)