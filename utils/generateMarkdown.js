// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "https://img.shields.io/badge/License-MIT-yellow.svg";
  } else if (license === "Apache 2.0") {
    return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
  } else if (license === "GPL 3.0") {
    return "https://img.shields.io/badge/License-GPLv3-blue.svg";
  } else if (license === "BSD 3") {
    return "https://img.shields.io/badge/license-BSD%203--Clause-blue.svg";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "GPL 3.0") {
    return "https://www.gnu.org/licenses/gpl-3.0.en.html";
  } else if (license === "BSD 3") {
    return "https://opensource.org/licenses/BSD-3-Clause";
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {
    email,
    personName,
    username,
    title,
    description,
    installation,
    guidelines,
    contribute,
    testing,
    license
  } = data
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  return `
  <img alt="License: ${license}" src="${licenseBadge}"/><br/>
  ## Table of Contents
  * [Author](#application-creator)
  * [Project Title](#project-title)
  * [Description](#description)
  * [Installation Instructions](#installation-instructions)
  * [Usage Information](#usage-information)
  * [Contribution Guidelines](#how-to-contribute)
  * [Testing Instructions](#testing-instructions)
  * [License](#license)
  * [Support](#questions)
  
  # Application Creator
  ${personName}

  # Project Title
  ${title}

  ## Description
  ${description}

  ## Installation Instructions
  ${installation}

  ## Usage Information
  ${guidelines}

  ## How to Contribute
  ${contribute}

  ## Testing Instructions
  ${testing}

  ## License 
  <img alt="License: ${license}" src="${licenseBadge}"></br>
  This application is licensed under the terms of the ${license} license. Click <a href="${licenseLink}">here</a> to view full license text.

  ## Questions
  If you have questions or would like to provide feedback, you can find my GitHub at <a href="https://github.com/${username}">GitHub</a> or via email at <a href="mailto:${email}">Email</a>
`;
}

module.exports = generateMarkdown;
