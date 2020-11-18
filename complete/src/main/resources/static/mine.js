
// const server = "ws://localhost:8080/chat";
const server = "http://localhost:8080/chat";

const socket = new SockJS(server);
const stompClient = Stomp.over(socket);

stompClient.connect({},(frame) => {
    stompClient.subscribe("/topic/questions", (msg) => {
        console.log("Received : " + msg);
    });
    stompClient.send("Hello server!");
}, (err) => {
    console.log("Stomp protocol error" + err);
});

function sendMessage() {
    console.log("Send message : " + $("message").val());
    stompClient.send("/app/questions", {}, JSON.stringify({'name': $("#message").val()}));
}

function showGreeting(message) {
    $("#greetings").append("<tr><td>" + message + "</td></tr>");
}
$(function () {
    $("#msgForm").on('submit', (e) => {
        e.preventDefault();
    });
    $('#send').click(()=> {
        sendMessage();
    })
})
