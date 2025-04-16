export const database = {
  getUser: async (id) => {
    const res = await fetch(`https://database.deta.sh/v1/YOUR_PROJECT/users/items/${id}`);
    return res.ok ? await res.json() : null;
  },
  saveUser: async (user) => {
    return await fetch(`https://database.deta.sh/v1/YOUR_PROJECT/users/items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item: user })
    });
  },
  updateUser: async (id, data) => {
    return await fetch(`https://database.deta.sh/v1/YOUR_PROJECT/users/items/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ set: data })
    });
  }
};
