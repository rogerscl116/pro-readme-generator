// create a function that returns a license badge based on which license is passed in
// if there is no license, return an empty string
function renderLicenseBadge(licenseInput) {
  if (!licenseInput) {
    return '';
  } else if (licenseInput = 'MIT') {
  return `<img src="https://img.shields.io/badge/License-MIT-yellow alt="MIT license badge"/>`
  } else if (licenseInput = 'GPLv2') {
    return `<img src="https://img.shields.io/badge/License-GPLv2-blue alt="GPLv2 license badge"/>`
  } else if (licenseInput = 'Apache') {
    return `<img src="https://img.shields.io/badge/License-Apache%202.0-yellowgreen alt="Apache license badge"/>`
  } else if (liscenseInput = 'GPLv3') {
    return `<img src="https://img.shields.io/badge/License-GPLv3-blue alt="GPLv3 license badge"/>`
  } else if (licenseInput = 'ISC') {
    return `<img src="https://img.shields.io/badge/License-ISC-blue alt="ISC license badge"/>`
  }
}

// create a function that returns the license link
// if there is no license, return an empty string
function renderLicenseLink(licenseLink) {
  if(!licenseLink) {
    return ''
} else if (licenseLink = 'MIT') {
  return `<a href="https://opensource.org/licenses/MIT"></a>`
  } else if (licenseLink = 'GPLv2') {
    return `<a href="https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"></a>`
  } else if (licenseLink = 'Apache') {
    return `<a href="https://opensource.org/licenses/Apache-2.0"></a>`
  } else if (liscenseLink = 'GPLv3') {
    return `<a href="https://www.gnu.org/licenses/gpl-3.0"></a>`
  } else if (licenseLink = 'ISC') {
    return `<a href="https://opensource.org/licenses/ISC"></a>`
  }
}

// create a function that returns the license section of README
// if there is no license, return an empty string
// function renderLicenseSection(license) {
//   if(!license) {
//     return '';
//   }
//   return renderLicenseBadge(renderLicenseLink(license));
// }

// create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#credits)
  * [License](#license)
  * [Tests](#tests)
        
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
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
