function encryptText() {
    let inputText = document.getElementById('inputText').value;
    let shift = parseInt(document.getElementById('shift').value);
    let encryptedText = caesarCipher(inputText, shift);
    document.getElementById('outputText').value = encryptedText;
}

function decryptText() {
    let inputText = document.getElementById('inputText').value;
    let shift = parseInt(document.getElementById('shift').value);
    let decryptedText = caesarCipher(inputText, -shift);
    document.getElementById('outputText').value = decryptedText;
}

function caesarCipher(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            let code = char.charCodeAt(0);
            let base = code >= 65 && code <= 90 ? 65 : 97;
            return String.fromCharCode(((code - base + shift) % 26) + base);
        }
        return char;
    }).join('');
}
