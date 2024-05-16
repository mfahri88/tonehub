function generateRandomString(length) {
    const characters = "ABCDEF0123456789";
    let randomString = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }
    return randomString;
}

function randomFileName() {
  return Math.floor(Math.random() * 9000) + 1000;
}
