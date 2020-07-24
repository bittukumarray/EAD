# Farmer Dashboard

![Node js](https://img.shields.io/badge/Node.js-8.10-green.svg) ![](https://img.shields.io/badge/React-16.8.6-blueviolet.svg) ![](https://img.shields.io/badge/Express.js-4.16-ce085a.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-4.2-green)
![Docker](https://img.shields.io/badge/Docker-18.09-blue.svg) ![](https://img.shields.io/badge/Ubuntu-18.04-ff4e02.svg)

#

#### Install Instructions

> The best way to install is in a linux (Ubuntu) machine. We have used docker containers to run elasticsearch server

##### Installation Instructions for Backend Server :

#

#

> First Install docker
> https://docs.docker.com/install/linux/docker-ce/ubuntu/

> Run the following commands

1. `docker-compose up`

> Now a postgres psql shell will appear. Execute the following queries in it

> The postgres server is now ready to use.
> Now install node js and npm

`sudo apt update; sudo apt install node npm;`

> Navigate into the backend folder and install node depedencies

`npm install`

> Now start the backend server

`npm run server`

> The backend server has started and is expecting connections on port 5000

##### Installation Instructions for Frontend Server :

> Now setup the frontend server. Navigate into the frontend folder and install dependencies

`npm install`

> Start the frontend server

`npm start`

> The frontend server has started on port 3000. Go to http://localhost:3000/ on your browser to view the website
