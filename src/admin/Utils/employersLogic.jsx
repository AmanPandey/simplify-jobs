import axios from "axios";

const API_URL = "https://simplify-job-node-js-backend-api.vercel.app/api";

export async function addEmployer(credentials, token) {
  try {
    const res = await axios.post(`${API_URL}/addEmployer`, credentials, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    if (error.response) {
      console.error("Server error:", error.response.data);
      throw new Error(error.response.data?.message || "Something went wrong");
    } else if (error.request) {
      console.error("No response from server:", error.request);
      throw new Error("No response from server");
    } else {
      console.error("Request setup error:", error.message);
      throw new Error(error.message);
    }
  }
}

// get all employers

export async function getAllEmployers(token) {
  try {
    const res = await axios.get(`${API_URL}/getAllEmployers`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);

    return res.data;
  } catch (error) {
    if (error.response) {
      console.error("Server error:", error.response.data);
      throw new Error(error.response.data?.message || "Something went wrong");
    } else if (error.request) {
      console.error("No response from server:", error.request);
      throw new Error("No response from server");
    } else {
      console.error("Request setup error:", error.message);
      throw new Error(error.message);
    }
  }
}

//get employer by id
export async function getEmployer(id, token) {
  try {
    const res = await axios.get(`${API_URL}/getEmployer?id=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return res.data;
  } catch (error) {
    if (error.response) {
      console.error("Server error:", error.response.data);
      throw new Error(error.response.data?.message || "Something went wrong");
    } else if (error.request) {
      console.error("No response from server:", error.request);
      throw new Error("No response from server");
    } else {
      console.error("Request setup error:", error.message);
      throw new Error(error.message);
    }
  }
}

//update employer

export async function updateEmployer(id, updatedData, token) {
  try {
    const res = await axios.put(
      `${API_URL}/updateEmployer?id=${id}`,
      updatedData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return res;
  } catch (error) {
    if (error.response) {
      console.error("Server error:", error.response.data);
      throw new Error(error.response.data?.message || "Something went wrong");
    } else if (error.request) {
      console.error("No response from server:", error.request);
      throw new Error("No response from server");
    } else {
      console.error("Request setup error:", error.message);
      throw new Error(error.message);
    }
  }
}

// delete employer

export const deletEmployer = async (id, token) => {
  try {
    const res = await axios.delete(`${API_URL}/deleteEmployer?id=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return res;
  } catch (error) {
    if (error.response) {
      console.error("Server error:", error.response.data);
      throw new Error(error.response.data?.message || "Something went wrong");
    } else if (error.request) {
      console.error("No response from server:", error.request);
      throw new Error("No response from server");
    } else {
      console.error("Request setup error:", error.message);
      throw new Error(error.message);
    }
  }
};
