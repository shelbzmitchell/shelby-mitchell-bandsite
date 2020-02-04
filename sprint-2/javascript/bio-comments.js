//comments
let commentsArr = [
  {
    name: "Michael Lyons",
    date: "12, 18, 2018",
    comment:
      "They BLEW the ROOF off at their last show, once everyone started ﬁguring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
  },
  {
    name: "Gary Wong",
    date: "12, 12, 2018",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
  },
  {
    name: "Theodore Duncan",
    date: "11, 15, 2018",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s deﬁnitely my favorite ever!"
  }
];

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
    if (key === "date") {
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

for (let object of commentsArr) displayComment(object); //invoke the displayComment function for each object in array// shows comments before user click

const form = document.querySelector(".comments__form"); //select form, assign variable

form.addEventListener("submit", submitEvent => {
  //higher order function - when listener is activated, will execute function inside (inner function is parameter of this)
  submitEvent.preventDefault(); //prevent automatic page reload

  let userName = document.querySelector(".comments__new-name").value; //assign user input to value
  let userComment = document.querySelector(".comments__new-comment").value;
  let currentDate = new Date();
  let formattedDate =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate();
  let newComment = {
    //create object with user info
    name: userName,
    date: formattedDate,
    comment: userComment
  };
  form.reset();
  commentsArr.unshift(newComment); //push object with user info into beginning of array
  document.querySelector(".comments__displayed").innerText = ""; //create empty text so it doesn't post array twice
  for (let object of commentsArr) displayComment(object); //invoke displaycomment function with new values pushed in
});
