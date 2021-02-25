import Help from '@oclif/plugin-help';
import { Command } from '@oclif/config';
import CommandHelp from './command';

export default class MyHelpClass extends Help {

    formatCommand(command: Command): string {
        const help = new CommandHelp(command, this.config, this.opts)
        return help.generate()
    }
}