var texts = ["網頁設計師", "平面設計師", "遊戲開發者"];    // 打字 - 陣列
var speed = 300;                                        // 打字速度 - 毫秒
var index = 0;                                          // 索引值 - 從 0 開始
var classname = ".type";                                // 類別名稱

// 函式 打字
function type() {

    var t = document.querySelector(classname);          // 搜尋元素

    var letter = texts[index].slice(0, 1);              // 切割文字(開始位置，切割數量)

    t.innerHTML = letter;                               // 插入 HTML = 文字
}

document.addEventListener("DOMContentLoded", type());   // DOMContentLoded 網頁載入完成後執行