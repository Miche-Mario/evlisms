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
import PurchaseRoute from "./routes/PurchaseRoute.js";
import AuthRoute from "./routes/AuthRoute.js"
import ExamRoute from "./routes/ExamRoute.js"
import ClassTypeRoute from "./routes/ClassTypeRoute.js"
import StudentsCoursesRoute from "./routes/StudentsCoursesRoute.js";
import PriceTypeRoute from "./routes/PriceTypeRoute.js"
import StudentsPurchasesRoute from "./routes/StudentsPurchasesRoute.js"
import TimeRoute from "./routes/TimeRoute.js"
import PricesRoute from "./routes/PricesRoute.js";
import LanguagesRoute from "./routes/LanguagesRoute.js"
import StudentsAccomodations from "./routes/StudentsAccomodationsRoute.js";
import StudentsExams from "./routes/StudentsExmasRoute.js"



import AccomodationRoute from "./routes/AccomodationRoute.js"
import CoursesRoute from "./routes/CoursesRoute.js"



dotenv.config();

const app = express();


const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});

(async()=> {
    await db.sync();
})()
app.use(cors({origin:true,credentials: true}));

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
app.use(CoursesRoute);
app.use(SubCourseRoute);
app.use(PurchaseRoute);
app.use(ExamRoute);
app.use(AccomodationRoute);
app.use(TimeRoute);
app.use(PricesRoute);
app.use(LanguagesRoute);
app.use(PriceTypeRoute);
app.use(ClassTypeRoute);
app.use(StudentsCoursesRoute);
app.use(StudentsPurchasesRoute);
app.use(StudentsAccomodations);
app.use(StudentsExams);


// Static Images Folder
app.use('/Images', express.static('./Images'))


store.sync();
app.listen(process.env.APP_PORT, () => {
    console.log('Server up and running...');
})