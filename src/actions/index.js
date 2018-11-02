let nextProductId = 0;

export const addProductToCart = (name, value, price) => ({
  type: 'ADD_PRODUCT_TO_CART',
  id: nextProductId++,
  name,
  value,
  price
})


export const readCartProducts = () => ({
  type: 'READ_CART'
})