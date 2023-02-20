function createElement(element, className = null, text = null) {
  const newElement = document.createElement(element);
  if (text) newElement.textContent = text;
  if (className) newElement.classList.add(className);
  return newElement;
}

let commentsArr = [
  {
    name: "Connor Walton",
    timestamp: "02/17/2021",
    commentText:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    timestamp: "01/09/2021",
    commentText:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    timestamp: "12/20/2020",
    commentText:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

const commentsSection = document.querySelector(".comments");
const newSection = createElement("section", "display-comments"); // add section
commentsSection.appendChild(newSection); // append section to main

const newList = createElement("ul", "display-comments__list"); // add list
newList.setAttribute("id", "comments-list"); // add id to the list
newSection.appendChild(newList); // append list to section

const commentsList = document.getElementById("comments-list");

// display comments
function displayComment(comment) {
  // // create div
  const commentDiv = createElement("div", "display-comments__card");
  const commentCardDiv = createElement("div", "display-comments__content");
  const nameAndDataDiv = createElement(
    "div",
    "display-comments__name-and-data"
  );
  const textDiv = createElement("div");

  // create p and append them to a div
  nameAndDataDiv.appendChild(
    createElement("p", "display-comments__name", comment.name)
  );
  nameAndDataDiv.appendChild(
    createElement("p", "display-comments__date", comment.timestamp)
  );
  textDiv.appendChild(
    createElement("p", "display-comments__text", comment.commentText)
  );

  // append name, data, and comment text to a Card div
  commentCardDiv.appendChild(nameAndDataDiv);
  commentCardDiv.appendChild(textDiv);

  // append card div to a outer div
  commentDiv.appendChild(createElement("div", "comments__img--no-pic"));
  commentDiv.appendChild(commentCardDiv);

  // append outer div to the main div
  commentsList.appendChild(commentDiv);
}

// clean and add comments
function cleanAndAddComments() {
  commentsList.textContent = "";
  for (let i = 0; i < commentsArr.length; i++) {
    displayComment(commentsArr[i]);
  }
}

cleanAndAddComments();

// generate today's date
let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0");
let yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;

// add validation and add new comment
const form = document.getElementById("form");
const nameInput = document.querySelector(".comments__name");
const commentInput = document.querySelector(".comments__text");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userName = event.target.user_name.value;
  const comment = event.target.user_comment.value;

  if (userName === "" && comment === "") {
    nameInput.classList.add("comments__required");
    commentInput.classList.add("comments__required");
  } else if (userName === "") {
    nameInput.classList.add("comments__required");
  } else if (comment === "") {
    commentInput.classList.add("comments__required");
  } else {
    commentsArr.unshift({
      name: userName,
      timestamp: today,
      commentText: comment,
    });

    event.target.user_name.value = "";
    event.target.user_comment.value = "";
    cleanAndAddComments();
  }
});

// clean validation when input has a value
function cleanValidation(event) {
  if (event.target.value) {
    event.target.classList.remove("comments__required");
  }
}

nameInput.oninput = cleanValidation;
commentInput.oninput = cleanValidation;
