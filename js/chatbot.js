let botResponses = {};

document.addEventListener("DOMContentLoaded", function () {
  let chatBody = document.getElementById("chat-body");
  fetch("responses.json")
    .then((response) => response.json())
    .then((data) => {
      botResponses = data;
      showBotMessage("Halo cantik, ada yang bisa aku bantu?");
    })
});

function toggleChat() {
    let chatbox = document.querySelector(".chatbox");
    chatbox.style.display = chatbox.style.display === "block" ? "none" : "block";
  }
  

  function sendMessage() {
    let inputField = document.getElementById("chat-input");
    let messageText = inputField.value.trim().toLowerCase();
    let chatBody = document.getElementById("chat-body");
  
    if (messageText !== "") {
      showUserMessage(messageText); // tampilkan pesan user
      inputField.value = ""; // kosongkan input
      chatBody.scrollTop = chatBody.scrollHeight; // scroll ke bawah
  
      setTimeout(() => {
        let botReply = getBotResponse(messageText); // dapatkan balasan bot
        showBotMessage(botReply); // tampilkan pesan bot
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 1000); // delay 1 detik biar berasa natural
    }
  }

  function getBotResponse(message) {
    let foundResponses = [];
    for (let keyword in botResponses) {
      if (message.includes(keyword)) {
        foundResponses.push(botResponses[keyword]);
      }
    }
  
    return foundResponses.length > 0
      ? foundResponses.join("\n")
      : "Maaf cantik, aku belum tahu jawabannya, karena cowok kamu yang ganteng belum mengajarkan saya hehe.";
  }


function showUserMessage(message) {
  let chatBody = document.getElementById("chat-body");
  let userMessage = document.createElement("div");
  userMessage.className = "message user-message";
  userMessage.textContent = message;
  chatBody.appendChild(userMessage);
}

function showBotMessage(message) {
  let chatBody = document.getElementById("chat-body");
  let botMessage = document.createElement("div");
  botMessage.className = "message bot-message";
  botMessage.textContent = message;
  chatBody.appendChild(botMessage);
}

document
  .getElementById("chat-input")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });