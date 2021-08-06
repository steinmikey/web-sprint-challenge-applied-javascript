const Header = (title, date, temp) => {
  //create elements
  const hContainer = document.createElement("div");
  const hDate = document.createElement("span");
  const hTitle = document.createElement("h1");
  const hTemp = document.createElement("span");

  //create hierarchy
  hContainer.appendChild(hDate);
  hContainer.appendChild(hTitle);
  hContainer.appendChild(hTemp);

  //create classes
  hContainer.classList.add("header");
  hDate.classList.add("date");
  hTemp.classList.add("temp");

  //add text
  hDate.textContent = date;
  hTitle.textContent = title;
  hTemp.textContent = temp;

  return hContainer;
};

// ^^^^ TASK 1 ^^^^
// ---------------------
// Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
//
//  <div class="header">
//    <span class="date">{ date }</span>
//    <h1>{ title }</h1>
//    <span class="temp">{ temp }</span>
//  </div>
//
//

const headerAppender = (selector) => {
  return document.querySelector(selector).appendChild(Header("Test Title", "Test Date", "Test Temperature"));
};

// ^^^^ TASK 2 ^^^^
// ---------------------
// Implement this function taking a css selector as its only argument.
// It should create a header using the Header component above, passing arguments of your choosing.
// It should append the header to the element in the DOM that matches the given selector.
//

export { Header, headerAppender };
