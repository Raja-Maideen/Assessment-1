const express = require('express');

const app = express();

const UserData = require('./data');

app.get('/', (req, res) => {

const sort = req.query.sort;

const page = req.query.page || 1;

const limit = 10;

const users = UserData. Users.slice((page 1) * limit, page limit);

if (sort) {
users.sort((a, b) => {

if (a[sort] b[sort]) return -1;

if (a[sort] > b [sort]) return 1;

return 0;

});

}
res.render('index', { users, page, limit });
});
app.listen(3000, () => console.log('Server started on port 3000'));
