export const permissions = [
  {
    label: "root",
    label_fa: "سوپرادمین",
    permissions: ["/app/dashboard", "/app/judges", "/app/admins"],
  },
  {
    label: "admin",
    label_fa: "مدیر",
    permissions: ["/app/dashboard", "/app/judges"],
  },
  {
    label: "judge",
    label_fa: "داور",
    permissions: ["/app/dashboard"],
  },
];
