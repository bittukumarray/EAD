const mongoose = require("mongoose");
const Role = require("../../helpers/roles");
const User = require("../User");
// const Order = require("../order");
const Schema = mongoose.Schema;
const genSchema = new mongoose.Schema({
  role: {
    type: String,
    default: Role.GenUser
  },
  cart: {
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "crops",
          required: true
        },
        quantity: { type: Number, required: true }
      }
    ]
  },
  order: [
    {
      type: Schema.Types.ObjectId,
      ref: "order"
    }
  ]
});
var options = { discriminatorKey: "genuser" };
var GenUserSchema = User.discriminator("genuser", genSchema, options);
genSchema.methods.addToCart = function(product) {
  //   console.log(product);
  const cartProductIndex = this.cart.items.findIndex(cp => {
    return cp.productId.toString() === product._id.toString();
  });
  let newQuantity = 1;
  const updatedCartItems = [...this.cart.items];

  if (cartProductIndex >= 0) {
    newQuantity = this.cart.items[cartProductIndex].quantity + 1;
    updatedCartItems[cartProductIndex].quantity = newQuantity;
  } else {
    updatedCartItems.push({
      productId: product._id,
      quantity: newQuantity
    });
  }
  const updatedCart = {
    items: updatedCartItems
  };
  this.cart = updatedCart;
  return this.save();
};

// GenUserSchema.methods.removeFromCart = function(productId) {
//   const updatedCartItems = this.cart.items.filter(item => {
//     return item.productId.toString() !== productId.toString();
//   });
//   this.cart.items = updatedCartItems;
//   return this.save();
// };

// userSchema.methods.clearCart = function() {
//   this.cart = { items: [] };
//   return this.save();
// };
module.exports = GenUser = mongoose.model("genuser");
