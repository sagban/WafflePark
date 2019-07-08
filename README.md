# Waffle Park - Online Food Delivery Webapp

This repository has code a online food delivery web app that is configured with the MEAN stack (MongoDB, Express.js, Angular 7, Node.js)
Note: This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9. Markdown editor.


## Before You Begin
Before you begin I recommend you read about the basic building blocks that assemble this MEAN application:
* MongoDB - Go through [MongoDB Official Website](http://mongodb.org/) and proceed to their [Official Manual](http://docs.mongodb.org/manual/), which should help you understand NoSQL and MongoDB better.
* Express - The best way to understand express is through its [Official Website](http://expressjs.com/), which has a [Getting Started](http://expressjs.com/starter/installing.html) guide, as well as an [ExpressJS](http://expressjs.com/en/guide/routing.html) guide for general express topics. You can also go through this [StackOverflow Thread](http://stackoverflow.com/questions/8144214/learning-express-for-node-js) for more resources.
* AngularJS - Angular's [Official Website](http://angularjs.org/) is a great starting point. You can also use [Thinkster Popular Guide](http://www.thinkster.io/), and [Egghead Videos](https://egghead.io/).
* Node.js - Start by going through [Node.js Official Website](http://nodejs.org/) and this [StackOverflow Thread](http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js), which should get you going with the Node.js platform in no time.

![](https://i.ibb.co/cLPn1zJ/mean-architecture.png)
## Flow
1. The user views the Angular 7 web app with a browser.
2. With both components written in Node.js, the AngularJS front end communicates with the Express back end via RESTful APIs.
3. The back-end Express application uses the Mongo database for storing and retrieving data.
4. Back-end results are communicated back to the the front end.
5. Front-end results are rendered in a human readable format to the user.

## Prerequisites
Make sure you have installed all of the following prerequisites on your development machine:
* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* MongoDB - [Download & Install MongoDB](http://www.mongodb.org/downloads), and make sure it's running on the default port (27017).

## Installation
The recommended way to get this repository is to use git to directly clone the Waffle Park repository:

```bash
$ git clone https://sagban_@bitbucket.org/sagban_/wafflepark.git
```

This will clone the latest version of the Waffle Park repository to a **wafflePark** folder. And, this should be your project stucture

```sh
wafflePark/
        e2e/
        node_modules/
        server/
        src/
        .editorconfig
        .gitignore
        angular.json
        package.json
        package-lock.json
        README.md
        tsconfig.json
        tslint.json
```
To install the client side dependencies, run this in the application folder from the command-line:

```bash
$ npm install
```
And, to install all the server side dependencies, run this in the application folder from the command-line:

```bash
$ cd server && npm install
```

##### Client server

Run `ng serve --host 0.0.0.0` for a dev server. Navigate to `http://0.0.0.0:4200/`. The app will automatically reload if you change any of the source files.
##### Backend server

Run `cd server && npm start` for a backend server. Navigate to `http://0.0.0.0:3000/api`. This will show you Waffle park api service page.


Once you've installed all the prerequisites and the all the dependencies, you must have waffle park app ruuning successfully in on your machine. 
But to get started we must seed some data in our mongoDB database. For seeding data in the data just run the following commands:
```sh
$ cd server/seed
server/seed$ node seeder.js
```
The file `seeder.js` contains the code which seed up the mongoDB database with the help of ODM mongoose.


## Stucture And Functionality

#### Client Side
As the client side I've used Angular 7, hence this the major building blocks for the client side applications are the following `components` and `services`

1. **HeaderComponent** - This component contains the header of the application which can be use for the branding purpose.
![](https://i.ibb.co/ChTwdZ4/Screen-Shot-2019-07-08-at-3-22-23-PM.png)

2. **NavbarComponent** - This component contains the navlinks of the application which can be seen at the top of the page after the header. In the mobile views it draws from the left side. The most important navlinks are Sign and user cart. On clicking Signin it open the popups for Login and signup by calling `OpenDialogService` respectively. Also, `FormSubmitService` and `SessionService` are called from this component to get the login status of the user.
![](https://i.ibb.co/ykQ6wKd/Screen-Shot-2019-07-08-at-3-22-37-PM.png)

3. **LoginComponent** - This component showed up in the popup which is call by the `OpenDialogService`. Here user login into his pre-existing account by using his valid credentials. The input of the login form is passed to the 'FormSubmittingService' which further send the data to the server where the validation is done by a `POST: /api/login` request. ![](https://i.ibb.co/JBPy8Wz/Screen-Shot-2019-07-08-at-3-25-06-PM.png)

4. **SignupComponent** - This component works same as the `LoginComponent`. Instead of login into the pre-existing account, user can can signin into a new account. Data is send to the server by calling `POST: /api/signup` request.
![](https://i.ibb.co/7Cz2cpk/Screen-Shot-2019-07-08-at-3-25-15-PM.png)

5. **FooterComponent** - This component containes the footer of the application which consists of the links and other details of the company.
![](https://i.ibb.co/0C58xm8/Screen-Shot-2019-07-08-at-3-28-31-PM.png)

6. **WaffleCardComponent** - This component contains the list of the menu item fetched from the server using `GET: /api/waffles` request into a `waffles:any` variable, which is futher use to display fetched data.
![](https://i.ibb.co/8cCbgfp/Screen-Shot-2019-07-08-at-3-24-08-PM.png)

7. **ShowWaffleComponent** - This component is nothing but the extended part of the `WaffleCardComponent`. It shows the detailed version of the each menu item in the popup view. Here user can add the clicked item into his cart which the required quantity. After that these items are returned to the `WaffleCardComponent` and which further calls the `CartService` to push the items to sessions to the server.
![](https://i.ibb.co/4jH592Q/Screen-Shot-2019-07-08-at-3-24-26-PM.png)

8. **SidecartComponent** - This component contains the cart of the application where all the selected item will be shown with their respected quantities. It also provides the functionalities like controlling the quantity of the item and deleting item by the calling the functions. At the sametime these changes are also updated to the session of the server.
![](https://i.ibb.co/8dWTb9z/Screen-Shot-2019-07-08-at-3-24-49-PM.png)

9. **HomeComponent** - This component is cummulative of all the above described components. This is basically a home page of the application and can be find at `/` route of client server.

10. **CheckoutComponent** - This component is the most important component of the application because it is place where user can place the order by completing the steps like Login, Adding delivery address, and finally making a succesfull payment of his order. This component also contains `SidecartComponent`, `NavbarComponent`, and `FooterComponent` as its sub-components. This page can be found at `/checkout` route of client server.
![](https://i.ibb.co/gP6Zgkw/Screen-Shot-2019-07-08-at-3-26-07-PM.png)

#### Server Side


Copyright
--------
Healthcoco Pvt. Ltd
