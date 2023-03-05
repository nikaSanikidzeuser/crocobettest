//get user id from API
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

//fetch posts from API
fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then((response) => response.json())
  .then((data) => {
    const posts = document.getElementById("userPosts");
    //display posts
    const userPosts = [
      { div: "title", value: data.title },
      { div: "body", value: data.body },
    ];
    userPosts.forEach((post) => {
      const postInfo = document.createElement('p');
      postInfo.innerText = `${post.div} : ${post.value}`;
      posts.appendChild(postInfo);
    });
  });
