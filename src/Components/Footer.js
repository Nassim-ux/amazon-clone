import React from "react";
import "../Styles/Footer.css";

import { Link } from "react-router-dom";
import $ from "jquery";

import { FooterExtraOptions, FooterOptions } from "../Data/listFooterOptions";
import Languages from "../Data/listLanguages";

import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { useStateValue } from "./StateProvider";
import Image from "./Image";
import { Currencies } from "../Data/listCurrencies";
import { Countries } from "../Data/listCountries";

function replaceClass(id, newClass) {
  var elem = document.getElementById(id);
  elem.className = "";
  elem.classList.add(newClass);
}

function changeStyle(id, text) {
  replaceClass(id, "footer__extraCard" + text);
}

function toggleCardClass(id, cond, text) {
  if (cond === "enter") {
    changeStyle(id, text);
  } else if (cond === "leave") {
    changeStyle(id, text);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function Footer() {
  const [{ language, currency, country }, dispatch] = useStateValue();

  function showDropDownMenu(id, id_dpd, show, x, y) {
    var position = document.getElementById(id).getBoundingClientRect();
    if (show) {
      console.log(id, id_dpd, position.x, position.y);

      $("#nav__" + id_dpd + "list").css("left", position.x - x);
      $("#nav__" + id_dpd + "list").css("top", position.y - y);
      // $("#nav__arrow").css("left", "75%");

      $("#nav__" + id_dpd + "list").css("visibility", "visible");
    } else {
      $("#nav__" + id_dpd + "list").css("visibility", "hidden");
      $("#nav__" + id_dpd + "list").css("top", "0px");
    }
  }

  $(document).ready(function () {
    $(document)
      .on("mouseenter", "#footer__language", function () {
        sleep(200).then(() => {
          showDropDownMenu("footer__langArrowDown", "lang", true, 132, 10);
          showDropDownMenu(
            "footer__currencyArrowDown",
            "currency",
            false,
            224,
            10
          );
          showDropDownMenu(
            "footer__countryArrowDown",
            "country",
            false,
            170,
            10
          );
        });
      })
      .on("mouseleave", "#footer__language", function () {
        showDropDownMenu("footer__langArrowDown", "lang", false, 132, 10);
      });

    $(document)
      .on("mouseenter", "#nav__langlist", function () {
        sleep(200).then(() => {
          showDropDownMenu("footer__langArrowDown", "lang", true, 132, 10);
          showDropDownMenu(
            "footer__currencyArrowDown",
            "currency",
            false,
            224,
            10
          );
          showDropDownMenu(
            "footer__countryArrowDown",
            "country",
            false,
            170,
            10
          );
        });
      })
      .on("mouseleave", "#nav__langlist", function () {
        showDropDownMenu("footer__langArrowDown", "lang", false, 132, 10);
      });

    $(document)
      .on("mouseenter", "#footer__currency", function () {
        sleep(200).then(() => {
          showDropDownMenu(
            "footer__currencyArrowDown",
            "currency",
            true,
            224,
            10
          );
          showDropDownMenu(
            "footer__countryArrowDown",
            "country",
            false,
            170,
            10
          );

          showDropDownMenu("footer__langArrowDown", "lang", false, 132, 10);
        });
      })
      .on("mouseleave", "#footer__currency", function () {
        showDropDownMenu(
          "footer__currencyArrowDown",
          "currency",
          false,
          224,
          10
        );
      });

    $(document)
      .on("mouseenter", "#nav__currencylist", function () {
        sleep(200).then(() => {
          showDropDownMenu(
            "footer__currencyArrowDown",
            "currency",
            true,
            224,
            10
          );
          showDropDownMenu(
            "footer__countryArrowDown",
            "country",
            false,
            170,
            10
          );

          showDropDownMenu("footer__langArrowDown", "lang", false, 132, 10);
        });
      })
      .on("mouseleave", "#nav__currencylist", function () {
        showDropDownMenu(
          "footer__currencyArrowDown",
          "currency",
          false,
          224,
          10
        );
      });

    $(document)
      .on("mouseenter", "#footer__country", function () {
        sleep(200).then(() => {
          showDropDownMenu(
            "footer__countryArrowDown",
            "country",
            true,
            170,
            10
          );
          showDropDownMenu(
            "footer__currencyArrowDown",
            "currency",
            false,
            224,
            10
          );

          showDropDownMenu("footer__langArrowDown", "lang", false, 132, 10);
        });
      })
      .on("mouseleave", "#footer__country", function () {
        showDropDownMenu("footer__countryArrowDown", "country", false, 170, 10);
      });

    $(document)
      .on("mouseenter", "#nav__countrylist", function () {
        sleep(200).then(() => {
          showDropDownMenu(
            "footer__countryArrowDown",
            "country",
            true,
            170,
            10
          );
          showDropDownMenu(
            "footer__currencyArrowDown",
            "currency",
            false,
            224,
            10
          );
          showDropDownMenu("footer__langArrowDown", "lang", false, 132, 10);
        });
      })
      .on("mouseleave", "#nav__countrylist", function () {
        showDropDownMenu("footer__countryArrowDown", "country", false, 170, 10);
      });
  });

  const changeLanguage = (language) => {
    dispatch({
      type: "SET_LANGUAGE",
      language: language,
    });
  };

  const changeCurrency = (currency) => {
    dispatch({
      type: "SET_CURRENCY",
      currency: currency,
    });
  };

  const changeCountry = (country) => {
    dispatch({
      type: "SET_COUNTRY",
      country: country,
    });
  };

  return (
    <div className="footer">
      <div
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="footer__backToTop"
      >
        <span>Back to top</span>
      </div>
      <div className="footer__gridWrapper">
        <div className="footer__grid">
          {FooterOptions.map((element) => (
            <div className="footer__section">
              <div className="footer__sectionTitle">
                {element.section_title}
              </div>
              <section className="footer__sectionList">
                {element.options.map((sub_element) => (
                  <p>
                    <span>{sub_element.prefix}</span>
                    <a className="section__option" href={sub_element.link}>
                      {sub_element.name}
                    </a>
                  </p>
                ))}
              </section>
            </div>
          ))}
        </div>
      </div>
      <div className="footer__bar">
        <div className="footer__barWrapper">
          <Link to="/">
            <div className="footer__barLogo">
              <img
                alt=""
                className="footer__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              />
            </div>
          </Link>
          <div className="footer__barParams">
            <div
              id="footer__language"
              className="footer__paramBox footer__language"
            >
              <LanguageIcon className="footer__languageIcon" fontSize="small" />

              <span className="footer__paramText">{language.text}</span>
              <span className="footer__paramArrow">
                <ArrowDropUpIcon
                  className="footer__paramArrowUp"
                  fontSize="small"
                />
                <ArrowDropDownIcon
                  id="footer__langArrowDown"
                  className="footer__paramArrowDown"
                  fontSize="small"
                />
              </span>
            </div>
            <div
              id="footer__currency"
              className="footer__paramBox footer__currency"
            >
              <span className="footer__currencyIcon">{currency.symbol}</span>
              <span className="footer__paramText">
                {currency.code + " - " + currency.name}
              </span>
              <span className="footer__paramArrow">
                <ArrowDropUpIcon
                  className="footer__paramArrowUp"
                  fontSize="small"
                />
                <ArrowDropDownIcon
                  id="footer__currencyArrowDown"
                  className="footer__paramArrowDown"
                  fontSize="small"
                />
              </span>
            </div>
            <div
              id="footer__country"
              className="footer__paramBox footer__country"
            >
              <span className="footer__countryIcon">
                <Image
                  className="footer__countryIconIn"
                  fileName={country.code.toLowerCase()}
                  alt=""
                  height="14"
                  width="22"
                ></Image>
              </span>
              <span className="footer__paramText">{country.name}</span>
              <span className="footer__paramArrow">
                <ArrowDropUpIcon
                  className="footer__paramArrowUp"
                  fontSize="small"
                />
                <ArrowDropDownIcon
                  id="footer__countryArrowDown"
                  className="footer__paramArrowDown"
                  fontSize="small"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="nav__wrapper">
          <div id="nav__langlist" className="nav__langlist">
            <div className="nav__hiddenlistWrapper">
              <div
                id="nav__langlistarrow"
                className="nav__hiddenlistarrow"
              ></div>
              <div className="nav__hiddenlistContainer">
                <div className="nav__hiddenlist__title">
                  <span>Change Language</span>
                  <span>Learn more</span>
                </div>
                <div className="nav__langlistActiveOption">
                  <span className="nav__langlistOption nav__langlistOption__selected">
                    <input
                      type="radio"
                      name="languageSelected"
                      checked="checked"
                      value={"lang" + language.code}
                    ></input>
                    {language.text + " - " + language.code}
                  </span>
                </div>
                <div className="nav__hiddenlistSeparator"></div>
                <div className="nav__langOptions">
                  <fieldset className="nav__fieldsetlangOptions">
                    {Languages.map((element) => {
                      if (language.code !== element.code) {
                        return (
                          <span
                            onClick={() => {
                              const _l = {
                                name: element.name,
                                text: element.text,
                                code: element.code,
                              };
                              changeLanguage(_l);
                            }}
                            className="nav__langlistOption"
                          >
                            <input
                              type="radio"
                              name="language"
                              value={"lang" + element.code}
                            ></input>
                            {element.text + " - " + element.code}
                          </span>
                        );
                      } else {
                        return <></>;
                      }
                    })}
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
          <div id="nav__currencylist" className="nav__currencylist">
            <div className="nav__hiddenlistWrapper">
              <div
                id="nav__currencylistarrow"
                className="nav__hiddenlistarrow"
              ></div>
              <div className="nav__hiddenlistContainer">
                <div className="nav__hiddenlist__title">
                  <span>Change Currency</span>
                  <span>Learn more</span>
                </div>
                <div className="nav__currencylistActiveOption">
                  <span className="nav__currencylistOption nav__currencylistOption__selected">
                    <input
                      type="radio"
                      name="currencySelected"
                      checked="checked"
                      value={"lang" + currency.code}
                    ></input>
                    {currency.name +
                      " - " +
                      currency.code +
                      " (" +
                      currency.symbol +
                      ")"}
                  </span>
                </div>
                <div className="nav__hiddenlistSeparator"></div>
                <div className="nav__currencyOptions">
                  <fieldset className="nav__fieldsetcurrencyOptions">
                    {Currencies.map((element) => {
                      if (currency.code !== element.code && element.fav) {
                        return (
                          <span
                            onClick={() => {
                              const _c = {
                                name: element.name,
                                symbol: element.symbol,
                                code: element.code,
                              };
                              changeCurrency(_c);
                            }}
                            className="nav__currencylistOption"
                          >
                            <input
                              type="radio"
                              name="currency"
                              value={"currency" + element.code}
                            ></input>
                            {element.name +
                              " - " +
                              element.code +
                              " (" +
                              element.symbol +
                              ")"}
                          </span>
                        );
                      } else {
                        return <></>;
                      }
                    })}
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
          <div id="nav__countrylist" className="nav__countrylist">
            <div className="nav__hiddenlistWrapper">
              <div
                id="nav__countrylistarrow"
                className="nav__hiddenlistarrow"
              ></div>
              <div className="nav__hiddenlistContainer">
                <div className="nav__hiddenlist__title">
                  <span>Change Country</span>
                  <span>Learn more</span>
                </div>
                <div className="nav__countrylistActiveOption">
                  <span className="nav__countrylistOption nav__countrylistOption__selected">
                    <input
                      type="radio"
                      name="countrySelected"
                      checked="checked"
                      value={"lang" + country.code}
                    ></input>
                    {country.code + " - " + country.name}
                  </span>
                </div>
                <div className="nav__hiddenlistSeparator"></div>
                <div className="nav__countryOptions">
                  <fieldset className="nav__fieldsetcountryOptions">
                    {Countries.map((element) => {
                      if (country.code !== element.code && element.fav) {
                        return (
                          <span
                            onClick={() => {
                              const _c = {
                                name: element.name,
                                code: element.code,
                              };
                              changeCountry(_c);
                            }}
                            className="nav__countrylistOption"
                          >
                            <input
                              type="radio"
                              name="country"
                              value={"country" + element.code}
                            ></input>
                            {element.code + " - " + element.name}
                          </span>
                        );
                      } else {
                        return <></>;
                      }
                    })}
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__extra">
        <div className="footer__extraGrid">
          {FooterExtraOptions.map((element, index) => (
            <div className="footer__extraCard">
              <a
                onMouseEnter={(e) => {
                  toggleCardClass(
                    "footer__extraCardTitle" + index,
                    "enter",
                    "Title__hover"
                  );
                  toggleCardClass(
                    "footer__extraCardSubTitle" + index,
                    "enter",
                    "SubTitle__hover"
                  );
                }}
                onMouseLeave={(e) => {
                  toggleCardClass(
                    "footer__extraCardTitle" + index,
                    "leave",
                    "Title"
                  );
                  toggleCardClass(
                    "footer__extraCardSubTitle" + index,
                    "leave",
                    "SubTitle"
                  );
                }}
                className="section__cardOption"
                href={element.link}
              >
                <p
                  id={"footer__extraCardTitle" + index}
                  className="footer__extraCardTitle"
                >
                  {element.section_title}
                </p>
                <p
                  id={"footer__extraCardSubTitle" + index}
                  className="footer__extraCardSubTitle"
                >
                  {element.section_subtitle}
                </p>
              </a>
            </div>
          ))}
        </div>
        <div className="footer__credits">
          <ul>
            <li>
              <span className="footer__creditsCoU">Conditions of Use</span>
            </li>
            <li>
              <span className="footer__creditsPN">Privacy Notice</span>
            </li>
            <li>
              <span className="footer__creditsIBAds">Internet-Based Ads</span>
            </li>
            <li>
              <span className="footer__creditsCopyright">
                © 2022, FakeAmazon, Inc. or its affiliates
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
