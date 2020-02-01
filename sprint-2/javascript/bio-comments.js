//comments
let commentsArr = [
  {
    name: "Michael Lyons",
    comment:
      "They BLEW the ROOF off at their last show, once everyone started ﬁguring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
    date: "12, 18, 2018"
  },
  {
    name: "Gary Wong",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
    date: "12, 12, 2018"
  },
  {
    name: "Theodore Duncan",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s deﬁnitely my favorite ever!",
    date: "11, 15, 2018"
  }
];

console.log(commentsArr);

let infoContainer = document.querySelector(".comments__displayed"); //selecting div in html and creating variable named infoContainer

function displayComment(commentChunk) {
  //declaring function named createCommentSection, parameters are the div (var infoContainer and container for shows array (showInfo))

  //   for (let commentChunk of commentObject) {
  //go through array one by one--commentChunk represents each object within array, oldComments is array itself -- used of for objects

  // let commentsBlock = document.createElement("div"); //variable within for loop of each object - div for each section
  // commentsBlock.classList.add("comment__container");
  // infoContainer.appendChild(commentsBlock); //append div for each comment chunk to the parrent div infoContainer
  for (let key in commentChunk) {
    //goes through each object key within each item

    let commentsEl = document.createElement("div"); //variable within for loop of each object - div for each section
    commentsEl.classList.add("comment__container");
    infoContainer.appendChild(commentsEl); //append div for each comment chunk to the parrent div infoContainer

    if (key === "name") {
      console.log(commentChunk["name"]);
      let nameEl = document.createElement("p"); //create p tag variable nameEl
      nameEl.innerText = `${key} ${commentChunk["name"]}`; //nameEl will show the info if key matches what's declared
      nameEl.className = "comments__name";
      commentsEl.appendChild(nameEl); //append to specified div
    }

    if (key === "comment") {
      console.log(commentChunk["comment"]);
      let commentEl = document.createElement("p");
      commentEl.innerText = `${key} ${commentChunk["comment"]}`;
      commentEl.className = "comments__comment";
      commentsEl.appendChild(commentEl);
    }

    if (key === "date") {
      console.log(commentChunk["date"]);
      let dateEl = document.createElement("p");
      dateEl.innerText = `${key} ${commentChunk["date"]}`;
      dateEl.className = "comments__date";
      commentsEl.appendChild(dateEl);
    }
  }

  // oldCommentsContainer.appendChild(commentsEl); //append div to container for all comment chunks
  // commentsEl.classList.add("comments__el-container");
  // oldCommentsContainer.appendChild(commentsEl2);
  // commentsEl2.classList.add("comments__el-container");
  // oldCommentsContainer.appendChild(commentsEl3);
  // commentsEl3.classList.add("comments__el-container");
}

//invoke the createCommentSection function
for (let object of commentsArr) displayComment(object);

// const formSection = document.querySelector(".comments__form"); //add header above form, in same parent div as form
// const header = document.createElement("h1");
// header.className = "comments__header";
// header.innerText = "Join the Conversation";
// formSection.appendChild(header);

//

const form = document.querySelector(".comments__form");

form.addEventListener("submit", submitEvent => {
  //higher order function - when listener is activated, will execute function inside (inner function is parameter of this)
  submitEvent.preventDefault();

  let userName = document.querySelector(".comments__new-name").value;
  let userComment = document.querySelector(".comments__new-comment").value;
  let newComment = {
    name: userName,
    comment: userComment,
    date: new Date()
  };
  commentsArr.unshift(newComment);
  document.querySelector(".comments__displayed").innerText = "";
  for (let object of commentsArr) displayComment(object);
});
