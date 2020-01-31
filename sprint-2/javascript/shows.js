//show info
let shows = [
  {
    date: "Mon Dec 17 2018",
    venue: "Ronald Lane",
    location: "San Francisco, CA"
  },
  {
    date: "Tue July 18 2019",
    venue: "Pier 3 East",
    location: "San Francisco, CA"
  },
  {
    date: "Fri July 22 2019",
    venue: "View Lounge",
    location: "San Francisco, CA"
  },
  {
    date: "Sat Aug 12 2019",
    venue: "Hyatt Agency",
    location: "San Francisco, CA"
  },
  {
    date: "Wed Aug 11 2019",
    venue: "Pres Club",
    location: "San Francisco, CA"
  }
];

let infoContainer = document.querySelector(".shows__info-container"); //selecting div in html and creating variable named infoContainer

function createShowSection(infoContainer, showInfo) {
  //declaring function named createShowSection, parameters are the div (var infoContainer and container for shows array (showInfo))

  for (let show of showInfo) {
    //go through showInfo array one by one--show represents each element within array, showInfo is array itself -- of for objects

    let showsInfo = document.createElement("div"); //variable within for loop of each object - div for each section
    showsInfo.classList.add("shows__info");
    infoContainer.appendChild(showsInfo);
    let showEl = document.createElement("div");
    for (let key in show) {
      //goes through each object key within each item

      //   let info = document.createElement("p");
      //   info.classList.add("shows__item");
      //   info.innerHTML = `<p>${key} ${show[key]}<p>`;
      //   showsInfo.appendChild(info);

      //   console.log(key);
      if (key === "date") {
        // console.log("this ran");
        console.log(show["date"]);
        let dateEl = document.createElement("p");
        dateEl.innerText = show["date"];
        showEl.appendChild(dateEl);
      }

      if (key === "venue") {
        // console.log("this ran");
        console.log(show["venue"]);
      }
      showsInfo.appendChild(showEl);
      //console.log(key);
      //console.log(show["venue"]);
    }
  }
}

//invoke the createShowSection function
createShowSection(infoContainer, shows); //arguments
