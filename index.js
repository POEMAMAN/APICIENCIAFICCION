const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
const session = require('express-session');
const dotenv = require("dotenv");
dotenv.config();
const {connect} = require("./src/utils/db");
const app = express();
const PORT = process.env.PORT || 5000;
const booksRouter = require("./src/api/routes/book.routes");
const collectionsRouter = require("./src/api/routes/collection.routes");
const universeRouter = require("./src/api/routes/universe.routes");
const authorsRouter = require("./src/api/routes/author.routes");
const userRoutes = require('./src/api/routes/user.routes');
const passport = require('passport');
const MongoStore = require('connect-mongo');
require('./src/api/authentication/passport');
const cors = require('cors');
connect();


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(
    session({
      secret: process.env.SESSION_SECRET ||'upgradehub_node',
      resave: false, // Solo guardará la sesión si hay cambios en ella.
      saveUninitialized: false, // Lo usaremos como false debido a que gestionamos nuestra sesión con Passport
      cookie: {
        maxAge: 3600000 // Milisegundos de duración de nuestra cookie, en este caso será una hora.
      },
      store: MongoStore.create({
        mongoUrl: "mongodb+srv://poemaman:D497905224DAFAB34A5A8DC02C26ECBC@upgrade-hub.llxzuwb.mongodb.net/?retryWrites=true&w=majority"
        // mongoUrl: process.env.DBURL no me funciona el process.env
      })

    })
  );
app.use(passport.initialize());
app.use(passport.session());

app.use("/books", booksRouter);
app.use("/collections", collectionsRouter)
app.use("/author", authorsRouter)
app.use("/universe", universeRouter)
app.use('/user', userRoutes);

app.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || 'Error inesperado');
})


app.listen(PORT, () => console.log(`escuchando en el puerto: https://localhost:${PORT}`));