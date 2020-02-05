// get comments
let commentsArr = [];
axios
  .get(
    "https://project-1-api.herokuapp.com/comments?api_key=<5046ba2f-69fe-445d-841f-658f4203c99f>"
  )
  .then(response => {
    commentsArr = response.data;
    renderComments(commentsArr);
  });
// .catch(function(error) {
//   // handle error
//   console.log(error);
// })
// .then(function() {
//   // always executed
// });

function renderComments(arr) {
  console.log("testing array", arr);
  arr.forEach(commentObject => {
    displayComment(commentObject);
  });
}

let infoContainer = document.querySelector(".comments__displayed"); //selecting div in html and assign variable named infoContainer

function displayComment(commentChunk) {
  console.log(commentChunk);
  //displaycomment function, param is comment chunk (object in array)
  let commentsObj = document.createElement("div");
  commentsObj.classList.add("comments__object");
  infoContainer.appendChild(commentsObj);

  let commentsLeft = document.createElement("div"); //div for circle on left
  commentsLeft.classList.add("comments__left");
  commentsObj.appendChild(commentsLeft);

  let commentsLeftCircle = document.createElement("div"); //circle on left
  commentsLeftCircle.classList.add("comments__left-circle");
  commentsLeft.appendChild(commentsLeftCircle);

  let commentsTop = document.createElement("div"); //div so date and name can be at top of object w/flexbox
  commentsTop.classList.add("comments__top");
  commentsObj.appendChild(commentsTop);

  let commentsBottom = document.createElement("div"); //div for comment at bottom of object
  commentsBottom.classList.add("comments__bottom");
  commentsObj.appendChild(commentsBottom);

  for (let key in commentChunk) {
    if (key === "name") {
      let nameEl = document.createElement("p"); //create p tag variable nameEl
      nameEl.innerText = `${commentChunk["name"]}`; //nameEl will show the info if key matches what's declared
      nameEl.className = "comments__name";
      commentsTop.appendChild(nameEl); //append to specified div
    }
    if (key === "timestamp") {
      let dateEl = document.createElement("p");
      dateEl.innerText = `${commentChunk["date"]}`;
      dateEl.className = "comments__date";
      commentsTop.appendChild(dateEl);
    }
    if (key === "comment") {
      let commentEl = document.createElement("p");
      commentEl.innerText = `${commentChunk["comment"]}`;
      commentEl.className = "comments__comment";
      commentsBottom.appendChild(commentEl);
    }
  }
}

// for (let object of commentsArr) displayComment(object); //invoke the displayComment function for each object in array// shows comments before user click

const form = document.querySelector(".comments__form"); //select form, assign variable

form.addEventListener("submit", submitEvent => {
  //higher order function - when listener is activated, will execute function inside (inner function is parameter of this)
  submitEvent.preventDefault(); //prevent automatic page reload

  let userName = document.querySelector(".comments__new-name").value; //assign user input to value
  let userComment = document.querySelector(".comments__new-comment").value;

  axios
    .post(
      "https://project-1-api.herokuapp.com/comments?api_key=<5046ba2f-69fe-445d-841f-658f4203c99f>",
      {
        name: userName,
        comment: userComment
      }
    )
    .then(response => {
      commentsArr = response.data;
      renderNewComments(commentsArr);
    });
  // .catch(function(error) {
  //   // handle error
  //   console.log(error);
  // })
  // .then(function() {
  //   // always executed
  // });

  function renderNewComments(arrTwo) {
    console.log("testing array", arrTwo);
    arrTwo.forEach(commentObject2 => {
      rendernewComments(commentObject2);
    });
  }

  form.reset();
  // commentsArr.unshift(newComment); //push object with user info into beginning of array
  document.querySelector(".comments__displayed").innerText = ""; //create empty text so it doesn't post array twice
  // for (let object of commentsArr) displayComment(object); //invoke displaycomment function with new values pushed in
});
