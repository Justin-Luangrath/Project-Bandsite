function createElement(element, className = null, text = null) {
  const newElement = document.createElement(element);
  if (text) newElement.textContent = text;
  if (className) newElement.classList.add(className);
  return newElement;
}

let shows = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
    button: "Buy Tickets",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
    button: "Buy Tickets",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
    button: "Buy Tickets",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
    button: "Buy Tickets",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
    button: "Buy Tickets",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
    button: "Buy Tickets",
  },
];

const showsList = document.getElementById("shows-list");

// shows list
shows.forEach((item) => {
  const labelsShows = Object.keys(item);

  const showsCardLi = createElement("li", "shows__cards");
  const showsDateUl = createElement("ul", "shows__cards--sub-list");
  const showsVenueUl = createElement("ul", "shows__cards--sub-list");
  const showsLocationUl = createElement("ul", "shows__cards--sub-list");
  const showsButtonUl = createElement("ul", "shows__cards--sub-list");

  showsDateUl.appendChild(createElement("li", "shows__label", labelsShows[0]));
  showsDateUl.appendChild(createElement("li", "shows__info--date", item.date));
  showsVenueUl.appendChild(createElement("li", "shows__label", labelsShows[1]));
  showsVenueUl.appendChild(
    createElement("li", "shows__info--venue", item.venue)
  );
  showsLocationUl.appendChild(
    createElement("li", "shows__label", labelsShows[2])
  );
  showsLocationUl.appendChild(
    createElement("li", "shows__info--location", item.location)
  );
  showsButtonUl.appendChild(
    createElement("button", "shows__button", item.button)
  );

  showsCardLi.appendChild(showsDateUl);
  showsCardLi.appendChild(showsVenueUl);
  showsCardLi.appendChild(showsLocationUl);
  showsCardLi.appendChild(showsButtonUl);

  showsList.appendChild(showsCardLi);

  showsCardLi.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    showsCardLi.classList.toggle("shows__cards--selected");
  });
});
