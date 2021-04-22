
# Pokemon Hub

This is my final project built during my stay at Skylab Coders Academy.

This is a **React** app that uses **Redux** for stage management, and on the server side, build with **NodeJs**, connects to a **Mongo Database**.

The project is tested with **Jest**.

### What can a I do in Pokemon Hub?

This app allows the unlogged users to check data for every Pokemon by using the **Pokedex**. If users login, they can use the team creator option to create teams that can later be used for **performing battles** using the in-game option. 

## Author
- Judith Martínez (judithmg)

## Run this project

```
git clone https://github.com/judithmg/pokehub
cd BACKEND
npm install
cd ..
cd FRONTEND
npm install
```

- Make sure to add your own environmental variables to run this project
- You'll have to add your own mongo database with the asked collections. You can find them at `FRONTEND/src/data`

To run the project, use
```
npm start
```
On both `BACKEND/` and `FRONTEND/`

To run the tests, use
```
npm test
```
