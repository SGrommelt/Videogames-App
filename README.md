
# Videogames App

An app that displays information about different video games. The app gets the necessary data from an api and also includes the option to add video games directly to the database.

## Features

- Search functionality
- Combined filters and ordering of data
- Database
- CRUD operations
- REST API requests



## Tech Stack

**Client:** React, Redux, Next JS, CSS Modules

**Server:** JavaScript, Node JS, Express

**Database:** PostgreSQL, Sequelize


## Screenshots

**Landing**

<img src="./img/LoginGIF.gif" alt="" width="384" height="216" />

**Home**

<img src="./img/SearchGIF.gif" alt="" />

**Game Detail**

<img src="./img/DetailGIF.gif" alt="" width="384" height="216" />

## Installation

1.- Clone the repo.

```bash
  git clone https://github.com/SGrommelt/Videogames-App.git
```

2.- From the main folder, move to "client" directory and install dependencies.

```bash
  cd client
  npm install
```

3.- From the main folder, move to "api" directory and install dependencies.

```bash
  cd api
  npm install
```

4.- Create a local database named "videogames". Create a .env file inside the "api" directory and add the following information:

```bash
    DB_USER= // Your postgres username here
    DB_PASSWORD= // Your postgres password here
    DB_HOST=localhost
    API_KEY= // Your rawg api key here (you can get it from https://rawg.io/apidocs)
```

5.- Run npm start in the terminal, located at the "api" directory. Next, run the same command again this time located in the "client" directory.

```bash
    npm start
```
