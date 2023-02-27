const productDetails=[{
    "id": 1,
    "name": "Carbonated Water - Strawberry",
    "price": 204,
    "quantity": 42
  }, {
    "id": 2,
    "name": "Sage Ground Wiberg",
    "price": 144,
    "quantity": 30
  }, {
    "id": 3,
    "name": "Bread - Hot Dog Buns",
    "price": 445,
    "quantity": 17
  }, {
    "id": 4,
    "name": "Oil - Shortening - All - Purpose",
    "price": 255,
    "quantity": 42
  }, {
    "id": 5,
    "name": "Wasabi Paste",
    "price": 481,
    "quantity": 39
  }]

  const totalRevenueEachproduct=productDetails.map(item=>{
   let totalRevenue=item.price*item.quantity;
    return{ 
        totalRevenue:totalRevenue,
        }
})
console.log(totalRevenueArray);