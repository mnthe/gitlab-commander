import { Command, flags } from '@oclif/command';
import { } from 'micromatch';
import { Input, OutputArgs, OutputFlags } from '@oclif/parser';
import { GitLabProject } from './types';

export default abstract class BaseCommand extends Command {
    static flags = {
        address: flags.string({ char: 'a', description: 'address of the GitLab server (ENV: GITLAB_ADDRESS)', env: 'GITLAB_ADDRESS', default: 'htts://gitlab.com' }),
        token: flags.string({ char: 't', description: 'GitLab access token. (ENV: GITLAB_TOKEN)', env: 'GITLAB_TOKEN' }),
        include: flags.string({ char: 'i', description: 'comma delimited list of glob patterns of paths to projects or groups to include' }),
        exclude: flags.string({ char: 'e', description: 'comma delimited list of glob patterns of paths to projects or groups to exlude' }),
        help: flags.help({ char: 'h' })
    };

    static args = []

    protected parsedArgs?: OutputArgs<any>;
    protected parsedFlags?: OutputFlags<typeof BaseCommand.flags>;

    async init(): Promise<void> {
        const { args, flags } = this.parse(this.constructor as Input<typeof BaseCommand.flags>);
        this.parsedArgs = args;
        this.parsedFlags = flags;
    }

    protected getAllProjects(): GitLabProject[] {
        return []
    }
}