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
    date: "Fri Sep 05 2019",
    venue: "Moscow Center",
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
    let showEl2 = document.createElement("div");
    let showEl3 = document.createElement("div");
    let button = document.createElement("button");

    for (let key in show) {
      //goes through each object key within each item

      if (key === "date") {
        console.log(show["date"]);
        let dateEl = document.createElement("p");
        let dateEl2 = document.createElement("p");
        dateEl.innerText = `${key}`;
        dateEl2.innerText = `${show["date"]}`;
        dateEl.className = "shows__date";
        dateEl2.className = "shows__date-content";
        showEl.appendChild(dateEl);
        showEl.appendChild(dateEl2);
      }

      if (key === "venue") {
        console.log(show["venue"]);
        let venueEl = document.createElement("p");
        let venueEl2 = document.createElement("p");
        venueEl.innerText = `${key}`;
        venueEl2.innerText = `${show["venue"]}`;
        venueEl.className = "shows__venue";
        venueEl2.className = "shows__venue-content";
        showEl2.appendChild(venueEl);
        showEl2.appendChild(venueEl2);
      }

      if (key === "location") {
        console.log(show["location"]);
        let locationEl = document.createElement("p");
        let locationEl2 = document.createElement("p");
        locationEl.innerText = `${key}`;
        locationEl2.innerText = `${show["location"]}`;
        locationEl.className = "shows__location";
        locationEl2.className = "shows__location-content";
        showEl3.appendChild(locationEl);
        showEl3.appendChild(locationEl2);
      }
    }

    showsInfo.appendChild(showEl);
    showEl.classList.add("shows__el-container");
    showsInfo.appendChild(showEl2);
    showEl2.classList.add("shows__el-container");
    showsInfo.appendChild(showEl3);
    showEl3.classList.add("shows__el-container");
    button.innerText = `BUY TICKETS`;
    button.className = "shows__button";
    showsInfo.appendChild(button);
  }
}

//invoke the createShowSection function
createShowSection(infoContainer, shows); //arguments
