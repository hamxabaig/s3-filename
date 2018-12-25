'use strict';
const stringHelper = require('string');
const ow = require('ow');

module.exports = (filename, options = {}) => {
	ow(filename, ow.string);
	if (options.separator) {
		ow(options.separator, ow.string.matches(/[0-9a-zA-Z!_\\.\\*'\\(\\)\\-]/g));
	}

	const defaults = {
		separator: '-'
	};
	options = Object.assign(defaults, options);

	let saneFileName = stringHelper(filename).latinise().s.toLowerCase();
	saneFileName = saneFileName.replace(/[^0-9a-zA-Z! _\\.\\*'\\(\\)\\-]/g, '');

	return stringHelper(saneFileName).collapseWhitespace().replaceAll(' ', options.separator).s;
};

