﻿
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		var xhr = new XMLHttpRequest();
		xhr.open("PUT","/");
		xhr.send(null)
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		var xhr = new XMLHttpRequest();
		xhr.open("feafe","/");
		xhr.send(null);
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
