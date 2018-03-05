const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const epubTypeTransformer = require('../index');

const resolve = file => path.join(__dirname, file);

const testDocument = fs.readFileSync(resolve('./test.html'), 'utf-8');

describe('epub:type to aria roles should', () => {
	test('add correct aria rols', done => {
		const transformedHTML = epubTypeTransformer(testDocument);

		JSDOM.fromFile(resolve('./result.html')).then(dom => {
			expect(transformedHTML).toBe(dom.serialize());
			done();
		});
	});
});
