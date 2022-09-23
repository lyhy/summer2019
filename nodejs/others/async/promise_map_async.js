//promise1
const getProducts = () => { 
	return new Promise((resolve, reject) => { 
		return setTimeout( () => resolve(
			[
				{ id: 'product1' }, 
				{ id: 'product2' }, 
				{ id: 'product3'}, 
				{ id: 'product4'}
			]), 1000 ) }) 
}

//promise2 depends on the result of the promise1
const getProductId = (category) => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve(category.id), 1000)
  })
}

//promise3 depends on promise2
const capitalizeId = (id) => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve(id.toUpperCase()), 700)
  })
}



//solution1: call one by one
// const capitalizeProductsIds = async () => {
//   const products = await getProducts()

//   for (let product of products) {
//     const productId = await getProductId(product);
//     console.log(productId);

//     const capitalizedId = await capitalizeId(productId);
//     console.log(capitalizedId);
//   }

//   console.log(products);
// }

// capitalizeProductsIds()

//solution2: Combining And Resolving all Promises with Promise.all(), map() and Async/Await
const capitalizeProductsIds = async () => {
  const products = await getProducts()
	const mapResult = products.map( async (product) => {
		const productId = await getProductId(product);
		console.log(productId);

		const capitalizedId = await capitalizeId(productId)
		console.log(capitalizedId);
		return capitalizeId;
	})
	// const ret1 = await mapResult[0]

	// console.log(ret1)

  Promise.all(
		mapResult 
  )

  console.log(products);
}
capitalizeProductsIds();