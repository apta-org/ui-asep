process.env.NODE_ENV = 'test';

const Launcher = require('webdriverio').Launcher;
const fs = require('fs');

// TODO: require both workstream and platform (ci vs local)???

// TODO: Probably should require the workstream since they can conflict -- or we only use one and overwrite irrelevant tasks
const defaultSpecFiles = [
  // './test-automation/features/**/signature.feature',
  './test-automation/strangulation-features/**/item-alpha-prompt-check-id*unacceptable.feature'
];

const flags = require('./flag-processor')(process.argv);

console.log('Test automation input flags', flags);
// specify flags via command line:
// with npm run:
//    npm run test-automation -- --spec=./test-automation/strangulation-features/scan-barcodes.feature
// with node:
//    node scripts/test-automation.js --spec=./test-automation/strangulation-features/scan-barcodes.feature

let opts = {
  specs: defaultSpecFiles
};
if (flags.baseUrl) {
  opts.baseUrl = flags.baseUrl;
}
const fileName = flags.spec;
if (fileName) {
  try {
    const stats = fs.statSync(fileName);
    if (stats.isFile()) {
      opts = {
        specs: [fileName]
      };
    }
  } catch (err) {
    console.error(`Spec file '${fileName}' does not exist or is not a file`);
    process.exit(1);
  }
}

console.log('Executing test automation with opts:', opts);
const configFile = './test-automation/wdio.conf.js';
console.log('Loading additional configuration from', configFile);
const wdio = new Launcher(configFile, opts);

const handleError = (error) => {
  console.error('Launcher failed while running the test suite', error.stacktrace);
};
const handleSuccess = (code) => {
  const status = code === 0 ? 'SUCCESS' : 'FAILED';
  const message = `Test suite ${fileName}: ${status}`;
  console.log(`Test suite run is finished, ${message}`);
  process.exit(code);
};

wdio.run().then(handleSuccess, handleError).catch(handleError);
