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
