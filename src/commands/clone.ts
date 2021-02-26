import { flags } from '@oclif/command';
import { OutputFlags, OutputArgs } from '@oclif/parser';
import Command from '../base';

export default class Clone extends Command {
    static description = 'describe the command here'

    static flags = {
        recursive: flags.boolean({ char: 'r', description: 'clone recursively including submodules' }),
        ...Command.flags,
    };

    static args = [
        { name: 'dest', description: 'destination directory to clone', default: './' },
        ...Command.args
    ];

    async run(): Promise<void> {
        this.parsedArgs
        this.parsedFlags
        console.log(this.parsedArgs, this.parsedFlags);
    }
}