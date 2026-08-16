browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = new URL(details.url);
    let searchQuery = url.searchParams.get("wd") || url.searchParams.get("word") || url.searchParams.get("q");

    if (searchQuery) {
      return {
        redirectUrl: "https://spectre-search.onrender.com/search?q=" + encodeURIComponent(searchQuery)
      };
    } else {
      return {
        redirectUrl: "https://spectre-search.onrender.com"
      };
    }
  },
  { urls: ["*://*.baidu.com/*"] },
  ["blocking"]
);