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

let infoContainer = document.querySelector(".comments"); //selecting div in html and creating variable named infoContainer

function createCommentSection(infoContainer, oldComments) {
  //declaring function named createCommentSection, parameters are the div (var infoContainer and container for shows array (showInfo))

  for (let commentChunk of oldComments) {
    //go through array one by one--commentChunk represents each object within array, oldComments is array itself -- used of for objects

    let oldCommentsContainer = document.createElement("div"); //variable within for loop of each object - div for each section
    oldCommentsContainer.classList.add("comment__container");
    infoContainer.appendChild(oldCommentsContainer); //append div for each comment chunk to the parrent div infoContainer
    let commentsEl = document.createElement("div"); //create div for each key/value pair, 3 separate for different key values
    let commentsEl2 = document.createElement("div");
    let commentsEl3 = document.createElement("div");
    for (let key in commentChunk) {
      //goes through each object key within each item

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
        commentsEl2.appendChild(commentEl);
      }

      if (key === "date") {
        console.log(commentChunk["date"]);
        let dateEl = document.createElement("p");
        dateEl.innerText = `${key} ${commentChunk["date"]}`;
        dateEl.className = "comments__date";
        commentsEl3.appendChild(dateEl);
      }
    }

    oldCommentsContainer.appendChild(commentsEl); //append div to container for all comment chunks
    commentsEl.classList.add("comments__el-container");
    oldCommentsContainer.appendChild(commentsEl2);
    commentsEl2.classList.add("comments__el-container");
    oldCommentsContainer.appendChild(commentsEl3);
    commentsEl3.classList.add("comments__el-container");
  }
}

//invoke the createCommentSection function
createCommentSection(infoContainer, commentsArr); //arguments

const formSection = document.querySelector(".comments__form"); //add header above form, in same parent div as form
const header = document.createElement("h1");
header.className = "comments__header";
header.innerText = "Join the Conversation";
formSection.appendChild(header);

//

function displayComment(userName, userComment) {
  let newComment = {
    name: userName,
    comment: userComment,
    date: new Date()
  };
  console.log(newComment);
}

const form = document.querySelector(".comments__form");

form.addEventListener("submit", submitEvent => {
  //higher order function - when listener is activated, will execute function inside (inner function is parameter of this)
  submitEvent.preventDefault();

  let userName1 = document.querySelector(".comments__new-name").value;
  let userComment1 = document.querySelector(".comments__new-comment").value;
  displayComment(userName1, userComment1);
});
