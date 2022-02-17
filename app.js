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
        <a href="#" class="card-link link">Card link <i class="bi bi-arrow-right"></i></a>
      </div>
    </div>
          `;
    HelpSectionPostsWrapper.appendChild(PostEl);
  });
}
