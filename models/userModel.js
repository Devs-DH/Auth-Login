const bycypt = require('bcryptjs');

const user= [
    {
        id:1,
        username:'user1',
        password:'$2a$10$N9qo8uLOickgx2ZMRZlOUo8hu.LALkX5kGJgqZ7Af2zvDbqIjzGZq', // Hashed password for 'password123''
        role:'admin',
    },
];

module.exports =user;