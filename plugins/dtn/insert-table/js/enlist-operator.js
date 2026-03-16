/*\
title: $:/plugins/.dtn/insert-table/enlist-operator.js
type: application/javascript
module-type: filteroperator

Filter operator 'inserttableenlist' used by the 'insert-table' plugin that acts like the core operator 'enlist' except that it does not remove duplicate list items

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Export our filter function
*/
exports.inserttableenlist = function(source,operator,options) {
	var list = $tw.utils.parseStringArray(operator.operand,true);
	if(operator.prefix === "!") {
		var results = [];
		source(function(tiddler,title) {
			if(list.indexOf(title) === -1) {
				results.push(title);
			}
		});
		return results;
	} else {
		return list;
	}
};

})();
