const fs = require('fs');

const dir = './commands/';

module.exports = (prefix) => {
  console.log('dentro do command', prefix);
  const commands = {};

  const scripts = fs.readdirSync(dir);
  scripts.forEach((script) => {
    commands[prefix + script.split('.')[0]] = require(`../${dir}${script}`);
  });

  console.log('=>', commands);
  return commands;
};
