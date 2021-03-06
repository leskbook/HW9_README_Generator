//Import inquirer and node modules
const { prompt } = require('inquirer');
const { writeFile } = require('fs');
const { promisify } = require('util');

//Import questions 
const questions = require('./lib/questions')

// Import template
const generateREADME = require('./lib/template')


// Write File
const writeFileAsync = promisify(writeFile);




// Begin
console.log('Create a professional GitHub README');

//Prompt questions
function promptUser() {
    return prompt(questions);
}


async function init() {
    try {
        const answers = await promptUser();

        console.log(JSON.stringify(answers, null, '\t'));

        const readme = generateREADME(answers);

        await writeFileAsync('README.md', readme);

        console.log('Successfully gererated README.md !');
    } catch (err) {
        console.log(err);
    }
}

init();