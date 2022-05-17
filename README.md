# Pair-Project

- What to Cooking!
  - 今の気持ちに応じたレシピご提案します。

## 達成目標

必須要件：
次の要件は必ず満たしてください：

- リンターとフォーマッターを設定する
- テストを実装する
- コミットメッセージ規約に沿ってコミット（参照：Conventional Commits）
- 火曜日ブロック4に各ペア5分間でプロジェクトのプレゼンをする
- プレゼンには次の項目を含めてください：
  - ペアで決めたコンセプト
  - デモ
  - チャレンジ（大変だったこと・頑張ったこと）
  
-あなたがやったことや使ったことをカバーするプロジェクトのREADMEを準備してください。READMEはプロジェクトを使って作業したい人にとって、わかりやすいものでなければなりません。

## 使い方
- ブラウザで`indexx.html`を開く。
- 右か左か選択肢を選んでいくと献立を提案してくれる。
- メニュー名をクリックすると提案した料理のレシピが見れる。

## 機能

- `index.js` で、次のメソッドを実装します。

  - `menue` - randomメソッドを呼び出し、返り値のオブジェクトデータのtextData,urlDataを画面に表示する。
  - `random` - rakutenapi.jsonからデータを読み取り、dataFilterメソッドを呼び出し、返り値の配列のランダムなindex番号にあるオブジェクトデータをcookMenueに代入する。また、ランダムな整数を返り値とする。
  - `dataFilter` - randomメソッドから呼び出され、引数に配列を受け取りuserSelectで指定されたKeyのValueが含まれるデータを新しい配列に入れて返す。


## テストの実行

- ブラウザで `test.html` を開いて実装内容をチェックしてください。

## リソース

これらは非常に役立ちます：

- [楽天API](https://webservice.rakuten.co.jp/documentation/recipe-category-list)
- [楽天レシピ](https://recipe.rakuten.co.jp/)
- [食べたいもの](https://recipe.rakuten.co.jp/recipe/1750088126/)
