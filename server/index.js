import express from "express";
import cors from "cors";
import FileUpload from "express-fileupload"
import UserRoute from "./routes/userroute.js"
import ProductRoute from"./routes/ProductRoute.js"
const app = express();
app.use(cors());
app.use(express.json());

// app.get("/api", (req, res) => {
//     // res.json({"users": ["user One"]})
// }

// )
app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(UserRoute);
app.use(ProductRoute);

app.listen(5000, () => console.log('server up and running'));