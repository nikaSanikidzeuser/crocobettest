//get user id from API
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
//fetch user info from API
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then((response) => response.json())
  .then((data) => {
    const userFullInfo = document.getElementById("userDetails");
    //display user info using a loop
    const info = [
      { label: "Name", value: data.name },
      { label: "Username", value: data.username },
      { label: "Email", value: data.email },
      {
        label: "Address",
        value: `Street: ${data.address.street},
                Suite: ${data.address.suite}, 
                City: ${data.address.city}, 
                Zipcode: ${data.address.zipcode}, 
                geo: 
                lat:${data.address.geo.lat},
                lng:${data.address.geo.lng}`,
      },
      { label: "Phone", value: data.phone },
      { label: "Website", value: data.website },
      {
        label: "Company",
        value: `Name:${data.company.name}
                CatchPhrase: ${data.company.catchPhrase}
                Bs: ${data.company.bs}`,
      },
    ];
    info.forEach((details) => {
      const infoList = document.createElement("div");
      infoList.innerText = `${details.label} : ${details.value}`;
      userFullInfo.appendChild(infoList);
    });
  });
//create button to display user posts
const postsButton = document.getElementById("posts-btn");
postsButton.addEventListener("click", () => {
  window.location.href = `userPosts.html?id=${id}`;
});
