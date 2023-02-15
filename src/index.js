let exhibitTitle = document.querySelector("#exhibit-title");
let exhibitImage = document.querySelector("#exhibit-image");
let exhibitArtistName = document.querySelector("#artist-name");
let exhibitDescription = document.querySelector("#exhibit-description");
let exhibitTicketsBought = document.querySelector("#tickets-bought");
let exhibitComments = document.querySelector("#comments-section");
let commentForm = document.querySelector("#comment-form");
let button = document.querySelector("#buy-tickets-button");
let tickets;
fetch("http://localhost:3000/current-exhibits")
  .then((res) => res.json())
  .then((exhibits) => addDetails(exhibits[0]));

function addDetails(exhibit) {
  console.log(exhibit);
  exhibitTitle.textContent = exhibit.title;
  exhibitImage.src = exhibit.image;
  exhibitArtistName.textContent = exhibit.artist_name;
  exhibitDescription.textContent = exhibit.description;
  exhibitTicketsBought.textContent = exhibit.tickets_bought;
  exhibit.comments.forEach((comment) => {
    p = document.createElement("p");
    exhibitComments.append(p);
    p.textContent = comment;
    tickets = exhibit;
  });
}
// let comment1 = document.createElement("p");
// exhibitComments.append(comment1);
// comment1.textContent = "I don't know what this is...";
// let comment2 = document.createElement("p");
// exhibitComments.append(comment2);
// comment2.textContent = "What in the heckin' heck?";
// let comment3 = document.createElement("p");
// exhibitComments.append(comment3);
// comment3.textContent = "I like giraffes...";
// let comment4 = document.createElement("p");
// exhibitComments.append(comment4);
// comment4.textContent =
//   "This is a great museum and I was not paid to write this comment...";
// let comment5 = document.createElement("p");
// exhibitComments.append(comment5);
// comment5.textContent = "OMG A COMMENT SECTION!";
// let comment6 = document.createElement("p");
// exhibitComments.append(comment6);
// comment6.textContent = "Have you seen giraffe tongues? Like, ew.";
// let comment7 = document.createElement("p");
// exhibitComments.append(comment7);
// comment7.textContent =
//   "Did you know giraffe's are the tallest mammals on earth?";
// let comment8 = document.createElement("p");
// exhibitComments.append(comment8);
// comment8.textContent = "A giraffe's horns are called ossicones";
// let comment9 = document.createElement("p");
// exhibitComments.append(comment9);
// comment9.textContent = "I still like giraffes...";
//}

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let newComment = document.createElement("p");
  exhibitComments.append(newComment);
  newComment.textContent = e.target["comment-input"].value;
  e.target.reset();
});

button.addEventListener("click", () => {
  tickets.tickets_bought++; //IMPORTANT
  exhibitTicketsBought.textContent = tickets.tickets_bought + " Tickets Bought";

  // exhibitTicketsBought.textContent =
  //   exhibitTicketsBought.textContent++ + " Tickets Bought";
});

//+ " Tickets Bought";
