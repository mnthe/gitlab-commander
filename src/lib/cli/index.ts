import { asTree } from 'treeify'
import { Options, Preset, SingleBar } from 'cli-progress'

export const cli = {
    tree: asTree,
    progress: (opt?: Options, preset?: Preset) => new SingleBar(opt || {}, preset)
}