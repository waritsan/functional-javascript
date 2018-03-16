function loadUsers(userIds, load, done) {
  var users = [];
  userIds.forEach(userId => {
    users.push(userId);
  });
  load(users);
  done();
}

module.exports = loadUsers
