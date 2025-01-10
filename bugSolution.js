const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ...database query...
    const user = await getUserById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ user: user });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

//Helper function to simulate database query
async function getUserById(id) {
  //Simulate database call and potential errors
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = {
        '1': { id: '1', name: 'John Doe' },
        '2': { id: '2', name: 'Jane Smith' },
      };
      if (users[id]) {
        resolve(users[id]);
      } else {
        reject(new Error('User not found'));
      }
    }, 500);
  });
}
