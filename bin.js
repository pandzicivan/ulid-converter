#!/usr/bin/env node

const { Ulid } = require('id128');
const chalk = require("chalk");
const minimist = require("minimist");

const argv = minimist(process.argv.slice(2));
const inputs = argv["_"];

if (!inputs || !inputs.length) {
  console.error(chalk.red(`Input is missing.`))
  console.info(chalk.yellow(`Try command 'npx ulid-converter 01ARZ3NDEKTSV4RRFFQ69G5FAV 01ARZ3NDEKTSV4RRFFQ69G5FAA'`))
  process.exit(-1);
}

inputs.forEach((inputValue) => {
  if (Ulid.isCanonical(inputValue)) {
    const raw = Ulid.fromCanonical(inputValue).toRaw();
    console.log(chalk.green(`Converting ${inputValue} from canonical to hex: ${raw}`));
  } else if (Ulid.isRaw(inputValue)) {
    const canonical = Ulid.fromRaw(inputValue).toCanonical();
    console.log(chalk.green(`Converting ${inputValue} from hex to canonical: ${canonical}`));
  } else {
    console.error(chalk.red(`Passed value "${inputValue}" in neither raw, nor canonical. Exiting process...`))
    process.exit(-1);
  }
})

process.exit();