// src/config/jobTableColumns.js

// ✅ common columns
export const baseColumns = [
  { key: "title", label: "Position", options: ["Frontend", "Backend"] },
  { key: "company", label: "Company", options: ["Google", "Amazon"] },
  { key: "type", label: "Job Type", options: ["Part Time", "Full Time"] },
  { key: "salary", label: "Salary", options: ["$10000+", "$15000+"] },
  {
    key: "location",
    label: "Location",
    options: ["Remote", "Hybrid", "On-Site"],
  },
  { key: "status", label: "Status", options: ["Active", "Closed", "Draft"] },
  { key: "applicantsCount", label: "Applications" },
];

export const employerColumns = [
  { key: "id", label: "Employer ID" },
  { key: "employer_code", label: "Employer Code" },
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "city", label: "City" },
  { key: "country_name", label: "Country" }, // ✅ updated: "country_name" (not country_code)
  { key: "company_size", label: "Company Size" },

  // Status toggle (pending, active, inactive)
  {
    key: "status",
    label: "Status",
    options: ["Pending", "Active", "Inactive"], // ✅ matches API
    type: "toggle",
    apiEndpoint: "/application/employer_status_update.php",
  },

  // Verification toggle (0/1 → No/Yes)
  {
    key: "verified",
    label: "Verification",
    options: ["Yes", "No"],
    type: "toggle",
    apiEndpoint: "/application/employer_verification_update.php",
    valueMap: { 1: "Yes", 0: "No" }, // ✅ API sends 0/1, UI shows Yes/No
  },

  // Actions
  { key: "actions", label: "Actions" },
];
