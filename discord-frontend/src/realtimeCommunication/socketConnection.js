import io from "socket.io-client";

let socket = null;

export const connectWithSocketServer = () => {
	socket = io.connect("http://localhost:5000");

	socket.on("connect", () => {
		console.log("Successfully connected");
		console.log(socket.id);
	});
};
