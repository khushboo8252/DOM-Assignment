const fetchUsersButton = document.getElementById('fetchUsersButton');
const userList = document.getElementById('userList');

fetchUsersButton.addEventListener('click', () => {
    fetch('https://reqres.in/api/users')
        .then((response) => response.json())
        .then((data) => {
            if (data.data && data.data.length > 0) {
                userList.innerHTML = ''; 

                data.data.forEach((user) => {
                    const userCard = document.createElement('div');
                    userCard.classList.add('user-card');

                    const avatar = document.createElement('img');
                    avatar.src = user.avatar;
                    avatar.alt = `${user.first_name} ${user.last_name}'s avatar`;

                    const name = document.createElement('h2');
                    name.textContent = `${user.first_name} ${user.last_name}`;

                    const email = document.createElement('p');
                    email.textContent = user.email;

                    userCard.appendChild(avatar);
                    userCard.appendChild(name);
                    userCard.appendChild(email);

                    userList.appendChild(userCard);
                });
            } else {
                userList.innerHTML = '<p>No users found</p>';
            }
        })
        .catch((error) => {
            console.error('Error fetching user data:', error);
            userList.innerHTML = '<p>Error fetching user data</p>';
        });
});