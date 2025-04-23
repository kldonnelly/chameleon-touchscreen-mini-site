export function getCache(cacheKey) {
  const cacheExpire = window.localStorage.getItem(`${cacheKey}-expiry`);
  if (cacheExpire === null) {
    return null;
  }
  if (Date.now() > parseFloat(cacheExpire)) {
    return null;
  }

  const objJson = window.localStorage.getItem(cacheKey);
  if (objJson === null || objJson === undefined) {
    return null;
  }

  return JSON.parse(objJson);
}

export function setCache(cacheKey, objectItem, expiryMinute) {
  const expiryKey = `${cacheKey}-expiry`;
  localStorage.setItem(expiryKey, (Date.now() + expiryMinute * 60 * 1000).toString());
  localStorage.setItem(cacheKey, JSON.stringify(objectItem));
}