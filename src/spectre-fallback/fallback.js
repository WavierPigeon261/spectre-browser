// Detect if Render free tier instance is suspended or down
const pageText = document.body ? document.body.innerText : "";

if (
  pageText.includes("This service has been suspended") || 
  pageText.includes("Service Suspended") ||
  document.title.includes("Render | Service Suspended")
) {
  const urlParams = new URLSearchParams(window.location.search);
  const userQuery = urlParams.get("q") || "";

  alert("⚠️ Spectre Search Notice:\n\nOur search engine instance is currently sleeping or suspended by the hosting server. Redirecting your query to DuckDuckGo...");

  if (userQuery) {
    window.location.href = "https://duckduckgo.com/?q=" + encodeURIComponent(userQuery);
  } else {
    window.location.href = "https://duckduckgo.com";
  }
}