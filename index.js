// const jsonData = require("./rakutenapi.json");
//const axios = require("axios").default;

const nameData = document.getElementsByClassName("cook-name")[0];
const linkData = document.getElementsByClassName("cook-link")[0];

class Cook {
  constructor() {
    this.test = 1;
  }

  random = () => {
    const cookData = fetch("./rakutenapi.json")
      .then((res) => res.json())
      .then((data) => {
        const result = data.result.medium[0];
        console.log(result);
        nameData.innerText = result.categoryName;
        console.log("url", typeof result.categoryUrl);
        linkData.src = string(result.categoryUrl);
        console.log("----");
      });
    // console.log(jsonData);
    // console.log(result);
    return "tests";
  };
}

const test = new Cook();
test.random();

//module.exports = Cook;
