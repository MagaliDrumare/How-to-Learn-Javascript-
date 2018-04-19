
//function area(lenght, width){

	//return lenght*width;
//}



//var rectangleAreas= []; 
//rectangleAreas.push(area(15,10));
//rectangleAreas.push(area(5,2));
//rectangleAreas.push(area(10,2));

//console.log(rectangleAreas); 

var bankAccount = 500; 

function makeAPurchase(priceOfItem){

	if(priceOfItem <= bankAccount){

		bankAccount -= priceOfItem;
		console.log("Purchase successful");
	} else {
		console.log("You can't Purchase this item");
	}
}

makeAPurchase(79.99); 
console.log(bankAccount); 
makeAPurchase(799); 
console.log(bankAccount); 

var transaction = function makeAPurchase(priceOfItem){

	if(priceOfItem <= bankAccount){

		bankAccount -= priceOfItem;
		console.log("Purchase successful");
	} else {
		console.log("You can't Purchase this item");
	}
}
transaction(56); 
console.log(bankAccount); 


var printCM = function printCustomerName(firstName, lastName){
	console.log("Welcome "+ firstName + lastName); 
}

printCM("Magali ","Drumare"); 

var bankOperations = [];
bankOperations.push(transaction); 
bankOperations.push(printCM); 
console.log(bankOperations); 





