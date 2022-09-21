const express = require("express");
const http = require("http");
const cors = require("cors");
const connectDB = require("./db/connect");
require("dotenv").config();

const socketServer = require("./socketServer");
const authRouter = require("./routes/authRoutes");

port = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(cors());

//routes
app.use("/api/auth", authRouter);

const server = http.createServer(app);
console.log(server);
socketServer.registerSocketServer(server);

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, () => {
			console.log(`Server is listening on port ${port}`);
		});
	} catch (error) {
		console.log("Database connection failed. Server not started");
		console.log(error);
	}
};

start();
