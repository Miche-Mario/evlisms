import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js"
import SequelizeStore from "connect-session-sequelize"
import UsersRoute from "./routes/UsersRoute.js"
import AboutsRoute from "./routes/AboutRoute.js"
import StudentsRoute from "./routes/StudentsRoute.js"
import CourseRoute from "./routes/CourseRoute.js"
import SubCourseRoute from "./routes/SubCourseRoute.js"

import AuthRoute from "./routes/AuthRoute.js"


dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});

(async()=> {
    await db.sync();
})()

app.use(express.json());
app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));
app.use(UsersRoute);
app.use(StudentsRoute);
app.use(AboutsRoute);
app.use(AuthRoute);
app.use(CourseRoute);
app.use(SubCourseRoute);


// Static Images Folder
app.use('/Images', express.static('./Images'))

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

store.sync();
app.listen(process.env.APP_PORT, () => {
    console.log('Server up and running...');
})