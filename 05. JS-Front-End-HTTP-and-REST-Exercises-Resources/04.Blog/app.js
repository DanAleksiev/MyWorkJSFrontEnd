function attachEvents() {
  const obj = [];
  const buttonLoadPost = document.getElementById("btnLoadPosts");
  buttonLoadPost.addEventListener("click", (e) => {
    fetch(`http://localhost:3030/jsonstore/blog/posts`)
      .then((res) => res.json())
      .then((body) => {
        for (const el of Object.entries(body)) {
          const [name, value] = el;

          const body = value.body;
          const id = value.id;
          const title = value.title;

          const options = document.createElement("option");
          options.value = id;
          options.textContent = title;

          const post = document.getElementById("posts");
          post.appendChild(options);
          
          const currentObj = {
            title: title,
            id: id,
            body: body,
          }

          obj.push(currentObj)
        }
      });
  });

  // Comments
  const buttonViewPost = document.getElementById("btnViewPost");
  buttonViewPost.addEventListener("click", (e) => {
    const ul = document.getElementById("post-comments");
    const h1 = document.getElementById("post-title");
    const targetTitle = document.getElementById("posts");

    ul.innerHTML = "";
    // h1.innerHTML = "";

    let targetedTitle = {}
    for (const currentObj of obj) {
        if(currentObj.id === targetTitle.value){
            targetedTitle = currentObj;         
            break;
        }
    }
    // console.log(targetedTitle)

    fetch(`http://localhost:3030/jsonstore/blog/comments`)
      .then((res) => res.json())
      .then((body) => {
        
        for (const el of Object.entries(body)) {
          const [name, value] = el;
          const id = value.id;
          const postID = value.postId;
          const comments = value.text;
        //   console.log(postID);

          if ((targetedTitle.id === postID)) {
            h1.textContent = targetedTitle.title;

            const p = document.getElementById("post-body");
            p.textContent = targetedTitle.body;

            const li = document.createElement("li");
            li.textContent = comments;

            ul.appendChild(li);
            // console.log(id);
          }
        }
      });
  });
}

attachEvents();
