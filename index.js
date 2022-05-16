// const jsonData = require("./rakutenapi.json");
//const axios = require("axios").default;

const nameData = document.querySelector(".cook-name p");
const linkData = document.querySelector(".cook-link a");

const categoryData = {
  肉: 10,
  魚: 11,
  野菜: 12,
  ライス: 14,
  洋食: 15,
  麺類: 16,
  汁物: 17,
  サラダ: 18,
  お弁当: 20,
  スイーツ系: 21,
  パン系: 22,
  鍋: 23,
  パーティー: 24,
  郷土料理: 25,
  定番料理: 30,
  加工肉: 31,
  加工魚: 32,
  卵: 33,
  フルーツ: 34,
  大豆系: 35,
  簡単料理: 36,
};

class Cook {
  constructor() {
    this.cookMenue = {};
    this.userSelect = "肉";
  }

  menue = async () => {
    await this.random();
    const result = this.cookMenue;
    console.log(result);
    nameData.innerText = result.categoryName;
    linkData.href = result.categoryUrl;
    const linkNum = linkData.href.slice(38, 40);
    linkData.textContent = "リンク先";
    return result;
  };

  random = () => {
    return fetch("./rakutenapi.json")
      .then((res) => res.json())
      .then((data) => {
        const filterData = this.dataFilter(data.result.medium);
        // console.log("filterData: ", filterData);
        const randomNum = Math.floor(Math.random() * filterData.length);
        this.cookMenue = data.result.medium[randomNum];
        return randomNum;
      });
  };

  dataFilter = (data) => {
    const selectNum = categoryData[this.userSelect];
    return data.filter(
      (menue) => menue.categoryUrl.slice(38, 40) === String(selectNum)
    );
  };
}

const test = new Cook();
test.menue();

//module.exports = Cook;
