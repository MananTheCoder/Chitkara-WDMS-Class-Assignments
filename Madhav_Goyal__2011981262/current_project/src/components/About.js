function About() {
  return (
    <div>
      <h1 className="mb-4">About This Website</h1>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              What does this website do?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              This website can manipulate text in various ways you may require, like converting it to lower case, UPPER CASE, Title Case, camel Case, or removing extra spaces or even removing all spaces should you need it.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Who made this website?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              The website was built by Madhav Goyal (<a target="_blank" rel="noreferrer" href="https://www.github.com/BartBruh" className="text-decoration-none">GitHub Profile</a>) as his first proper React project, by following tutorials from the YouTube Channel CodeWithHarry (<a target="_blank" rel="noreferrer" href="https://www.youtube.com/CodeWithHarry" className="text-decoration-none">YouTube Channel Link</a>).
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              What framework/library was used to build this website?
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              The website is made using React as the Front End Library and has no backend.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About