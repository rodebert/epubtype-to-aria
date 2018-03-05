# epub:type to aria-role transformator

A script to append aria doc roles based on epub:type.

Based on [gist](https://gist.github.com/rodebert/81837a2676cf2c04819a582c3eb49c13)
## Installation

`npm install epubtype-to-aria`

## Usage

```
const epubTypeTransformer = require('epubtype-to-aria');
const html = fs.readFileSync('path/to/index.html', 'utf-8');

fs.writeFileSync('path/to/index.html', epubTypeTransformer(html), 'utf8');

```
