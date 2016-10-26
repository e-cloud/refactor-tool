const fs = require('fs')
const path = require('path')
const lebab = require('lebab')
const babel = require('babel-core')
const esformatter = require('esformatter')
const esformmatterConfig = require('./esformatter.cfg')

module.exports = function (src) {
	const userTransformed = tranformCode(src)
	const es6ified = tranform5To6(userTransformed)
	return es6ified
}

function tranformCode(src) {
	return babel.transform(src, {
		plugins: [
			require('./short-circuit-to-if')
		],
		generatorOpts: {
			quotes: 'single'
		}
	}).code
}

function tranform5To6(src) {
	return lebab.transform(src, [
		'arrow',
		'for-of',
		'arg-rest',
		'arg-spread',
		'obj-method',
		'obj-shorthand',
		'commonjs',
		'multi-var',
		'let',
		'includes',
		'template',
		'default-param',
		'class'
	]).code
}

function format(src) {
	return esformatter.format(src, esformmatterConfig)
}
