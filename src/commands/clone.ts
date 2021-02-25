import { OutputFlags } from '@oclif/parser';
import BaseCommand from '../base';

export default class Clone extends BaseCommand {
    static description = 'describe the command here'

    static flags = {
        ...BaseCommand.flags,
    };

    static args = [
        ...BaseCommand.args,
    ];

    async run(): Promise<void> {
        const flags = this.parsedFlags as OutputFlags<typeof Clone.flags>;
        const args = this.parsedArgs!;
        console.log(flags, args);
    }
}