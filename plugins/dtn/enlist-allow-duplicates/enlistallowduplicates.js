/*\
title: $:/core/modules/filters/enlistallowduplicates.js
type: application/javascript
module-type: filteroperator

Filter operator returning its operand parsed as a list, differs from the 'enlist' operator in that it does not remove duplicate list items

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Export our filter function
*/
exports.enlistallowduplicates = function(source,operator,options) {
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
