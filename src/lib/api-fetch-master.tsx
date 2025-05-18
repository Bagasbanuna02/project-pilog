export { apiFetchVersion };

async function apiFetchVersion() {
  const response = await fetch("/api/version");
  const data = await response.json();
  return data;
}
