const Data_URL = "./appData.json";
const HelpSectionPostsWrapper = document.querySelector(".help-posts-wrapper");

getPosts(Data_URL);

async function getPosts(url) {
  const responce = await fetch(url);
  const data = await responce.json();
  showPosts(data.helpSection);
}
function showPosts(Posts) {
  HelpSectionPostsWrapper.innerHTML = "";
  Posts.forEach((Post) => {
    const { title, imgURL, description } = Post;
    const PostEl = document.createElement("div");
    PostEl.classList.add("col");
    PostEl.innerHTML = `
      <div class="card h-100">
      <img
        src="./images/helpSection-img1.png"
        class="card-img-top"
        alt="${title}"
      />
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">
        ${description}
        </p>
        <a href="#" class="card-link">Card link</a>
      </div>
    </div>
          `;
    HelpSectionPostsWrapper.appendChild(PostEl);
  });
}
