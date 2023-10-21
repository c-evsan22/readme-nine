// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 


  ~
  *[Installation](#installation)
  *[Usage](#usage)
  *[contribution](#contribution)
  *[Credits](#credits)
  *[License](#license)
  #Installation
  ${data.installation}
  ##Usage
  ${data.usage}
  ##Contribution
  ${data.contribution}
  ##instructions
  ${data.instructions}
  ##Credits
  ${data.credit}
  ##License
  ${data.license}

  #Contact
  *Github :${data.git}
  *Linkdin :${data.linkdin}
  *E-mail: ${data.email} `;

};


module.exports = generateMarkdown;
