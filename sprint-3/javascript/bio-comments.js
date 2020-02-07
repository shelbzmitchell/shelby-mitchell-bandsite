// get comments
let commentsArr = [];
axios
  .get(
    "https://project-1-api.herokuapp.com/comments?api_key=c509421f-1c2d-4ac6-8a23-d2d6ae0e225b"
  )
  .then(response => {
    commentsArr = response.data;
    dateSort();
    console.log(commentsArr.timestamp);
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
  arr.forEach(commentObject => {
    displayComment(commentObject);
  });
}

function dateSort() {
  commentsArr.sort(function(a, b) {
    return b.timestamp - a.timestamp;
  });
}

// function formatTime(time) {

// }

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
      dateEl.innerText = `${commentChunk["timestamp"]}`;
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
      "https://project-1-api.herokuapp.com/comments?api_key=c509421f-1c2d-4ac6-8a23-d2d6ae0e225b",
      {
        name: userName,
        comment: userComment
      }
    )
    .then(response => {
      commentsArr.push(response.data);
      console.log(commentsArr);
      document.querySelector(".comments__displayed").innerText = ""; //create empty text so it doesn't post array twice
      renderComments(commentsArr);
    });
  form.reset();
});
