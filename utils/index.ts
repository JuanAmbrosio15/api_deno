db.createUser(
  {
    user: "pabloDev",
    pwd: "17920310",
    roles: [
      { role: "userAdminAnyDatabase", db: "admin" },
      { role: "readWrite", db: "school"},
      { role: "readWrite", db: "quotes" },
    ],
  },
);
