function fetchUserData(url) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const users = [
          { id: 1, name: 'John Doe', email: 'john@example.com', age: 25 },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 30 },
          { id: 3, name: 'Alex Johnson', email: 'alex@example.com', age: 22 },
          { id: 4, name: 'Emily Davis', email: 'emily@example.com', age: 27 },
        ];
        resolve(users);
      }, 1000);
    });
  }
  
  function processUsers(users, minAge) {
    return users
      .filter((user) => user.age >= minAge)
      .map(({ name, email }) => ({ name, email }));
  }
  
  function createUserManager() {
    let usersList = [];
  
    return {
      addUser: (user) => {
        usersList = [...usersList, user];
      },
      getUsers: () => {
        return usersList.map(({ id, name, age }) => ({
          id,
          name,
          age,
          email: 'hidden',
        }));
      },
      findUserByName: (name) => {
        const user = usersList.find((user) => user.name === name);
        return user?.name ? user : 'User not found';
      },
    };
  }
  
  (async function run() {
    console.log('Fetching user data...');
    const users = await fetchUserData('api/users');
    console.log('Fetched users:', users);
  
    const filteredUsers = processUsers(users, 25);
    console.log('Filtered users (25 years and older):', filteredUsers);
  
    const userManager = createUserManager();
  
    filteredUsers.forEach((user) => userManager.addUser(user));
    console.log('Users after adding:', userManager.getUsers());
  
    console.log('Find user by name "John Doe":', userManager.findUserByName('John Doe'));
    console.log('Find user by name "Unknown":', userManager.findUserByName('Unknown'));
  
    console.log('Users with hidden emails:', userManager.getUsers());
  })();