//fetch users from API
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const usersList = document.getElementById("userList");

    data.forEach((user) => {
      const userButton = document.createElement("button");
      userButton.classList.add("userButton");
      userButton.innerText = user.name;
      userButton.addEventListener("click", () => {
        window.location.href = `userDetails.html?id=${user.id}`;
      });
      usersList.appendChild(userButton);
    });
  });
