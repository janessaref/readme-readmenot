function generateMarkdown(data) {
    return `# ${data.title}
  ${data.badge}

  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Authors](#authors)
  * [Questions](#questions)
  
  ## Installation
  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  \`\`\`
  ${data.tests}
  \`\`\`

  ## Author
  * Name: ${data.fullname}
  * GitHub Username: ${data.username}
  * Email: ${data.email}
  \n ![GitHub Profile Picture](https://github.com/${data.username}.png)
  
  ## Questions
  If you have any questions or issues about the respository, you can reach me at janessarefong@gmail.com. You could also check out my GitHub page at [janessaref](https://github.com/janessaref). 
`;
};

module.exports = generateMarkdown;