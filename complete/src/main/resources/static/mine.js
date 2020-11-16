
const server = "ws://localhost:8080/chat";

const socket = new WebSocket(server);

socket.onopen = (event) => {
    console.log("Connection opened");
    socket.send("Hello server!");
}
socket.onmessage = (event) => {
 console.log(event.data);
}
// socket.onclose = (event) => {
//     console.log("Connection closed")
// }
$(document).ready(()=> {
   console.log("Hello dom");
});
