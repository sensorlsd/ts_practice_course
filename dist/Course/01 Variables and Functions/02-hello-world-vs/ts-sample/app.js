class Message {
    constructor(text) {
        this.messageText = text;
    }
    showAlert() {
        alert(this.messageText);
    }
}
let test = new Message("Hello world");
test.showAlert();
//# sourceMappingURL=app.js.map