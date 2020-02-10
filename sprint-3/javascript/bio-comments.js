// get comments
let commentsArr = [];
axios
  .get(
    "https://project-1-api.herokuapp.com/comments?api_key=c509421f-1c2d-4ac6-8a23-d2d6ae0e225b"
  )
  .then(response => {
    //when we get the data....
    commentsArr = response.data; //put it into variable
    dateSort(); //call function that sorts comments by date
    renderComments(commentsArr); //call renderCommets function
  })
  .catch(reject => {
    console.log(reject);
  });

function renderComments(arr) {
  //goes through each object and as it does so, calls the function displayComment
  arr.forEach(commentObject => {
    displayComment(commentObject);
  });
}

function dateSort() {
  //function to sort by date
  commentsArr.sort(function(a, b) {
    // using method that arranges numbers from largest to smallest
    return b.timestamp - a.timestamp;
  });
}

let infoContainer = document.querySelector(".comments__displayed"); //selecting div in html and assign variable named infoContainer

function displayComment(commentChunk) {
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
      dateEl.innerText = formatDate(commentChunk.timestamp); //calls date function
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

const form = document.querySelector(".comments__form"); //select form, assign variable

form.addEventListener("submit", submitEvent => {
  //higher order function - when listener is activated, will execute function inside (inner function is parameter of this)
  submitEvent.preventDefault(); //prevent automatic page reload

  let userName = document.querySelector(".comments__new-name").value; //assign user input to variable
  let userComment = document.querySelector(".comments__new-comment").value;

  axios
    .post(
      "https://project-1-api.herokuapp.com/comments?api_key=c509421f-1c2d-4ac6-8a23-d2d6ae0e225b", //posts user info to api
      {
        name: userName,
        comment: userComment
      }
    )
    .then(response => {
      commentsArr.push(response.data); //then push response into array
      document.querySelector(".comments__displayed").innerText = ""; //create empty text so it doesn't post array twice
      dateSort(); //call date sort function
      renderComments(commentsArr); //call rendercomments function to show new comment on site
    })
    .catch(reject => {
      console.log(reject); //console log error if post doesn't work
    });

  form.reset(); // clears input fields
});

let formatDate = function(timestamp) {
  //function that takes timestamp and formats it to match mock-up
  let date = new Date(timestamp);
  const dateNum = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const formattedDate = `${month}/${dateNum}/${year}`;
  return formattedDate;
};
