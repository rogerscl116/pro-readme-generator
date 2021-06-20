// create a function that returns a license badge based on which license is passed in
// if there is no license, return an empty string
function renderLicenseBadge(licenseInput) {
  if (!licenseInput) {
    return '';
  }
  return `<img src="https://img.shields.io/badge/License-${licenseInput}-orange" alt="license badge"/>`
}

// create a function that returns the license link
// if there is no license, return an empty string
function renderLicenseLink(licenseLink) {
  if(!licenseLink) {
    return ''
  }
  return `<img src="https://opensource.org/licenses/${licenseLink}">`
}

// create a function that returns the license section of README
// if there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return '';
  }
}

// create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Tests](#tests)
        
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, please contact me!

  - GitHub: https://github.com/${data.username}
  - Email: ${data.email} `;
}



module.exports = generateMarkdown;
