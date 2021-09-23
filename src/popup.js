'use strict'; //決まり文句（エラーチェックをしてくれる）

//結果を表示する領域を取得
var results = document.getElementById("results");

//結果を格納する配列を宣言
var array = [];

//★ブラウザのタブを取得
chrome.tabs.query({active: true, lastFocusedWindow: true }, function (tabs) {

    //取得したタブ数分を繰り返し
    for (var i = 0; i < tabs.length; i++) {
        var output = tabs[i].url; //urlを取得
        array.push(output);
    }

    results.value = array.join("\n"); //arrayの要素を改行で区切ってresultsに表示
    results.select(); //resultsを選択状態に

});