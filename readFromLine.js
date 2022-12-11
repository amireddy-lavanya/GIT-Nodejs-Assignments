const readline = require("readline");

const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please Enter Your Name" , (ans)=>
{
    console.log("Hello" , ans);
    rl.close();
})


