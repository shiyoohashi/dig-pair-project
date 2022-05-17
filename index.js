// const jsonData = require("./rakutenapi.json");
//const axios = require("axios").default

<<<<<<< HEAD
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
=======
const linkData = document.querySelector(".cook-link a");
const button1 = document.querySelector(".select-button .button-1");
const button2 = document.querySelector(".select-button .button-2");
const image = document.querySelector(".cook-imag img");
const cookEl = document.querySelector("#cook-id");
const buttonEl = document.querySelector("#select-button-id");

let button1Data = 0;
let button2Data = 0;
let counter = 0;
button1.addEventListener("click", () => addData(1));
button2.addEventListener("click", () => addData(2));

const button1Text = [
  "肉",
  "ガッツリ",
  "疲れてる",
  "明日仕事",
  "犬派",
  "裸眼",
  "悟空",
  "体育会",
  "iOS",
  "マウス",
  "果実酒",
  "ディズニー",
  "岡山市",
];
const button2Text = [
  "魚",
  "あっさり",
  "元気一杯",
  "華金",
  "ニャンコ",
  "矯正",
  "ベジータ",
  "文化人",
  "Android",
  "タッチパット",
  "スピリタス",
  "鷲羽山ハイランド(岡山県)",
  "倉敷市",
];

const categoryData = {
  肉: {
    ID: 10,
    imag: "https://recipe.r10s.jp/recipe-space/d/strg/ctrl/3/854814047b5b8704c50f8105c57a52be739bffc0.92.2.3.2.jpg?interpolation=lanczos-none&fit=around|716:716&crop=716:716;*,*",
  },
  魚: {
    ID: 11,
    img: "https://recipe.r10s.jp/recipe-space/d/strg/ctrl/3/d6183057007dacda0bfa7ac575099192b3456dc2.21.2.3.2.jpg?interpolation=lanczos-none&fit=around|716:716&crop=716:716;*,*",
  },
  野菜: {
    ID: 12,
    img: "https://recipe.r10s.jp/recipe-space/d/strg/ctrl/3/eb2f27f434436225566c034083f98ddf2aaa0a50.50.2.3.2.jpg?interpolation=lanczos-none&fit=around|716:716&crop=716:716;*,*",
  },
  ライス: {
    ID: 14,
    img: "https://recipe.r10s.jp/recipe-space/d/strg/ctrl/3/49dd7ecaecd3109c37b87f10b851a9ba597a077b.29.2.3.2.jpg?interpolation=lanczos-none&fit=around|716:716&crop=716:716;*,*",
  },
  洋食: {
    ID: 13,
    img: "https://recipe.r10s.jp/recipe-space/d/strg/ctrl/3/519e6f5f194b010c5cd524ae4d28d80dc94e2862.82.2.3.2.jpg?interpolation=lanczos-none&fit=around|716:716&crop=716:716;*,*",
  },
  麺類: {
    ID: 16,
    img: "https://recipe.r10s.jp/recipe-space/d/strg/ctrl/3/2bde3f280f22c97c6ac5ece03da674cf19daa177.92.2.3.2.jpg?interpolation=lanczos-none&fit=around|716:716&crop=716:716;*,*",
  },
  汁物: {
    ID: 17,
    img: "https://recipe.r10s.jp/recipe-space/d/strg/ctrl/3/15fd04051637c8010813fd95c1a512e24e10ea2c.82.2.3.2.jpg?interpolation=lanczos-none&fit=around|716:716&crop=716:716;*,*",
  },
  サラダ: {
    ID: 18,
    img: "https://recipe.r10s.jp/recipe-space/d/strg/ctrl/3/4da132475d328a248e1766f2b6c97a0525783223.81.2.3.2.jpg?interpolation=lanczos-none&fit=around|716:716&crop=716:716;*,*",
  },
  お弁当: {
    ID: 20,
    img: "https://recipe.r10s.jp/recipe-space/d/strg/ctrl/3/18bfcc0372e23e289cc0952efa7d25223c83b4e8.30.2.3.2.jpg?interpolation=lanczos-none&fit=around|716:716&crop=716:716;*,*",
  },
  スイーツ系: {
    ID: 21,
    img: "https://recipe.r10s.jp/recipe-space/d/strg/ctrl/3/efa535691fbe09aa36c1cfaf5d02c70411da3620.71.2.3.2.jpg?interpolation=lanczos-none&fit=around|716:716&crop=716:716;*,*",
  },
  パン系: {
    ID: 22,
    img: "https://recipe.r10s.jp/recipe-space/d/strg/ctrl/3/74b5343b83a3456d31f443ed647e2f5970c640fe.93.2.3.2.jpg?interpolation=lanczos-none&fit=around|716:716&crop=716:716;*,*",
  },
  鍋: {
    ID: 23,
    img: "https://recipe.r10s.jp/recipe-space/d/strg/ctrl/3/f1ba020e625d840231ed63876623de770a0de0bf.60.2.3.2.jpg?interpolation=lanczos-none&fit=around|716:716&crop=716:716;*,*",
  },
  パーティー: {
    ID: 24,
    img: "https://recipe.r10s.jp/recipe-space/d/strg/ctrl/3/86275f0d1b6a16680912252ef088d716460bfc48.33.2.3.2.jpg?interpolation=lanczos-none&fit=around|716:716&crop=716:716;*,*",
  },

  卵: {
    ID: 33,
    img: "https://recipe.r10s.jp/recipe-space/d/strg/ctrl/3/8ba3daadf08faa47e4606e49efb5b0373e5ba166.29.2.3.2.jpg?interpolation=lanczos-none&fit=around|716:716&crop=716:716;*,*",
  },
};

