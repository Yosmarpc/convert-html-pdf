import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from './router/index.js'

const app = express();

const PORT =  5001;
app.set("PORT", PORT);
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router);


app.listen(app.get("PORT"));
console.log("Listem PORT: ", app.get("PORT"));

export default app;
