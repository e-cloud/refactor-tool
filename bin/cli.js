#!/usr/bin/env node
"use strict";

const fs = require('fs')
const globby = require('globby')
const program = require('commander')
const pkgInfo = require('../package.json')
const refactor = require('../')

program.version(pkgInfo.version)
    .option('-t, --type [type]', 'ts or es')
	.arguments('<pattern...>')
	.action(function (pattern) {
		doRefactor(pattern, program.type)
	})

program.parse(process.argv);

function doRefactor(pattern, type) {
	globby(pattern, {
		absolute: true
	})
		.then(function (paths) {
			if (paths.length) {
				paths.forEach(path => {
					fs.readFile(path, 'utf8', (err, data) => {
						if (err) throw err
						const newData = refactor(data)
						fs.writeFile(path.replace(/\.js$/, `.${type}`), newData, 'utf8', (err) => {
							if (err) throw err
							console.log(`write ${path}`)
						})
					})
				})
			}
		})
}
