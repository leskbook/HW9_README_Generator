function generateMarkdown(userResponses, userInfo) {

    //Table of Contents 
    let draftToC = `## Table of Contents`;

    if (userResponses.installation !== '') { draftToC += `
  * [Installation](#installation)` };

    if (userResponses.usage !== '') { draftToC += `
  * [Usage](#usage)` };

    if (userResponses.contributing !== '') { draftToC += `
  * [Contributing](#contributing)` };

    if (userResponses.tests !== '') { draftToC += `
  * [Tests](#tests)` };


    // Generate markdown

    let draftMarkdown =
        `# ${userResponses.title}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).
  
  
  ## Description 
  
  
  
  ${userResponses.description}
  `

    // Add table of contents 
    draftMarkdown += draftToC;

    // Add License section 
    draftMarkdown += `
  * [License](#license)`;


    // Optional installations
    if (userResponses.installation !== '') {

        draftMarkdown +=
            `
  
  ## Installation
  
  
  
  ${userResponses.installation}`
    };


    // Optional Usage section
    if (userResponses.usage !== '') {

        draftMarkdown +=

            `
  
  ## Usage 
  
  
  ${userResponses.usage}`
    };



    if (userResponses.contributing !== '') {
        `
  
  ## Contributing
  
    
  ${userResponses.contributing}`
    };


    // Tests
    if (userResponses.tests !== '') {

        draftMarkdown +=
            `
  
  ## Tests
  
    
  ${userResponses.tests}`
    };


    // License
    draftMarkdown +=
        `
  
  ## License
  
  ${userResponses.license}
  `;


    // Questions 
    let draftDev =
        `
  ---
  
  ## Questions?
  
  ![Developer Profile Picture](${userInfo.avatar_url}) 
  
  Questions?:
 
  GitHub: [@${userInfo.login}](${userInfo.url})
  `;

    // If GitHub email is not null, add to Developer section
    if (userInfo.email !== null) {

        draftDev +=
            `
  Email: ${userInfo.email}
  `
    };

    // Add developer section to markdown
    draftMarkdown += draftDev;

    // Return markdown
    return draftMarkdown;

}

module.exports = generateMarkdown;