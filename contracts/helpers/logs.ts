import { bold } from 'kleur'
import { render } from 'prettyjson'
import { PRETTYJSON } from './constants'
function line(size: number): string {
    return '-'.repeat(size).padEnd(size, '-')
}

function logParamaters({
    title = 'Parameters',
    object = {},
}: {
    title: string
    object: any
}) {
    console.log(bold(title + ':\n'))
    console.log(line(30))
    console.log(render(object, PRETTYJSON))
    console.log(line(30))
}

export { line, logParamaters }
