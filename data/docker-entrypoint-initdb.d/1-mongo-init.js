var user = {
  user: "mongo",
  pwd: "mongo",
  roles: [
    {
      role: "dbOwner",
      db: "mongo_example"
    }
  ]
};

db.createUser(user);
db.createCollection('todoufuken');
