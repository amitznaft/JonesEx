

# Instructions how to run the code
## Software Requirements
#### node.js , mongoDB Atlas account
## How to install
#### Using Git
git clone https://github.com/amitznaft/JonesEx.git ./myfolder
#### Using manual download ZIP
1. Download repository
2. Uncompress to your desired directory
#### Install npm dependencies after installing (Git or manual download)
1. cd myproject
2. npm install
#### Setting up environment
1. You will find a file named .env.example on root directory of project.
2. Create a new file by copying and pasting the file and then renaming it to just .env
3. Change the value of ATLAS_URI in the file to your mongoDB ATLAS URI (MongoDB ATLAS connection string)

## How to run
#### Running API server locally
npm start / node server.js
#### Tests
npm test

## Server Functionality
#### Save new order (POST /api/orders)
the api require order to be json as :
{
	"orderDate" : type : Date (required)
	"customerId" : type : String (required)
	"items" : type : String Array (required)
	"price": type : Number (required)
   comments : type : String
}
#### Get all orders from the last day (GET /api/orders)

   
