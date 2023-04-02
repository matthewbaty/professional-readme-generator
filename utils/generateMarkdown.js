// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (projectLicense === "MIT") {
    return "https://img.shields.io/badge/License-MIT-yellow.svg";
  } else if (projectLicense === "Apache 2.0") {
    return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
  } else if (projectLicense === "GPL 3.0") {
    return "https://img.shields.io/badge/License-GPLv3-blue.svg";
  } else if (projectLicense === "BSD 3") {
    return "https://img.shields.io/badge/license-BSD%203--Clause-blue.svg";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (projectLicense === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (projectLicense === "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (projectLicense === "GPL 3.0") {
    return "https://www.gnu.org/licenses/gpl-3.0.en.html";
  } else if (projectLicense === "BSD 3") {
    return "https://opensource.org/licenses/BSD-3-Clause";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

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
  const licenseBadge = renderLicenseBadge(projectLicense);
  const licenseLink = renderLicenseLink(projectLicense);
  return `
  <img alt="License: ${projectLicense}" src="${licenseBadge}"/><br/>
  ## Table of Contents
  * [Author](#personName)
  * [Project Title](#title)
  * [Project Description](#description)
  * [Installation Instructions](#installation)
  * [Usage Information](#guidelines)
  * [Contribution Guidelines](#projectContribution)
  * [Test Instructions](#projectTesting)
  * [License](#projectLicense)
  * [Support](#projectEmail)
`;
}

module.exports = generateMarkdown;
