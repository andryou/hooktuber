chrome.webRequest.onBeforeRequest.addListener(function(req) { return { redirectUrl: req.url.replace("youtube.com", "hooktube.com").replace("#t=", "&t=") } }, {"types": ['main_frame'], "urls": ["*://*.youtube.com/watch*"]}, ["blocking"]);