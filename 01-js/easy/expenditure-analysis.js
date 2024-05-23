/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// function calculateTotalSpentByCategory(transactions) {
//   let categories_combined=[];
//   let obj={}
//   for (let i = 0 ; i<transactions.length ; i++ ){
//     if (transactions[i]["category"] in category_combined.keys == false){
//       let newObj = Object.assign({},obj,{"category" : transactions[i]["category"], "totalSpent" : 0})
//       categories_combined.push(newObj)
//     }  
//   }
//   for (let i = 0 ; i<transactions.length ; i++ ){
//     for (let j = 0; j<categories_combined.length ; j++){
//       if (categories_combined[j]["category"] === transactions[i]["category"]){
//         categories_combined[j]["totalSpent"]+= transactions[i]["price"];
//       }
//     }

//   }



//   return categories_combined;
// }


function calculateTotalSpentByCategory(transactions) {
  let categories_combined = [];
  let obj = {};

  for (let i = 0; i < transactions.length; i++) {
    let found = false;
    for (let j = 0; j < categories_combined.length; j++) {
      if (categories_combined[j]["category"] === transactions[i]["category"]) {
        found = true;
        break;
      }
    }
    if (!found) {
      let newObj = Object.assign({}, obj, { "category": transactions[i]["category"], "totalSpent": 0 });
      categories_combined.push(newObj);
    }
  }

  for (let i = 0; i < transactions.length; i++) {
    for (let j = 0; j < categories_combined.length; j++) {
      if (categories_combined[j]["category"] === transactions[i]["category"]) {
        categories_combined[j]["totalSpent"] += transactions[i]["price"];
      }
    }
  }

  return categories_combined;
}

module.exports = calculateTotalSpentByCategory;
