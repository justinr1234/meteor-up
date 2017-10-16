import * as _commands from './commands';

export const description = 'Setup and manage docker';
export const commands = _commands;

export const hooks = {
  'post.default.status'(api) {
    api.runCommand('docker.status');
  }
};
