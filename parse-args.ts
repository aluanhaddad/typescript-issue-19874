import minimist = require('minimist');
import process = require('process');

export default function parseArgs(): minimist.ParsedArgs {
  return minimist(process.argv.slice(2));
}