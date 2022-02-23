// const Data_URL = "./appData.json";
const helpPostSection = document.querySelector(".help-posts-wrapper");
const latestPostSection = document.getElementById("blogItemsContainer");

// getPosts(Data_URL);
// async function getPosts(url) {
//   const responce = await fetch(url);
//   const data = await responce.json();
//   showHelpPosts(data.helpSection);
//   showLatestPosts(data.latestBlogPosts);
// }
function showHelpPosts(Posts) {
  helpPostSection.innerHTML = "";
  Posts.forEach((Post) => {
    const { title, imgURL, description } = Post;
    const PostEl = document.createElement("div");
    PostEl.classList.add("col");
    PostEl.innerHTML = `
      <div class="card h-100 border-0">
      <img
        src="${imgURL}"
        class="card-img-top b-6"
        alt="${title}"
      />
      <div class="card-body px-0 py-4">
        <h5 class="card-title cl-primary-800">${title}</h5>
        <p class="card-text cl-battelshipGrey-600">
        ${description}
        </p>
        <a href="#" class="cl-primary">Card link <i class="bi bi-arrow-right"></i></a>
      </div>
    </div>
          `;
    helpPostSection.appendChild(PostEl);
  });
}
function showLatestPosts(Posts) {
  latestPostSection.innerHTML = "";
  Posts.forEach((Post) => {
    const { title, imgURL, description } = Post;
    const PostEl = document.createElement("div");
    PostEl.classList.add("col");
    PostEl.innerHTML = `
      <div class="card h-100 b-6 overflow-hidden">
      <img
        src="${imgURL}"
        class="card-img-top"
        alt="${title}"
      />
      <div class="card-body  py-4 ">
        <h5 class="card-title cl-primary-800">${title}</h5>
        <p class="card-text cl-battelshipGrey-600">
        ${description}
        </p>
        <a href="#" class="cl-primary">Card link <i class="bi bi-arrow-right"></i></a>
      </div>
    </div>
          `;
    latestPostSection.appendChild(PostEl);
  });
}
