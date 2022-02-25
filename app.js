const Data_URL = "./appData.json";
const videoSection = document.getElementById("videoSection");
const footer = document.getElementById("footer");
const postsSection = document.querySelectorAll("[data-posts-category]");

// Post section
getPosts(Data_URL);
async function getPosts(url) {
  const responce = await fetch(url);
  const data = await responce.json();
  showPostSection(data);
}
function showPostSection(data) {
  postsSection.forEach((section) => {
    //getting current section node
    const currentSection = section;
    // clearing current section's inner html
    currentSection.innerHTML = ``;
    // getting current section's category name
    const categoryName = section.dataset.postsCategory;
    // searching available data which matches with current section's category name and storing it in variable
    const categoryData = data.find((category) => {
      return category.name === categoryName;
    });
    // destructuring category data from categoryData
    const { title, description, PostsObject } = categoryData;
    //creating html structure
    // creating container
    const sectionContainer = document.createElement("div");
    sectionContainer.classList.add("container");
    // creating row inside container (container > row )
    // row structure (container > row > textwrapper + posts wrapper)
    const row = document.createElement("div");
    row.classList.add("row", "gy-4");
    // creating textWrapper inside row (container > row > textwrapper )
    const textWrapper = document.createElement("div");
    textWrapper.classList.add("col-12", "col-sm-10", "col-md-8", "col-lg-7");
    textWrapper.innerHTML = `
    <h2 class="cl-blue-900">
                ${title}
              </h2>
              <p class="mt-3">
                ${description}
              </p>
    `;
    // creating PostWrapper inside row (container > row > postWrapper )
    const PostWrapper = document.createElement("div");
    PostWrapper.classList.add("col-12");
    const postWrapperRow = document.createElement("div");
    postWrapperRow.classList.add(
      "row",
      "row-cols-1",
      "row-cols-sm-2",
      "row-cols-md-3",
      "mt-3"
    );
    const postObj = categoryData.PostsObject;
    postObj.forEach((post) => {
      const { title, imgURL, description } = post;
      const PostEl = document.createElement("div");
      PostEl.classList.add("col");
      PostEl.innerHTML = `
      <div class="card h-100 border-0 bg-transparent">
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
        <a href="#" class="">Card link <i class="bi bi-arrow-right"></i></a>
      </div>
    </div>
          `;
      postWrapperRow.appendChild(PostEl);
    });
    PostWrapper.appendChild(postWrapperRow);
    row.appendChild(textWrapper);
    row.appendChild(PostWrapper);
    sectionContainer.appendChild(row);
    currentSection.appendChild(sectionContainer);
  });
}

// Video section
showReview();
function showReview() {
  videoSection.innerHTML = "";
  const videoSectionEl = document.createElement("div");
  videoSectionEl.classList.add("container");
  videoSectionEl.classList.add("light-bg");
  videoSectionEl.innerHTML = `
    <div class="row align-items-center">
            <div class="col-12 col-md-6 py-5">
              <h2>Finsweet was a dream to work with</h2>
              <p class="my-4">
                Maecenas efficitur scelerisque lorem, et varius lacus tincidunt
                vel. Pellentesque a arcu vitae diam dapibus mattis vel vel orci.
                Vivamus eleifend nec felis vel auctor.
              </p>

              <figcaption class="reviewer-info d-flex align-items-center mt-5">
                <img
                  class="rounded-circle"
                  src="./images/person-img.png"
                  alt=""
                  srcset=""
                  style="width: 50px; height: 50px"
                />
                <div class="px-3">
                  <div class="fs-6 cl-blue-700 fw-bold">Chikelu Neo</div>
                  <span class="mt-1 cl-primary">CEO at MazeAI</span>
                </div>
              </figcaption>
            </div>
            <div
              class="col-12 col-md-6 video-wrapper overflow-hidden b-6 position-relative"
            >
              <div
                class="action-wrapper position-absolute d-flex align-items-center text-white"
                style="bottom: 10%; left: 6%"
              >
                <i class="bi bi-play-circle-fill fs-1"></i>
                <a href="" class="mx-3 text-decoration-none text-white"
                  >Play Video</a
                >
              </div>
              <a href="#">
                <img
                  class="img-fit-cover"
                  src="./images/Videosection-Img.png"
                  alt=""
                  srcset=""
                />
              </a>
            </div>
          </div>
    `;
  videoSection.appendChild(videoSectionEl);
}

//Footer
Footer();
function Footer() {
  const div = document.createElement("div");
  footer.innerHTML = "";
  div.classList.add("container");
  div.innerHTML = `
<div class="row gy-5">
<div class="col-12 col-sm-10 col-md-5 col-lg-5">
  <a href="#">
    <div class="brand-logo">
      <img
        class=""
        src="./images/BrandLogo-light (1).svg"
        alt="beandLogo"
        type="images/svg"
      />
    </div>
  </a>
  <div class="brand-tagline h2 my-3 w-75">
    Bespoke software solutions
  </div>
  <div class="brand-socials my-3 mt-4">
    <a href="#" class="mx-2"> <i class="bi bi-facebook"></i></a>
    <a href="#" class="mx-2"> <i class="bi bi-youtube"></i></a>
    <a href="#" class="mx-2"> <i class="bi bi-instagram"></i></a>
    <a href="#" class="mx-2"> <i class="bi bi-twitter"></i></a>
  </div>
</div>
<div class="col-12 col-md-7 col-lg-7">
  <div class="row gy-5">
    <div class="col-6 col-sm-5 col-lg-3">
      <div class="fw-6">Company</div>
      <div class="row gy-2 mt-2">
        <div><a href="#">About Us</a></div>
        <div><a href="#">Careers</a></div>
        <div><a href="#">Services</a></div>
        <div><a href="#">Blog</a></div>
      </div>
    </div>
    <div class="col-6 col-sm-5 col-lg-3">
      <div class="fw-6">Connect</div>
      <div class="row gy-2 mt-2">
        <div><a href="#">hi@beezzly.com</a></div>
        <div><a href="#">+(123) 456-7890</a></div>
      </div>
    </div>
    <div class="col-10 col-sm-10 col-lg-6">
      <div class="fw-6">Join Newsletter</div>
      <div class="row mt-2">
        <form>
          <input
            class="w-100 my-2 py-2 px-3 rounded-pill border-0"
            type="text"
            name=""
            id=""
            placeholder="Type email here"
            required
          />
          <button type="button" class="btn btn-warning rounded-pill bg-brand-primay">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
`;
  footer.appendChild(div);
}
