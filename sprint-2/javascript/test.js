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
  //displaycomment function, argument is comment chunk (object in array)
  let commentsEl = document.createElement("div"); //create div called commentsEl
  commentsEl.classList.add("comments__element-container");
  infoContainer.appendChild(commentsEl); //append div for each comment chunk to the parent div infoContainer

  for (i = 0; i < commentChunk.length; i++) {
    let obj = commentChunk[i];
    console.log(commentChunk[i]);
  }
}

// for (i = 0; i < commentsArr.length; i++) {
//   let commentsCont = document.createElement("div");
//   infoContainer.appendChild(commentsCont);
//   commentsCont.className = "comments__container";

//   let commentsTop = document.createElement("div");
//   commentsCont.appendChild(commentsTop);
//   commentsTop.className = "comments__top";

//   let commentsBottom = document.createElement("div");
//   commentsCont.appendChild(commentsBottom);
//   commentsBottom.className = "comments__bottom";
// }

for (let object of commentsArr) displayComment(commentsArr[i]); //invoke the displayComment function for each object in array// shows comments before user click

const form = document.querySelector(".comments__form"); //select form, assign variable

form.addEventListener("submit", submitEvent => {
  //higher order function - when listener is activated, will execute function inside (inner function is parameter of this)
  submitEvent.preventDefault(); //prevent automatic page reload

  let userName = document.querySelector(".comments__new-name").value; //assign user input to value
  let userComment = document.querySelector(".comments__new-comment").value;
  let newComment = {
    //create object with user info
    name: userName,
    date: new Date(),
    comment: userComment
  };
  commentsArr.unshift(newComment); //push object with user info into beginning of array
  document.querySelector(".comments__displayed").innerText = ""; //create empty text so it doesn't post array twice
  for (let object of commentsArr) displayComment(commentChunk); //invoke displaycomment function with new values pushed in
});
