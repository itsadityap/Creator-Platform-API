
<img alt="Nodejs" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/> <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"> <img alt="Javascript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/> <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white "> 

## Creator API Platform (Backend)

A **working api** for creator API platform. Created using NodeJS. 

To make it work on your system, clone the repository, then `npm init`. Make an .env file and add two varibles `MONGO_DB_URL` and `SECRET` for JWT.

### Endpoints
* ```/api/v1/signup``` - Signup into the Website
	
    **Signing Up**
    ![1](https://github.com/itsadityap/Creator-Platform-API/blob/main/public/1.png?raw=true)
    

    **Sign Up Error Handling**

    ![1](https://github.com/itsadityap/Creator-Platform-API/blob/main/public/2.png?raw=true)


    <br><br>
* ```/api/v1/signin``` - Login into the Website

    **Logging In**
    ![1](https://github.com/itsadityap/Creator-Platform-API/blob/main/public/3.png?raw=true)

    **Login if user does not exist**
    ![1](https://github.com/itsadityap/Creator-Platform-API/blob/main/public/4.png?raw=true)

    <br><br>
* ```/api/v1/signout``` - 
Signout of the Website

    **Signing Out**
    ![1](https://github.com/itsadityap/Creator-Platform-API/blob/main/public/12.png?raw=true)


    <br><br>
* ```/api/v1/alldata``` - Get all users for the home page rendering

    **Get Data of all the users**
    ![1](https://github.com/itsadityap/Creator-Platform-API/blob/main/public/8.png?raw=true)


    <br><br>
* ```/api/v1/donate``` **(protected route)** - Post request for sending

    **Sening Donations if user is Logged In**
    ![1](https://github.com/itsadityap/Creator-Platform-API/blob/main/public/5.png?raw=true)

    **Sening Donations if user is NOT Logged In**
    ![1](https://github.com/itsadityap/Creator-Platform-API/blob/main/public/6.png?raw=true)

    **If the creator you want to find is not found was not found in the database**
    ![1](https://github.com/itsadityap/Creator-Platform-API/blob/main/public/7.png?raw=true)

    **If the user writes his own ID**

    ![1](https://github.com/itsadityap/Creator-Platform-API/blob/main/public/14.png?raw=true)

    
    <br><br>
    
* ```/api/v1/getDonation``` **(protected route)** - Post request for returning all donations from a particular creator (who is logged in) to another creators

    **Getting all the donation information of the logged In user**

    ![1](https://github.com/itsadityap/Creator-Platform-API/blob/main/public/11.png?raw=true)

    **Getting donation information if the user is not Logged in**

    ![1](https://github.com/itsadityap/Creator-Platform-API/blob/main/public/10.png?raw=true)
