import React, { useState } from "react";
import "../Styles/Home.css";
import $ from "jquery";

// import _chunk from "lodash";
import Products from "../Data/listProducts";
import Product from "./Product";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var myIndex = 0;
function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 5 seconds
}

// window.onload = function (event) {
//   carousel();
// };

$(document).ready(function () {
  carousel();

  window.onload = function (event) {
    carousel();
  };

  const offset = 69;
  const borderWidth = 3;
  const angles = []; //in  rad
  for (let i = 0; i <= 2; i += 0.25) {
    angles.push(Math.PI * i);
  }
  let nearBy = [];
  // let activeBtn = document.querySelector(".win-btn-active");
  // let lastClicked = null;

  // document.querySelectorAll(".win-btn").forEach((btn) => {
  //   btn.onclick = (e) => {
  //     //clear effects from last clicked date and set lastClicked to current item
  //     if (lastClicked) {
  //       lastClicked.classList.remove("win-btn-selected");
  //     }
  //     lastClicked = e.currentTarget;

  //     activeBtn.classList.toggle(
  //       "win-btn-active-unselected",
  //       e.currentTarget.id !== activeBtn.id
  //     );
  //     e.currentTarget.classList.add("win-btn-selected");
  //   };
  // });

  function clearNearBy() {
    nearBy.splice(0).forEach((e) => (e.style.borderImage = null));
  }

  const body = document.querySelector(".win-grid");

  body.addEventListener("mousemove", (e) => {
    let x = e.clientX; //x position of cursor.
    let y = e.clientY; //y position of cursor
    clearNearBy();

    nearBy = angles.reduce((acc, rad, index, arr) => {
      const offsets = [offset * 0.35, offset * 1.105];

      const elements = offsets.reduce(
        (elementAccumulator, o, i, offsetArray) => {
          //to skip the intermediate first points calculation
          // if (index % 2 === 0 && i === 0) return elementAccumulator;
          const cx = Math.floor(x + Math.cos(rad) * o);
          const cy = Math.floor(y + Math.sin(rad) * o);
          const element = document.elementFromPoint(cx, cy);

          if (
            element &&
            element.classList.contains("win-btn") &&
            !element.classList.contains("win-btn-active") &&
            !element.classList.contains("win-btn-selected") &&
            elementAccumulator.findIndex((ae) => ae.id === element.id) < 0
          ) {
            const brect = element.getBoundingClientRect();
            const bx = x - brect.left; //x position within the element.
            const by = y - brect.top; //y position within the element.
            const gr = Math.floor(offset * 2.5);
            if (!element.style.borderImage)
              element.style.borderImage = `radial-gradient(${gr}px ${gr}px at ${bx}px ${by}px ,rgba(3, 0, 2180,0.5),rgba(2, 129, 255,0.3),transparent ) 9 / ${borderWidth}px / 0px stretch `;
            // console.log("element at", offsets, (rad * 180) / Math.PI, element);

            return [...elementAccumulator, element];
          }
          return elementAccumulator;
        },
        []
      );

      return acc.concat(elements);
    }, []);
  });

  body.onmouseleave = (e) => {
    clearNearBy();
  };
});

if (document.readyState === "complete") {
  carousel();
} else {
  document.onreadystatechange = function () {
    if (document.readyState === "complete") {
      carousel();
    }
  };
}

let list = Products.map((x) => x);
let final_list = [];
// const [products, setProducts] = useState([]);

while (list.length !== 0) {
  const min = 1;
  const max = document.documentElement.clientWidth > 700 ? 3 : 2;

  // const max = Math.min(3, Products.length);
  const rand = getRandomInt(min, max);

  const temp_list = list.slice(0, rand);
  list = list.slice(rand);

  // console.log("rand", rand);
  // console.log("new_list", temp_list);
  // console.log(list);

  final_list.push(temp_list);
}

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="slider">
          <img
            className="home__image slides"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />
          <img
            className="home__image slides"
            src="https://m.media-amazon.com/images/I/81row8GKJyL._SX3000_.jpg"
            alt=""
          />
          <img
            className="home__image slides"
            src="https://m.media-amazon.com/images/I/61-8rBAD68L._SX3000_.jpg"
            alt=""
          />
          <img
            className="home__image slides"
            src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
            alt=""
          />
          <img
            className="home__image slides"
            src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
            alt=""
          />
          <img
            className="home__image slides"
            src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div className="win-grid">
          {final_list.map((chunk) => (
            <div className="home__row">
              {chunk.map((elem) => (
                <Product
                  key={elem.id}
                  id={elem.id}
                  title={elem.title}
                  price={elem.price}
                  rating={elem.rating}
                  image={elem.image}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div id="full__shadow"></div>
    </div>
  );
}

export default Home;
