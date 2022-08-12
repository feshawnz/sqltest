> ![gif](https://j.gifs.com/qjDJLp.gif)

### client logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!).

### Before You Begin

* Eat-Da-client! is a restaurant app that lets users input the names of clients they'd like to eat.

* Whenever a user submits a client's name, your app will display the client on the left side of the page -- waiting to be devoured.

* Each client in the waiting area also has a `Devour it!` button. When the user clicks it, the client will move to the right side of the page.

* Your app will store every client in a database, whether devoured or not.

## Instructions

#### App Setup

1. Create a GitHub repo called `client` and clone it to your computer.

2. Make a package.json file by running `npm init` from the command line.

3. Install the Express npm package: `npm install express --save`.

4. Create a server.js file.

5. Install the Handlebars npm package: `npm install express-handlebars --save`.

6. Install the method-override npm package: `npm install method-override --save`.

7. Install the body-parser npm package: `npm install body-parser --save`.

8. Install MySQL npm package: `npm install mysql --save`.

10. Require the following npm packages inside of the server.js file:
	* express
	* method-override
	* body-parser

#### DB Setup:

1. Inside your `client` directory, create a folder named `db`.

2. In the `db` folder, create a file named `schema.sql`. Write SQL queries this file that do the following:
	* Create the `clients_db`.
	* Switch to or use the `clients_db`.
	* Create a `clients` table with these fields:
		* **id**: an auto incrementing int that serves as the primary key.
		* **client_name**: a string.
		* **devoured**: a boolean.
		* **date**: a TIMESTAMP.

4. Still in the `db` folder, create a `seeds.sql` file. In this file, write insert queries to populate the `clients` table with at least three entries.

7. Run the `schema.sql` and `seeds.sql` files into the mysql server from the command line

8. Now you're going to run these SQL files. 
	* Make sure you're in the `db` folder of your app.

	* Start MySQL command line tool and login: `mysql -u root -p`.

	* With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

	* Now insert the entries you defined in `seeds.sql` by running the file: `source seeds.sql`.

	*
	 Close out of the MySQL command line tool: `exit`.

#### Config Setup:

1. Inside your `client` directory, create a folder named `config`.

2. Create a `connection.js` file inside `config` directory.

	* Inside the `connection.js` file, setup the code to connect Node to MySQL.

	* Export the connection.

3. Create an `orm.js` file inside `config` directory.

	* Import (require) `connection.js` into `orm.js`

	* In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
		* `selectAll()` 
		* `insertOne()` 
		* `updateOne()` 

	* Export the ORM object in `module.exports`.

#### Model setup:

* Inside your `client` directory, create a folder named `models`.

	* In `models`, make a `client.js` file.

		* Inside `client.js`, import `orm.js` into `client.js`

		* Also inside `client.js`, create the code that will call the ORM functions using client specific input for the ORM.

		* Export at the end of the `client.js` file.

#### Controller setup:

1. Inside your `client` directory, create a folder named `controllers`.

2. In `controllers`, create the `clients_controller.js` file.

3. Inside the `clients_controller.js` file, import the following:
	* Express
	* `client.js`

4. Create the `router` for the app, and export the `router` at the end of your file.

#### View setup:

1. Inside your `client` directory, create a folder named `views`.

	* Create the `index.handlebars` file inside `views` directory.

	* Create the `layouts` directory inside `views` directory.

		* Create the `main.handlebars` file inside `layouts` directory.

		* Setup the `main.handlebars` file so it's able to be used by Handlebars.

		* Setup the `index.handlebars` to have the template that Handlebars can render onto.

		* Create a button in `index.handlebars` that will submit the user input into the database.

#### Directory structure:
All the recommended files and directories from the steps above should look like the following structure:
```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── clients_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── client.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── client_style.css
│   │   └── img
│   │       └── client.png
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

-------
