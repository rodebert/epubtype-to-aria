// Mappings table (epub → role)
// Since querySelectorAll can’t be used with XHTML attributes,
// we create an array in which we’ll push elements with an epub:type attribute

module.exports = {
	'abstract': 'doc-abstract',
	'acknowledgments': 'doc-acknowledgments',
	'afterword': 'doc-afterword',
	'appendix': 'doc-appendix',
	'biblioentry': 'doc-biblioentry',
	'bibliography': 'doc-bibliography',
	'biblioref': 'doc-biblioref',
	'chapter': 'doc-chapter',
	'colophon': 'doc-colophon',
	'conclusion': 'doc-conclusion',
	'cover': 'doc-cover',
	'credit': 'doc-credit',
	'credits': 'doc-credits',
	'dedication': 'doc-dedication',
	'endnote': 'doc-endnote',
	'endnotes': 'doc-endnotes',
	'epigraph': 'doc-epigraph',
	'epilogue': 'doc-epilogue',
	'errata': 'doc-errata',
	'figure': 'figure',
	'footnote': 'doc-footnote',
	'foreword': 'doc-foreword',
	'glossary': 'doc-glossary',
	'glossdef': 'definition',
	'glossref': 'doc-glossref',
	'glossterm': 'term',
	'index': 'doc-index',
	'introduction': 'doc-introduction',
	'landmarks': 'directory',
	'list': 'list',
	'list-item': 'listitem',
	'noteref': 'doc-noteref',
	'notice': 'doc-notice',
	'pagebreak': 'doc-pagebreak',
	'page-list': 'doc-pagelist',
	'part': 'doc-part',
	'preface': 'doc-preface',
	'prologue': 'doc-prologue',
	'pullquote': 'doc-pullquote',
	'qna': 'doc-qna',
	'referrer': 'doc-backlink',
	'subtitle': 'doc-subtitle',
	'table': 'table',
	'table-row': 'row',
	'table-cell': 'cell',
	'tip': 'doc-tip',
	'toc': 'doc-toc',
};
