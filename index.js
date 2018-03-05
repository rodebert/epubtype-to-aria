const { JSDOM } = require('jsdom');
const mappings = require('./mappings');

const getAllElements = doc => Array.from(doc.querySelectorAll('*'));

module.exports = html => {
	const dom = new JSDOM(html);
	const { document } = (dom).window;

	// Get all the elements with epub:type
	const epubTypes = getAllElements(document)
		// Check if the current element has an epub:type attribute and if element hasn’t a role attribute
		.filter(el => el.hasAttribute('epub:type') && !el.hasAttribute('role'));

	epubTypes.forEach(element => {
		const roles = element.getAttribute('epub:type') // Get the value for epub:type - in tagsoup HTML, should be epub\\\:type
			.split(' ', 2)// Split the string (we only check 2 = 1 space separator)
			.map(inflection => mappings[inflection]) // check if the value (string) is in the mappings table
			.filter(el => !!el);

		element.setAttribute('role', roles.shift()); // first element since role can only have one value
	});

	return dom.serialize();
};
