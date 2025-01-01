/* let tasks = {
  data: [
    {
      taskTitle: "Personal Assistant ",
      category: "Assistant",
      image: "../images/bookatask.jpg",
    },
    {
      taskTitle: "Baby Sitter ",
      category: "Assistant",
      image: "../images/bookatask.jpg",
    },
    {
      taskTitle: "Moving furniturs ",
      category: "Moving",
      image: "../images/bookatask.jpg",
    },
    {
      taskTitle: "Moving Houses ",
      category: "Moving",
      image: "../images/bookatask.jpg",
    },
    {
      taskTitle: "Wall Painting ",
      category: "Painting",
      image: "../images/bookatask.jpg",
    },
    {
      taskTitle: "Fence Painting ",
      category: "Painting",
      image: "../images/bookatask.jpg",
    },
    {
      taskTitle: "Grocery Shopping ",
      category: "Shopping",
      image: "../images/bookatask.jpg",
    },
    {
      taskTitle: "Clothes Shopping ",
      category: "Shopping",
      image: "../images/bookatask.jpg",
    },
  ],
};
for (let i of tasks.data) {
  //Create card
  let card = document.createElement("div");
  //Card Should have category
  card.classList.add("card", "i.category");
  //Image div
  let imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  //image tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imageContainer.appendChild(image);
  card.appendChild(imageContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //task name
  let name = document.createElement("h5");
  name.classList.add("task-title");
  name.innerText = i.taskTitle.toUpperCase();
  container.appendChild(name);
  document.getElementById("tasks").appendChild(card);
}
 */
/* data: [
    {
      productName: "Regular White T-Shirt",
      category: "Topwear",
      price: "30",
      image: "white-tshirt.jpg",
    },
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: "short-skirt.jpg",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "sporty-smartwatch.jpg",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "knitted-top.jpg",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "black-leather-jacket.jpg",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: "89",
      image: "pink-trousers.jpg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: "brown-jacket.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "comfy-gray-pants.jpg",
    },
  ],
}; */
/* let = {
  data: [
    {
      taskTitle: "Personal Assistant ",
      category: "assistant",
      image: "../images/boss.html",
    },
    {
      taskTitle: "Baby Sitter ",
      category: "assistant",
      image: "../images/bookatask.jpg",
    },
    {
      taskTitle: "Moving furniturs ",
      category: "moving",
      image: "../images/bookatask.jpg",
    },
    {
      taskTitle: "Moving Houses ",
      category: "moving",
      image: "../images/bookatask.jpg",
    },
    {
      taskTitle: "Wall Painting ",
      category: "painting",
      image: "../images/bookatask.jpg",
    },
    {
      taskTitle: "Fence Painting ",
      category: "painting",
      image: "../images/bookatask.jpg",
    },
    {
      taskTitle: "Grocery Shopping ",
      category: "shopping",
      image: "../images/bookatask.jpg",
    },
    {
      taskTitle: "Clothes Shopping ",
      category: "shopping",
      image: "../images/bookatask.jpg",
    },
  ],
};

for (let i of tasks.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //task name
  let taskTitle = document.createElement("h5");
  taskTitle.classList.add("task-name");
  taskTitle.innerText = i.taskTitle.toUpperCase();
  container.appendChild(taskTitle);

  card.appendChild(container);
  document.getElementById("").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterTask(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".task-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all
window.onload = () => {
  filterTask("all");
};
 */
let products = {
  data: [
    {
      productName: "Clean Bathroom/Kitchen",
      category: "clean",
      price: "Avg. $64-$146",
      image: "../images/index/cllean.jpg",
    },
    {
      productName: "Pruning The Yard",
      category: "clean",
      price: "Avg. $80-$120",
      image: "../images/pruning.jpg",
    },
    {
      productName: "House Hunting ",
      category: "shopping",
      price: "Avg. $100-$200",
      image: "../images/hunting.jpg",
    },
    {
      productName: "Personal Shopper",
      category: "shopping",
      price: "Avg. $80-$120",
      image: "../images/shopper.jpeg",
    },
    {
      productName: "Letter/Document Delivery",
      category: "delivery",
      price: "Avg. $20-$40",
      image: "../images/letter.jpeg",
    },
    {
      productName: "Grocery Delivery",
      category: "delivery",
      price: "Avg. $80-$120",
      image: "../images/index/delivey.jpg",
    },
    {
      productName: "Lift Furniture",
      category: "lift",
      price: "Avg. $80-$120",
      image: "../images/index/lift.jpg",
    },
    {
      productName: "Moving houses",
      category: "lift",
      price: "Avg. $80-$120",
      image: "../images/index/moveTruck.jpg",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);
  // button
  let taskers = document.createElement("a");
  taskers.classList.add("goToTaskers");
  taskers.href = "../html/taskersList.html";
  taskers.innerText = "Go to taskers";
  container.appendChild(taskers);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};
