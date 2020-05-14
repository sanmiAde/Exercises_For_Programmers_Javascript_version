const  readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readLine.question("What's your name?", name => {
    console.log(`Hey there ${name}`)
    readLine.close()
})