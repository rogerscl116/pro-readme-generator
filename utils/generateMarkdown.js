// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license;
  let yourLicense = '';
  if (licenseType === 'MIT') {
    yourLicence = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'GPLv2') {
    yourLicense = `![License: GPLv2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  } else if (licenseType === 'Apache') {
    yourLicense = `![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![License: GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'ISC') {
    yourLicense = `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`
  }
  if (!license) {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
  ${data.license}
  ## Tests
  ${data.tests}

  ## Questions

  If you have any questions, please contact me!

  - GitHub: https://github.com/${data.username}
  - Email: ${data.email} `;
}



module.exports = generateMarkdown;
