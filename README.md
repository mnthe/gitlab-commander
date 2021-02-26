gitlab-commander
================

Apply gitlab actions for multiple projects

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/gitlab-commander.svg)](https://npmjs.org/package/gitlab-commander)
[![Downloads/week](https://img.shields.io/npm/dw/gitlab-commander.svg)](https://npmjs.org/package/gitlab-commander)
[![License](https://img.shields.io/npm/l/gitlab-commander.svg)](https://github.com/mnthe/gitlab-commander/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g gitlab-commander
$ gitlab-commander COMMAND
running command...
$ gitlab-commander (-v|--version|version)
gitlab-commander/0.0.1 linux-x64 node-v14.15.5
$ gitlab-commander --help [COMMAND]
USAGE
  $ gitlab-commander COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`gitlab-commander clone [DEST]`](#gitlab-commander-clone-dest)
* [`gitlab-commander help [COMMAND]`](#gitlab-commander-help-command)

## `gitlab-commander clone [DEST]`

Clone GitLab projects that fit the glob pattern

```
USAGE
  $ gitlab-commander clone [DEST]

ARGUMENTS
  DEST  destination directory to clone [default: ./]

OPTIONS
  -r, --recursive        clone recursively including submodules
  -a, --address=address  address of the GitLab server (ENV: GITLAB_ADDRESS) [default: htts://gitlab.com]
  -t, --token=token      GitLab access token (ENV: GITLAB_TOKEN)
  -i, --include=include  comma delimited list of glob patterns of paths to projects or groups to include
  -e, --exclude=exclude  comma delimited list of glob patterns of paths to projects or groups to exlude
  -h, --help             show CLI help
```

_See code: [src/commands/clone.ts](https://github.com/mnthe/gitlab-commander/blob/v0.0.1/src/commands/clone.ts)_

## `gitlab-commander help [COMMAND]`

display help for gitlab-commander

```
USAGE
  $ gitlab-commander help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