class Cook {
  constructor() {
    this.cookMenue = {};
    this.userSelect = undefined;
  }

  menue = async () => {
    await this.random();
    const result = this.cookMenue;
    console.log(result);
    // image.src =
    linkData.href = result.categoryUrl;
    linkData.textContent = result.categoryName;
    cookEl.style.display = "inline";
    buttonEl.style.display = "none";
    return result;
  };

  random = () => {
    return fetch("./rakutenapi.json")
      .then((res) => res.json())
      .then((data) => {
        const filterData = this.dataFilter(data.result.medium);
        // console.log("filterData: ", filterData);
        const randomNum = Math.floor(Math.random() * filterData.length);
        this.cookMenue = filterData[randomNum];
        return randomNum;
      });
  };

  dataFilter = (data) => {
    console.log("select", this.userSelect);
    const selectNum = categoryData[this.userSelect]["ID"];
    console.log("image: ", image);
    image.src = categoryData[this.userSelect]["img"];
    console.log("selectNum: ", selectNum);
    return data.filter(
      (menue) => menue.categoryUrl.slice(38, 40) === String(selectNum)
    );
  };
}

const cook = new Cook();
// cook.menue();

function addData(num) {
  if (counter === 0 && num === 2) {
    button2Data += 100;
    console.log("button2Data", button2Data);
  } else if (num === 1) {
    button1Data++;
    console.log("button1Data: ", button1Data);
  } else {
    button2Data++;
    console.log("button2Data: ", button2Data);
  }
  button1.innerText = button1Text[counter];
  button2.innerText = button2Text[counter];
  counter++;
  if (counter > button1Text.length) {
    //button1Dataなどに応じてthis.userSelectを決める
    console.log("cooking!");
    console.log("button2Data: ", button2Data);
    if (button2Data >= 100) {
      cook.userSelect = "パーティー";
    } else if (button1Data > button2Data) {
      console.log("if", button1Data);
      switch (button1Data) {
        case 7:
          cook.userSelect = "麺類";
          break;
        case 9:
          cook.userSelect = "洋食";
          break;
        case 11:
          cook.userSelect = "野菜";
          break;
        case 13:
          cook.userSelect = "肉";
          break;
        default:
          console.log("default");
          cook.userSelect = "スイーツ系";
          break;
      }
    } else if (button2Data > button1Data) {
      console.log("elese if");
      switch (button2Data) {
        case 7:
          cook.userSelect = "パン系";
          break;
        case 9:
          cook.userSelect = "卵";
          break;
        case 11:
          cook.userSelect = "サラダ";
          break;
        case 13:
          cook.userSelect = "魚";
          break;
        default:
          console.log("default");
          cook.userSelect = "スイーツ系";
          break;
      }
    } else {
      console.log("else");
      cook.userSelect = "ライス";
    }
    cook.menue();
  }
}
>>>>>>> a12822771ce18f1e948cb11722c22431cc57c753
