function generateMarkdown(data) {
    return `
# ${data.title}

  ${data.description}

## Installation
  ${data.installation}
`;
}

module.exports = generateMarkdown;