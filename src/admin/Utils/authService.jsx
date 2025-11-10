const API_URL = "https://simplify-job-node-js-backend-api.vercel.app/api";

// ADMIN SECTION AUTH

export async function loginUser(credentials) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  const data = await res.json();

  return data;
}

export async function verifyToken(token) {
  const res = await fetch(`${API_URL}/verifyToken`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`, // <-- add this
    },
  });

  const data = await res.json();

  return data;
}
