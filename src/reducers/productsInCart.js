const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          value: action.value,
          price: action.price
        }
      ]

    case 'READ_CART':
      return [
        ...state
      ]

    default:
      return state
  }
}

export default cart