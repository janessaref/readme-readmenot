function generateMarkdown(data) {
    return `# ${data.title}

  ## Description
  ${data.description}
  
  ## Table of Contents
  ${data.tableofcontents}
  
  ## Installation
  \`\`\`${data.installation}\`\`\`

  ## Usage
  ${data.usage}

  ## License
  This project is under the ${data.license} License

  ## Contributing
  ${data.contributing}

  ## Tests
  \`\`\`${data.tests}\`\`\`

  ## Author
  * Name: ${data.fullname}
  * GitHub Username: ${data.username}
  * Email: ${data.email}
  ![GitHub Picture](https://github.com/${data.username}.png)
  

  ## Questions
  If you have any questions about the respository, you can reach me at janessarefong@gmail.com. You could also check out my GitHub page at janessaref. 
`;
}

module.exports = generateMarkdown;