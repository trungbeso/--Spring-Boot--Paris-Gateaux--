export const calculateCartTotal = (cartItems, quantities) => { 
    const subTotal = cartItems.reduce(
        (acc, food) => acc + food.price * quantities[food.id],
        0
      );

    const shipping = (subTotal > 100000 || subTotal === 0) ? 0 : 15000; 
    const tax = (subTotal + shipping) * 0.1; 
    const total = subTotal + shipping + tax;

    return { subTotal, shipping, tax, total };
}