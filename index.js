const fs = require('fs')
const path = require('path')
const lebab = require('lebab')
const babel = require('babel-core')
const esformatter = require('esformatter')
const esformmatterConfig = require('./esformatter.cfg')

module.exports = function (src) {
	const userTransformed = tranformCode(src)
	const es6ified = tranform5To6(userTransformed)
	return format(es6ified)
}

function tranformCode(src) {
	return babel.transform(src, {
		plugins: [
			require('./short-circuit-to-if')
		]
	}).code
}

function tranform5To6(src) {
	return lebab.transform(src, [
		'for-of',
		'arg-spread',
		'obj-method',
		'obj-shorthand',
		'commonjs',
		'multi-var',
		'let',
		'template',
		'default-param'
	]).code
}

function format(src) {
	return esformatter.format(src, esformmatterConfig)
}
