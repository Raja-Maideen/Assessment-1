const tableBody =document.getElementById('user-data');

const pagination = document.getElementById('pagination');

Function renderUsers (users) {

tableBody.innerHTML ;

users.forEach((user) => {

const row document.createElement('tr');

row.innerHTML = <td>${user.name}</td><td>${user.email}</td>';

tableBody.appendChild(row);


});

}


function renderPagination (page, limit, totalUsers) {

const totalPages Math.ceil(totalUsers / limit);

pagination.innerHTML = '';

for (let i 1; i < totalPages; i++) {

const link document.createElement('a');

link.href?page=${i}&sort=${sort}`;

link.textContent = i;

pagination.appendChild(link);

}

}



fetch('/api/users')



.then((response) => response.json())



.then((data) => {

renderUsers (data.users);

renderPagination (data.page, data.limit, data.totalUsers);

});
