/* usage: 
 * shinobi.mapping.render("body",json) 
 * shinobi.mapping.render("#elemid",json)
 * shinobi.mapping.render(".classname",json)
 * 
 * HTML:
 * <div snb-key="keyvalue"></div>
 * 
 *  */

shinobi.mapping = {
	'render' : function(pattern, json) {
		var jsonArr = JSON.parse(json);

		var searchList = document.querySelectorAll(pattern);

		for (var index = 0; index < searchList.length; index++) {
			var search = searchList[index];

			shinobi.mapping.renderElement(search, jsonArr);
		}
	},
	'renderElement' : function(search, jsonArr) {
		for ( var elem in jsonArr) {
			var selectors = search.querySelectorAll("[snb-key=" + elem + "]");

			// check current node has snb-key=elem
			if (selectors.length == 0) {

				if (search.hasAttribute('snb-key')) {

					if (search.getAttribute('snb-key') == elem) {

						shinobi.mapping.renderSelector(search, jsonArr, elem);
					}
				}
			}
			//

			for (var i = 0; i < selectors.length; i++) {
				shinobi.mapping.renderSelector(selectors[i], jsonArr, elem);
			}
		}
	},
	'renderSelector' : function(selector, jsonArr, elem) {
		var nodeType = selector.nodeType;
		var value = jsonArr[elem];

		if (selector.hasAttribute("snb-render")) {
			var render = selector.getAttribute("snb-render");

			eval(render)(selector, value);

			return;
		}

		// check formatter
		if (selector.hasAttribute("snb-format")) {
			var formatter = selector.getAttribute("snb-format");

			if ("number" === formatter) {
				var numberValue = Number(value);
				value = numberValue.format(0, 3, ',', '.');
			}

		}

		if (nodeType === 3) {
			selector.innerHTML = value;
		} else if (nodeType === 1) {

			if (selector.hasAttribute("value")) {
				selector.value = value;

				if (selector.tagName == 'OPTION') {

					if (selector.hasAttribute("snb-key-innerhtml")) {

						selector.innerHTML = value;
					}
				}

				if (selector.tagName == 'INPUT'
						&& selector.getAttribute('type') == 'checkbox') {

					selector.checked = value;

				}
			} else if (selector.tagName === "SELECT") {
				selector.value = value;
			} else if (selector.hasAttribute("snb-editor-index")) {
				shinobiEditors[selector.getAttribute("snb-editor-index")]
						.setData(value);
			} else {

				var attributes = selector.attributes;

				var isFound = false;
				for (var i = attributes.length - 1; i >= 0; i--) {
					var attributeName = attributes[i].name;
					var attributeValue = attributes[i].value;

					var index = attributeName.search("snb-key-");
					if (index >= 0) {
						isFound = true;
						var ref = attributeName.substring(8);

						if ("innerhtml" !== ref) {
							selector.setAttribute(ref, jsonArr[attributeValue]);
						} else {
							selector.innerHTML = jsonArr[attributeValue];
						}
					}
				}

				if (isFound === false) {
					selector.innerHTML = value;
				}
			}
		}
	},
	'applySnbFormat' : function(selector, value) {

	}
};