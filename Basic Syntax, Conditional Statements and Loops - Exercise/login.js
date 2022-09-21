function login(input) {
    let index = 0;
    let username = String(input[index]);
    index++;
    let password = ""

    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i]
    }
    let wrongCounter = 0;

    for (let j = 0; j < input.length; j++) {
        let command = input[index];
        index++;
        
        if (command == password) {
            console.log(`User ${username} logged in.`);
            break;
        }
        if (command !== password) {
            wrongCounter++
            if (wrongCounter > 3) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log('Incorrect password. Try again.');
        }  
    }
}
login(['momo','omom'])