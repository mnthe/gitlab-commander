import { flags } from '@oclif/command';
import Command from '../base';

export default class Clone extends Command {
    static description = 'Clone GitLab projects that fit the glob pattern'

    static flags = {
        recursive: flags.boolean({ char: 'r', description: 'clone recursively including submodules' }),
        ...Command.flags,
    };

    static args = [
        { name: 'dest', description: 'destination directory to clone', default: './' },
        ...Command.args
    ];

    async run(): Promise<void> {

    }
}