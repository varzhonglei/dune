const inquirer = require('inquirer');

// const options = [
//   { name: 'Option A',  },
//   { name: 'Option B',  },
//   { name: 'Option C',  },
// ];
export const MakeSelect = ({
  message,
  options,
}: {
  message: string
  options: { name: string }[]
}) => {
  // return function askQuestion(question) {
  //   return new Promise((resolve, reject) => {
  //     inquirer
  //     .prompt([
  //       {
  //         type: 'list',
  //         name: 'selectedOption',
  //         message,
  //         choices: options.map((option) => option.name),
  //       },
  //     ])
  //     .then((answers) => {
  //       const selectedOption = options.find((option) => option.name === answers.selectedOption);
  //       resolve(answers.selectedOption)
  //     });
  //   });
  // }
}

  
