const input = require('readline-sync');

let userName = '';
while(userName == false)
    {
        userName = input.question('Please enter your name: ');
    }
console.log("Hello, " + userName + "!");

let firstQuestion = '';
let secondQuestion = '';
let thirdQuestion = '';
let fourthQuestion = '';
let fifthQuestion = '';

while(firstQuestion != 12)
{
    firstQuestion = input.questionInt(`What would the integer value be for the following code?: \n
        console.log(5 + 7);
        \nYour Response: `);
        if(firstQuestion == 12)
            {
                continue;
            }
        else
        {
            console.log("You answered: " + firstQuestion + ", which is incorrect, try again.");
        }
}

while(secondQuestion != 'number')
    {
        secondQuestion = input.question(`What is the data type of the variable below? (No capital letters)
            let mysteryData = 7;
            \nYour Response: `);
            if(secondQuestion == 'number')
                {
                    continue;
                }
            else
            {
                console.log("You answered: " + secondQuestion + ", which is incorrect, try again.");
            }
    }

    while(thirdQuestion != 'string')
        {
            thirdQuestion = input.question(`What is the data type of the variable below? (No capital letters)
                let mysteryData = 'I am a mystery';
                \nYour Response: `);
                if(thirdQuestion == 'string')
                    {
                        continue;
                    }
                else
                {
                    console.log("You answered: " + thirdQuestion + ", which is incorrect, try again.");
                }
        }

    while(fourthQuestion != 'object')
    {
        fourthQuestion = input.question(`What is the data type of the variable below? (No capital letters)
            const person = {firstName:"John", lastName:"Doe"};
            \nYour Response: `);
            if(fourthQuestion == 'object')
            {
                continue;
            }
            else
            {
                console.log("You answered: " + fourthQuestion + ", which is incorrect, try again.");
            }
    }

    while(fifthQuestion != 'array')
    {
        fifthQuestion = input.question(`What is the data type of the variable below? (No capital letters)
            const fruits = ["pineapple", "cherry", "apples", "mangos"];
            \nYour Response: `);
            if(fifthQuestion == 'array')
            {
                continue;
            }
            else
            {
                console.log("You answered: " + fifthQuestion + ", which is incorrect, try again.");
            }
    }
    console.log(`Your answers:
        1. ${firstQuestion}
        2. ${secondQuestion}
        3. ${thirdQuestion}
        4. ${fourthQuestion}
        5. ${fifthQuestion}
        `);