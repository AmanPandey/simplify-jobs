// src/config/jobTableColumns.js

// ✅ common columns
export const baseColumns = [
  { key: "title", label: "Position", options: ["Frontend", "Backend"] },
  { key: "company", label: "Company", options: ["Google", "Amazon"] },
  { key: "type", label: "Job Type", options: ["Part Time", "Full Time"] },
  { key: "salary", label: "Salary", options: ["$10000+", "$15000+"] },
];

// ✅ draft-only columns
export const draftColumns = [
  {
    key: "location",
    label: "Location",
    options: ["Remote", "Hybrid", "On-Site"],
  },
  { key: "createdAt", label: "Created At" },
  { key: "updatedAt", label: "Last Update" },
];

// ✅ non-draft (joblisting) columns
export const nonDraftColumns = [
  { key: "status", label: "Status", options: ["Active", "Closed"] },
  { key: "applicantsCount", label: "Applications" },
];

// ✅ helper function (optional)
export const getColumns = (draft) =>
  draft
    ? [...baseColumns, ...draftColumns]
    : [...baseColumns, ...nonDraftColumns];
