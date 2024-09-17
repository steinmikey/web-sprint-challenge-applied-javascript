import axios from "axios";

const Card = (article) => {
  //create elements
  const cardContainer = document.createElement("div");
  const cHeadline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const cAuthorPhoto = document.createElement("img");
  const cAuthorName = document.createElement("span");

  //arrange hierarchy
  cardContainer.appendChild(cHeadline);
  cardContainer.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(cAuthorPhoto);
  author.appendChild(cAuthorName);

  //add classes
  cardContainer.classList.add("card");
  cHeadline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  //add text/src
  cHeadline.textContent = article.headline;
  cAuthorPhoto.src = article.authorPhoto;
  cAuthorName.textContent = `By ${article.authorName}`;

  cardContainer.addEventListener("click", (_event) => {
    console.log(cHeadline.textContent);
  });

  return cardContainer;
};

// ^^^^ TASK 5 ^^^^
// ---------------------
// Implement this function, which should return the markup you see below.
// It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// <div class="card">
//   <div class="headline">{ headline }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ authorPhoto }>
//     </div>
//     <span>By { authorName }</span>
//   </div>
// </div>
//

const cardAppender = (selector) => {
  axios
    .get(`http://localhost:5000/api/articles`)
    .then((res) => {
      // console.log(res.data.articles);
      // const keys = Object.keys(res.data.articles);
      // console.log(keys);
      // const values = Object.values(res.data.articles);
      // console.log(values);

      Object.values(res.data.articles).forEach((item) => {
        item.forEach((id) => {
          return document.querySelector(`${selector}`).appendChild(Card(id));
        });
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

// ^^^^ TASK 6 ^^^^
// ---------------------
// Implement this function that takes a css selector as its only argument.
// It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
// However, the articles do not come organized in a single, neat array. Inspect the response closely!
// Create a card from each and every article object in the response, using the Card component.
// Append each card to the element in the DOM that matches the selector passed to the function.
//

export { Card, cardAppender };
