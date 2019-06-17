import wd from 'wd';
import pkg from './package.json';

const { devices } = pkg.e2e;

if (!process.env.E2E_DEVICE) {
  throw new Error('E2E_DEVICE environment variable is not defined');
}

if (!devices[process.env.E2E_DEVICE]) {
  throw new Error(
    `No e2e device configuration found in package.json for E2E_DEVICE environment ${process.env.E2E_DEVICE}`
  );
}

const device = devices[process.env.E2E_DEVICE];

const config = {
  ...device,
  app: `${__dirname}${device.app}`
};

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const driver = wd.promiseChainRemote('localhost', PORT);

export { config, driver };
