import React from "react";
import "../Styles/Header.css";
import $ from "jquery";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function toggleSearchBorder(make) {
  if (make) {
    $(".search__wrapper").css("outline", "3px solid #f3a847");
    $(".search__wrapper").css("border-radius", "4px");
    $(".search__wrapper").css("outline-offset", "-1px");
  } else {
    $(".search__wrapper").css("outline", "none");
  }
}

function toggleShadow(make) {
  if (make) {
    $("#full__shadow").css("display", "block");
  } else {
    $("#full__shadow").css("display", "none");
  }
}

function adjustWidth() {
  if (document.documentElement.clientWidth < 800) {
    var element = document.getElementById("searchDropdownBox");
    element.style.width = "10px";
    $("#searchDropdownBox").css({
      "padding-right": "12px",
      "padding-left": "12px",
    });
  } else {
    $("#width_tmp_option").html($("#searchDropdownBox option:selected").text());
    if (document.getElementById("searchDropdownBox").selectedIndex === 0) {
      $("#searchDropdownBox").width($("#width_tmp_select").width());
    } else {
      $("#searchDropdownBox").width($("#width_tmp_select").width() - 20);
    }
    $("#searchDropdownBox").css({
      "padding-right": "20px",
    });
    $("#searchDropdownBox").change(function () {
      if (document.documentElement.clientWidth > 800) {
        console.log(document.documentElement.clientWidth);
        $("#width_tmp_option").html(
          $("#searchDropdownBox option:selected").text()
        );
        $(this).width($("#width_tmp_select").width() - 20);
      }
    });
  }
}

// const getGeoInfo = () => {
//   axios
//     .get("https://ipapi.co/json/")
//     .then((response) => {
//       let data = response.data;
//       const element = document.getElementById("locationCountry");
//       element.textContent = data.country_name;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

