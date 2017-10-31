var mysql=require("mysql");
var inquirer=require("inquirer");                                                //package that we will install to be able to run the app
require("console.table");


var connection=mysql.connection({
	host:"localhost",                           //database connection the host and the user  :, not =             
    port :3306,

 user:"root",
 password:"A123321a",                           //user and pw using , between the elements.
 database:"bamazon"

});
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);     
    loadproducts()        
  } });

function loadproducts()
{
	connection.query("Select * from products",function(err,res){}        
		if (err) throw err;
		console.table(res);                                       
		promptCustomerForItem(res);
		});
}
function promptCustomerForItem(invetory)
{
	inquirer                                                   //we called the package inquirer and create a prompt with the attr[name,type,gui message,error handler].
	.prompt([
	{
		type:"input",
		name:"choice",
		message:"Enter the Id of the item You're Looking for",
		validate:function (val){
			return !isNaN(val);
		}
	}])
.then(function(val){                                                                                   //this is from the solution 
	 	var choiceID = parseInt(val.choice);
     	var availabe = checkInventory(item_id, inventory);
     		if available{
    		 	prompt(item_name);
     					}
      		else {
      				prompt("we dont have this item recently,check with us later");
             	 }
}             	 
  function promptCustomerQuantity()
{
	inquirer                                                   //we called the package inquirer and create a prompt with the attr[name,type,gui message,error handler].
	.prompt([
	{
		type:"input",
		name:"choice",
		message:"How many Would You like",
		validate:function (val){
			return !isNaN(val);
		}
	}        ])
.then(function(val){                                                                                   //this is from the solution 
	 var stockquantity = parseInt(val.stockquantity);     
     	if (stockquantity>availabe.stock_quantity){
    		 prompt("we dont Have this Amount of this item.");
     				}
      	else {
      	 makePurchase(availabe,stockquantity);                                                            //this also with the function ,but everything i rewrote
     		 }
    				});
}


function makePurchase(availabe, stockquantity) {
  connection.query("UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",[stockquantity, products.item_id]);
    function(err, res) {
        console.log("\nSuccessfully purchased " + stockquantity + " " + products.item_name + "'s!");                 
      			loadproducts();
                        }
                   
                                                }

//function checkInventory(item_id,inventory)                            // i'm not sure why we created a function for the iventory since we checked on line 65




