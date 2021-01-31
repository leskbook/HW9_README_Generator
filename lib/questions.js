const questions = [{
        //Authors Name
        type: 'input',
        message: 'Enter your first and last name:',
        name: 'authorName',
        validate: function(name) {
            let pass = name.match(/^[a-zA-Z]+ [a-zA-Z]+$/g);
            if (pass) {
                return true;
            }

            return 'Please enter a valid FULL name with space between FIRST and LAST.';
        },
    },
    {
        //Authors Email
        type: 'input',
        message: 'Enter your email:',
        name: 'email',
        validate: function(email) {
            let pass = email.match(/\S+@\S+\.\S+/g);
            if (pass) {
                return true;
            }

            return 'Please enter a valid email someone@domain.com.';
        },
    },
    {
        //Github Username
        type: 'input',
        message: 'Enter your github username:',
        name: 'username',
        validate: function(username) {
            if (username) {
                return true;
            }

            return 'Enter Github name, check spelling!';
        },
    },
    {
        // Github REPO name
        type: 'input',
        message: 'Enter your Project Github Repo name (Input should = Repo name on Github):',
        name: 'repoName',
        validate: function(reponame) {
            if (reponame) {
                return true;
            }

            return 'It is required to enter your Github Project Repo name to continue.';
        },
    },
    {
        //Check on additional project links
        type: 'confirm',
        name: 'isLinks',
        message: 'Would you like to add more project link(s)?',
        default: false,
    },
    {
        // Get addtional project links        
        type: 'input',
        name: 'projectLinks',
        message: 'Make sure to use the entire link (http or https) with a comma to separate the links',
        when: function(answers) {
            return answers.isLinks !== false;
        },
        validate: function(projectLinks) {
            for (let i = 0; i < projectLinks.split(',').length; i++) {
                let pass = projectLinks.split(',')[i].trim().match(/^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$/g);

                if (pass) {
                    return true;
                }

                return 'Double check your link! (Use entire link, including the http or https';
            }
        },
    },
    {
        //  Project Title
        type: 'input',
        message: 'Project Title?',
        name: 'title',
        validate: function(title) {
            if (title) {
                return true;
            }

            return 'A professional README has a project title.';
        },
    },
    {
        //Check on Screenshots and/or Demo
        type: 'confirm',
        name: 'screenshots',
        message: 'Would you like to add screenshots or a demo to your README?',
        default: false,
    },
    {
        // Get image path and/or URL
        type: 'input',
        name: 'imageURL',
        message: 'Enter the image path or urls of screenshots or demo, using a comma to separate each link',
        when: function(answers) {
            return answers.screenshots !== false;
        },
        validate: function(imageURL) {
            if (imageURL) {
                return true;
            }

            return 'Provide the image paths or urls of screenshots or demo. ';
        },
    },
    {
        //Project objective
        type: 'input',
        message: 'What is the project objective?',
        name: 'objective',
        validate: function(objective) {
            if (objective) {
                return true;
            }

            return 'A professional README includes specific project objectives';
        },
    },
    {
        // Project user-story
        type: 'input',
        message: 'Provide the User Story for your project',
        name: 'userStory',
        validate: function(userstory) {
            if (userstory) {
                return true;
            }

            return 'A README includes a user story to identify expectations';
        },
    },
    {
        //Technologies used
        type: 'input',
        message: 'List the technologies used for the Project, using a comma to separate each technology.',
        name: 'technologies',
        validate: function(tech) {
            if (tech) {
                return true;
            }

            return 'A professional README lists technologies used for the Project.';
        },
    },
    {
        //Installation
        type: 'input',
        message: 'What are the necessary steps to install and deploy your application',
        name: 'installation',
        validate: function(install) {
            if (install) {
                return true;
            }

            return 'A professional README provides steps on how to install the project.';
        },
    },
    {
        // How to use
        type: 'input',
        message: 'Steps for using your application, be specific',
        name: 'usage',
        validate: function(use) {
            if (use) {
                return true;
            }

            return 'A professional README provides instructions on how to use the project.';
        },
    },
    {
        //Credits / Reference
        type: 'input',
        message: 'Enter contributors you would like to give credit to',
        name: 'credits',
        validate: function(credits) {
            if (credits) {
                return true;
            }

            return 'Are you sure?';
        },
    },
    {
        // Tests
        type: 'input',
        message: 'How to test your project?',
        name: 'test',
        default: 'npm test'
    },
    {
        // License
        type: 'list',
        message: 'Select a license for your project.',
        name: 'license',
        choices: [{
                name: 'MIT',
                value: 'mit',
            },
            {
                name: 'NONE',
            },
            {
                name: 'GNU GPLv3',
                value: 'gpl-3.0',
            },
            {
                name: 'GNU AGPLv3',
                value: 'agpl-3.0',
            },
            {
                name: 'GNU LGPLv3',
                value: 'lgpl-3.0',
            },
            {
                name: 'APACHE 2.0',
                value: 'apache-2.0',
            },
            {
                name: 'Mozilla Public 2.0',
                value: 'mpl-2.0',
            },
            {
                name: 'The Unlicense',
                value: 'unlicense',
            },
            {
                name: 'Boost Software 1.0 ',
                value: 'bsl-1.0',
            },
        ],
    },
];

module.exports = questions;