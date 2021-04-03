import { appendFileSync, writeFileSync } from 'fs';

const file = './.log'

export function cls() {
	writeFileSync(file, '')
}

export function log(o: any) {
	const time = new Date().toString().split(' ')[4]
	const txt = JSON.stringify(o, null, '\t')
	appendFileSync(file, `[${time}]\n\n${txt}\n\n`)
}