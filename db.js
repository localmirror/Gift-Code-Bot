const BASE_URL = "https://database.deta.sh/v1/YOUR_PROJECT_ID/bot-db";
const DB_KEY = "YOUR_DETA_PROJECT_KEY";

async function dbFetch(path, method = "GET", body = null) {
  const res = await fetch(`${BASE_URL}/${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": DB_KEY
    },
    body: body ? JSON.stringify(body) : null,
  });
  return res.json();
}

export const db = {
  async get(key) {
    const res = await dbFetch(`items?query={"key":"${key}"}`);
    return res.items?.[0] || null;
  },
  async set(key, value) {
    return await dbFetch("items", "POST", {
      items: [{ key, ...value }]
    });
  },
  async delete(key) {
    return await dbFetch("items", "DELETE", { keys: [key] });
  }
};
