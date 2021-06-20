// create a function that returns a license badge based on which license is passed in
// if there is no license, return an empty string
function renderLicenseBadge(licenseInput) {
  if (!licenseInput) {
    return '';
  } else if (licenseInput === 'MIT') {
  return `<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow" alt="MIT license badge"/></a>`
  } else if (licenseInput === 'GPLv2') {
    return `<a href="https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"><img src="https://img.shields.io/badge/License-GPLv2-blue" alt="GPLv2 license badge"/></a>`
  } else if (licenseInput === 'Apache') {
    return `<a href="https://opensource.org/licenses/Apache-2.0"><img src="https://img.shields.io/badge/License-Apache%202.0-yellowgreen" alt="Apache license badge"/></a>`
  } else if (licenseInput === 'GPLv3') {
    return `<a href="https://www.gnu.org/licenses/gpl-3.0"><img src="https://img.shields.io/badge/License-GPLv3-blue" alt="GPLv3 license badge"/></a>`
  } else if (licenseInput === 'ISC') {
    return `<a href="https://opensource.org/licenses/ISC"><img src="https://img.shields.io/badge/License-ISC-blue" alt="ISC license badge"/></a>`
  }
}

// create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## License
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
        
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.credits}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, please contact me!

  - GitHub: https://github.com/${data.username}
  - Email: ${data.email} `;
}

module.exports = generateMarkdown;
