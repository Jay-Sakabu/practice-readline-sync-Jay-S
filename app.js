const input = require('readline-sync');

let userName = '';
while(userName == false)
    {
        userName = input.question('Please enter your name: ');
    }
console.log("Hello, " + userName + "!");

let userAnswer = '';

while(userAnswer != 12)
{
    userAnswer = input.questionInt(`What would the integer value be for the following code?: \n
        console.log(5 + 7);
        \nYour Response: `);
        if(userAnswer == 12)
            {
                continue;
            }
        else
        {
            console.log("Not quite, try again.");
        }
}

while(userAnswer != 'number')
    {
        userAnswer = input.question(`What is the data type of the variable below? (No capital letters)
            let mysteryData = 7;
            \nYour Response: `);
            if(userAnswer == 'number')
                {
                    continue;
                }
            else
            {
                console.log("Not quite, try again.");
            }
    }

    while(userAnswer != 'string')
        {
            userAnswer = input.question(`What is the data type of the variable below? (No capital letters)
                let mysteryData = 'I am a mystery';
                \nYour Response: `);
                if(userAnswer == 'string')
                    {
                        continue;
                    }
                else
                {
                    console.log("Not quite, try again.");
                }
        }