const API_URL = "https://api-simplify-jobs.tekalgo.com/application";

// ADMIN SECTION

export async function registerUser(userData) {
  const res = await fetch(`${API_URL}/seed_user.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return res.json();
}

export async function loginUser(credentials) {
  const res = await fetch(`${API_URL}/loging.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return res.json();
}

export async function verifyToken(token) {
  const res = await fetch(`${API_URL}/verify_token.php`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`, // <-- add this
    },
  });

  if (!res.ok) {
    // Handle 401 or other errors
    throw new Error(`Error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

// EMPLOYER SECTION

// add employer
export async function createEmployer(credentials, token) {
  const res = await fetch(`${API_URL}/add_employer.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(credentials),
  });
  return res.json();
}

// empoyer list
