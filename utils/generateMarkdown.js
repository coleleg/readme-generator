// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
 
  if (license === 'Apache 2.0') {
   return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

  }
  if (license === 'Creative Commons') {
   return '[![License](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
  }
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  
  }
  if (license === 'There is No License for this Project') {
    return '';
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'There is No License for this Project') {
    return '';
  } 
  else {
    return `
    ${license}`

  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  # Table of Contents
  * [Description](#description)
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [License](#license)
  
  * [Questions](#questions)


  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Testing
  ${data.testing}

  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}

  ## Contact
  [github.com/${data.username}](https://github.com/${data.username})
  
  ${data.email}

  `;
}

module.exports = generateMarkdown;
