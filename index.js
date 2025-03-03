import chalk from "chalk";

const colleagues = [
    chalk.redBright('Romi'),
    chalk.bgBlack('Elaine'),
    chalk.blueBright('Patrick'),
    chalk.bgMagentaBright('Anne')
];

colleagues.forEach(name => console.log(name));
