import React from "react";
import Swal from "sweetalert2";

const formatPrice = (price) =>
  `Rs. ${Number(price).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const CheckoutPage = ({ cart, setCart }) => {
  const cartItems = cart.map((item) => ({
    ...item,
    quantity: Number(item.quantity) || 1, // Ensure numeric quantity
  }));

  const removeFromCart = (id) => {
    const removedItem = cartItems.find((item) => item.id === id || item._id === id);
    setCart(cartItems.filter((item) => item.id !== id && item._id !== id));

    Swal.fire({
      icon: "info",
      title: "Item removed",
      text: `${removedItem.name} was removed from your cart.`,
      timer: 1500,
      showConfirmButton: false,
    });
  };

  const updateQuantity = (id, delta) => {
    setCart(
      cartItems.map((item) =>
        item.id === id || item._id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Your cart is empty",
        text: "Please add some items before checking out.",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Order Placed!",
      text: "Thank you for your purchase. Your order has been confirmed.",
    });

    setCart([]);
  };

  const clearCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your cart will be cleared!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, clear it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([]);
        Swal.fire("Cleared!", "Your cart has been emptied.", "success");
      }
    });
  };

  const subtotal = cartItems.reduce((acc, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 1;
    return acc + price * quantity;
  }, 0);

  return (
    <div className="p-6 bg-white min-h-screen flex flex-col">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
        {/* Form */}
        <div className="border p-6 rounded shadow-md bg-gray-50">
          <h2 className="text-xl font-semibold mb-4 pt-12">Enter your information</h2>
          <form className="space-y-4">
            <div className="mt-8">
              <label htmlFor="fullName" className="block mb-1 font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="fullName"
                className="w-full border p-2 rounded"
                type="text"
                placeholder="Full Name"
                required
              />
            </div>

            <div className="mt-8">
              <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                className="w-full border p-2 rounded"
                type="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="mt-8">
              <label htmlFor="phone" className="block mb-1 font-medium text-gray-700">
                Phone Number
              </label>
              <input
                id="phone"
                className="w-full border p-2 rounded"
                type="tel"
                placeholder="Phone Number"
                required
              />
            </div>

            <div className="mt-8">
              <label htmlFor="address" className="block mb-1 font-medium text-gray-700">
                Address
              </label>
              <textarea
                id="address"
                className="w-full border p-2 rounded"
                placeholder="Address"
                required
              ></textarea>
            </div>
          </form>
        </div>

        {/* Cart */}
        <div className="border p-6 rounded shadow-md bg-gray-50">
          <h2 className="text-xl font-semibold mb-4 pt-12">Review your cart</h2>
          {cartItems.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item._id || item.id}
                className="flex items-center justify-between mb-4 border-b pb-2"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={`http://localhost:8000${item.image}`}
                    alt={item.name}
                    className="h-16 w-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">{formatPrice(item.price)}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => updateQuantity(item.id || item._id, -1)}
                        className="px-2 border rounded bg-gray-200"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id || item._id, 1)}
                        className="px-2 border rounded bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id || item._id)}
                  className="text-red-500 text-lg font-bold"
                >
                  ✕
                </button>
              </div>
            ))
          )}

          <div className="mt-6 space-y-2">
            <div className="flex justify-between mt-5">
              <p>Sub Total</p>
              <p>{formatPrice(subtotal)}</p>
            </div>
            <div className="flex justify-between mt-5">
              <p>Discount</p>
              <p>Rs. 0.00</p>
            </div>
            <div className="flex justify-between font-bold text-lg mt-5">
              <p>Total</p>
              <p>{formatPrice(subtotal)}</p>
            </div>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white w-full py-2 rounded mt-4 font-semibold"
              onClick={handleCheckout}
            >
              Check Out
            </button>

            {cartItems.length > 0 && (
              <button
                onClick={clearCart}
                className="bg-red-500 text-white w-full py-2 rounded mt-2 hover:bg-red-600 font-semibold"
              >
                Clear Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