window.onresize = function (event) {
  // showDropDownMenu("", false);
  adjustWidth();
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getUsername(_email) {
  const [first, ...rest] = _email.split("@");
  return first;
}

function Header() {
  const [{ basket, user, country }, dispatch] = useStateValue();

  function showDropDownMenu(index, show) {
    if (user) {
      toggleShadow(show);
      var position = document
        .getElementById("header__optionLineTwoIcon" + index)
        .getBoundingClientRect();
      if (show) {
        // console.log("header__optionLineTwoIcon" + index, position.x, position.y);
        if (index === "") {
          $("#nav__accAndlist").css("left", position.x - 345);
          $("#nav__accAndlist").css("top", "55px");
          $("#nav__arrow").css("left", "75%");
        } else {
          $("#nav__accAndlist").css("left", position.x - 250);
          $("#nav__accAndlist").css("top", position.y + 25);
          $("#nav__arrow").css("left", "54.5%");
        }
        $("#nav__accAndlist").css("visibility", "visible");
      } else {
        $("#nav__accAndlist").css("visibility", "hidden");
        $("#nav__accAndlist").css("top", "0px");
      }
    }
  }

  $(document).ready(function () {
    // getGeoInfo();

    adjustWidth();

    $(document)
      .on("mouseenter", "#header__optionLogin", function () {
        sleep(200).then(() => {
          showDropDownMenu("", true);
        });
      })
      .on("mouseleave", "#header__optionLogin", function () {
        sleep(200).then(() => {
          showDropDownMenu("", false);
        });
      });
    $(document)
      .on("mouseenter", "#header__optionLogin2", function () {
        sleep(200).then(() => {
          showDropDownMenu("2", true);
        });
      })
      .on("mouseleave", "#header__optionLogin2", function () {
        sleep(200).then(() => {
          showDropDownMenu("2", false);
        });
      });

    $(document)
      .on("mouseenter", "#nav__accAndlist", function () {
        if (document.documentElement.clientWidth > 700) {
          sleep(200).then(() => {
            showDropDownMenu("", true);
          });
        } else {
          sleep(200).then(() => {
            showDropDownMenu("2", true);
          });
        }
      })
      .on("mouseleave", "#nav__accAndlist", function () {
        if (document.documentElement.clientWidth > 700) {
          sleep(200).then(() => {
            showDropDownMenu("", false);
          });
        } else {
          sleep(200).then(() => {
            showDropDownMenu("2", false);
          });
        }
      });
  });

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <>
      <div className="header">
        <Link to="/">
          <img
            alt=""
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>
        <div className="">
          <div className="header__optionDelivery">
            <div className="header__optionBloc1">
              <FmdGoodOutlinedIcon
                className="location__icon"
                fontSize="small"
              />
            </div>
            <div className="header__optionBloc2">
              <span className="header__optionLineOne">Deliver to</span>
              <span id="locationCountry" className="header__optionLineTwo">
                {country.name}
              </span>
            </div>
          </div>
        </div>
        <div className="header__search">
          <div className="search__wrapper">
            <div className="header__searchFilter">
              <select
                className="nav__searchDropdown"
                data-nav-selected="0"
                id="searchDropdownBox"
                name="url"
                tabIndex="0"
                title="Search in"
                onChange={() => {}}
              >
                <option
                  id="all_dep_opt"
                  selected="selected"
                  value="search-alias=aps"
                >
                  All
                </option>
                <option value="search-alias=aps">All Departments</option>
                <option value="search-alias=arts-crafts-intl-ship">
                  Arts &amp; Crafts
                </option>
                <option value="search-alias=automotive-intl-ship">
                  Automotive
                </option>
                <option value="search-alias=baby-products-intl-ship">
                  Baby
                </option>
                <option value="search-alias=beauty-intl-ship">
                  Beauty &amp; Personal Care
                </option>
                <option value="search-alias=stripbooks-intl-ship">Books</option>
                <option value="search-alias=fashion-boys-intl-ship">
                  Boys' Fashion
                </option>
                <option value="search-alias=computers-intl-ship">
                  Computers
                </option>
                <option value="search-alias=deals-intl-ship">Deals</option>
                <option value="search-alias=digital-music">
                  Digital Music
                </option>
                <option value="search-alias=electronics-intl-ship">
                  Electronics
                </option>
                <option value="search-alias=fashion-girls-intl-ship">
                  Girls' Fashion
                </option>
                <option value="search-alias=hpc-intl-ship">
                  Health &amp; Household
                </option>
                <option value="search-alias=kitchen-intl-ship">
                  Home &amp; Kitchen
                </option>
                <option value="search-alias=industrial-intl-ship">
                  Industrial &amp; Scientific
                </option>
                <option value="search-alias=digital-text">Kindle Store</option>
                <option value="search-alias=luggage-intl-ship">Luggage</option>
                <option value="search-alias=fashion-mens-intl-ship">
                  Men's Fashion
                </option>
                <option value="search-alias=movies-tv-intl-ship">
                  Movies &amp; TV
                </option>
                <option value="search-alias=music-intl-ship">
                  Music, CDs &amp; Vinyl
                </option>
                <option value="search-alias=pets-intl-ship">
                  Pet Supplies
                </option>
                <option value="search-alias=instant-video">Prime Video</option>
                <option value="search-alias=software-intl-ship">
                  Software
                </option>
                <option value="search-alias=sporting-intl-ship">
                  Sports &amp; Outdoors
                </option>
                <option value="search-alias=tools-intl-ship">
                  Tools &amp; Home Improvement
                </option>
                <option value="search-alias=toys-and-games-intl-ship">
                  Toys &amp; Games
                </option>
                <option value="search-alias=videogames-intl-ship">
                  Video Games
                </option>
                <option value="search-alias=fashion-womens-intl-ship">
                  Women's Fashion
                </option>
              </select>
              <select id="width_tmp_select">
                <option id="width_tmp_option"></option>
              </select>
            </div>
            <input
              onFocus={() => {
                adjustWidth();
                toggleShadow(true);
                toggleSearchBorder(true);
              }}
              onBlur={() => {
                toggleShadow(false);
                toggleSearchBorder(false);
              }}
              className="header__searchInput"
              placeholder=""
              type="text"
            />
            <SearchIcon className="header__searchIcon" />
          </div>
        </div>

        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div
              id="header__optionLogin"
              onClick={() => {
                if (!user) {
                  handleAuthenticaton();
                }
              }}
              className="header__option header__optionLogin"
            >
              <span className="header__optionLineOne">
                Hello {!user ? "Guest," : getUsername(user.email) + ","}
              </span>
              <span className="header__optionLineTwo">
                {user ? (
                  <span className="header__optionLineTwoIn">
                    <span>Account & Lists</span>
                    <ArrowDropDownIcon
                      id="header__optionLineTwoIcon"
                      fontSize="small"
                    />
                  </span>
                ) : (
                  "Sign In"
                )}
              </span>
            </div>
          </Link>
          <Link to="/orders">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          <Link to="/">
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link>
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div id="nav__accAndlist" className="nav__accAndlist">
        <div className="nav__accAndlistWrapper">
          <div id="nav__arrow" className="nav__arrow"></div>
          <div className="nav__accAndlistContainer">
            <div className="nav__wishlist">
              <div className="nav__accAndlist__title">Your Lists</div>

              <a href="" className="nav__link ">
                <span className="nav__text">Create a List</span>
              </a>
              <a href="" className="nav__link">
                <span className="nav__text">Find a List or Registry</span>
              </a>
              <a href="" className="nav__link ">
                <span className="nav__text">AmazonSmile Charity Lists</span>
              </a>
              <a href="" className="nav__link ">
                <span className="nav__text">Your Wishlist</span>
              </a>
            </div>
            <div className="nav__separator"></div>
            <div className="nav__account">
              <div className="nav__accAndlist__title">Your Account</div>
              <a href="" className="nav__link ">
                <span className="nav__text">Account</span>
              </a>
              <a href="" className="nav__link ">
                <span className="nav__text">Orders</span>
              </a>
              <a href="" className="nav__link ">
                <span className="nav__text">Recommendations </span>
              </a>
              <a href="" className="nav__link ">
                <span className="nav__text">Browsing History </span>
              </a>
              <a href="" className="nav__link ">
                <span className="nav__text">Watchlist</span>
              </a>
              <a href="" className="nav__link ">
                <span className="nav__text">Video Purchases & Rentals</span>
              </a>
              <a href="" className="nav__link ">
                <span className="nav__text">Kindle Unlimited </span>
              </a>
              <a href="" className="nav__link ">
                <span className="nav__text">Content & Devices </span>
              </a>
              <a href="" className="nav__link ">
                <span className="nav__text">Subscribe & Save Items</span>
              </a>
              <a href="" className="nav__link ">
                <span className="nav__text">Memberships & Subscriptions </span>
              </a>
              <a href="" className="nav__link ">
                <span className="nav__text">Music Library</span>
              </a>
              <a href="" className="nav__link ">
                <span className="nav__text">Switch Accounts</span>
              </a>
              <a href="" className="nav__link ">
                <span
                  onClick={() => {
                    handleAuthenticaton();
                  }}
                  className="nav__text"
                >
                  {" "}
                  Sign Out
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mini__header">
        <Link to="#">
          <div className="header__optionDelivery">
            <div className="header__optionBloc1">
              <FmdGoodOutlinedIcon
                className="location__icon"
                fontSize="small"
              />
            </div>
            <div className="header__optionBloc2">
              <span className="header__optionLineOne">Deliver to :</span>
              <span id="locationCountry" className="header__optionLineTwo">
                {country.name}
              </span>
            </div>
          </div>
        </Link>
        <Link to={!user && "/login"}>
          <div
            onClick={() => {
              if (!user) {
                handleAuthenticaton();
              }
            }}
            id="header__optionLogin2"
            className="header__option"
          >
            <span className="header__optionLineOne">
              Hello {!user ? "Guest," : getUsername(user.email) + ","}
            </span>
            <span className="header__optionLineTwo">
              {user ? (
                <span className="header__optionLineTwoIn">
                  <span>{"Account & Lists"}</span>
                  <ArrowDropDownIcon
                    id="header__optionLineTwoIcon2"
                    fontSize="small"
                  />
                </span>
              ) : (
                "Sign In"
              )}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Header;
