function sendQuestion() {

    let question = document.getElementById("question").value;

    if (question.trim() === "") {
        alert("Please enter a question.");
        return;
    }

    let chat = document.getElementById("chat");

    // User Message
    chat.innerHTML += `
        <div class="user-message">
            ${question}
        </div>
    `;

    // AI Reply (Temporary)
    chat.innerHTML += `
        <div class="ai-message">
            🤖 AI: I received your question:<br><br>
            <b>${question}</b><br><br>
            (AI response will be added in the next step.)
        </div>
    `;

    chat.scrollTop = chat.scrollHeight;

    document.getElementById("question").value = "";
}
