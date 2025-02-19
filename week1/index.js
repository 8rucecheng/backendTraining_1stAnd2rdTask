// ### 題目一：變數練習
// 情境：Alex 正在健身房鍛鍊，他正在使用跑步機慢跑，請用變數描述以下狀態：

// 1. 請宣告一個 `const` 變數名稱為 `alexAge`，並賦予值為 `25`。
// 2. 請宣告一個 `const` 變數名稱為 `alexMembershipID`，並賦予值為字串 `"GYM2024-12345"`。
// 3. 請宣告一個 `const` 變數名稱為 `isRunningOnTreadmill`，並賦予值為 `true`。
// 4. 使用 `console.log()` 輸出 `alexAge`、`alexMembershipID` 和 `isRunningOnTreadmill`。

//題目一之1.的回答
const alexAge = 25;
//題目一之2.的回答
const alexMembershipID = "GYM2024-12345";
//題目一之3.的回答
const isRunningOnTreadmill = true
//題目一之4.的回答
console.log(alexAge, alexMembershipID, isRunningOnTreadmill)


// ### 題目二：變數命名練習
// - 瑜伽團課 - 300 元
// - 重訓團課 - 500 元
// - 重訓 1 對 1 課程 - 1500 元
// 情境：Alex 這個月的運動預算有 3000 元
// 請修改以下中文變數名稱，讓他符合變數語意

//題目二的回答
const yogaGroupClass = 300;
const weightTrainingGroupClass = 500;
const weightTrainingPersonalClass = 1500;
const AlexSportBudgetThisMonth = 3000;


// ### 題目三：變數計算
// 呈上題，Alex 想要規劃好自己的運動課程，需符合以下三個條件，請將花費總數計算在 AlexBudget 上，一起幫幫他吧！
// 條件一：一定至少要買 1 堂重訓團課和瑜伽團課
// 條件二：瑜伽團課只能一次買 3 堂
// 條件三：一定要花到 2400 以上，並購買 5 堂課程

//題目三的回答
let AlexBudget = AlexSportBudgetThisMonth - ( weightTrainingGroupClass + yogaGroupClass*3 + weightTrainingPersonalClass );
console.log(`Alex 買完課程了，他一共剩下 ${AlexBudget} 元`);


// ### 題目四：線稿圖截圖，看圖宣告變數
// 請參考資料夾內 q4.webp 圖片
// 請依照你看到的內容來嘗試設計變數和值（至少 3 個）

//題目四的回答
let totalprice = 2520;
let courseQuantity = 14;
let courseMinute = 50;
let courseprice = 180;
let discount = 0.9;


// ### 題目五：布林值與變數定義，看是否有用對 const, let
// 情境：Alex 在往健身房的路上，望向城市的風景，請描述她看到的一切，並宣告變數與賦予值
// 4-1. Alex 在等紅綠燈，他抬頭看一下現在是紅燈，還有 28 秒綠燈（最多 3 個宣告）
// 4-2. 目前一起等待的機車有 8 台
// 4.3. Alex 望向天空，看到天上有 5 朵白雲和 1 顆太陽

//題目五之4-1.的回答
let lampRed = true;
let AlexWaitting = true;
let WaittingSeconds = 28;
//題目五之4-2.的回答
let motocycleWaittingQuantity = 8;
//題目五之4-3.的回答
let cloudQuantity = 5;
const sunQuantity = 1;


// ### 題目六：情境題：簡單變數計算
// 情境：Alex 每天都會帶著 2000cc 的水壺
// 他早上喝了 500cc
// 中午又喝了 800cc
// 下午去健身前，先裝了 1000cc 的水
// 健身時，又喝掉了 700cc
// 那麼他的水壺還剩下多少 cc 的水？
// 以下的 Code 寫到一半，再請幫幫 Alex

//題目六的回答
let myWater = 2000; // 水壺容量
myWater -= 500; // 早上喝了 500cc
myWater -= 800; // 中午喝了 800cc
myWater += 1000; // 去健身房加水 1000cc
myWater -= 700; // 健身房喝了 700cc
console.log(`Alex 的水壺還有 ${myWater}cc 的水`);


// ### 題目七：情境題：變數計算
// 情境：Anna 每週都會到單次計費型的健身房運動，週日運動結束後，想知道自己本週的消費金額，但結帳系統出了點問題，Anna 決定自己用 JS 來計算。
// Anna 的總金額（totalBill）先從零開始計算。
// 健身房計費為：每小時器械使用費 50 元，每堂團體課程費用 150 元
// 她本週用了器械 3 小時。
// 她本週參加了 2 堂團體課程。

//題目七的回答
let totalBill = 0;
const machineUsePrice = 50;
const groupCoursePrice = 150;
let machineUseHours = 3;
let groupCourseQuantity = 2;
let machineUsePriceTotal = machineUsePrice * machineUseHours;
let groupClassesTotal = groupCoursePrice * groupCourseQuantity;
let totalBill = machineUsePriceTotal + groupClassesTotal;
console.log(
  `Anna 本週器械使用費共 ${machineUsePriceTotal} 元，團體課費用共 ${groupClassesTotal} 元，一共消費金額是 ${totalBill}元`
);


// ### 題目八：變數重新賦予值
// 情境：請依照以下程式碼告知答案是多少，並在下方用註解方式寫上這五行程式碼做了什麼事
// 以下程式碼請勿變更
let a = 8;
let b = 0;
a = 13;
a = b + 4;
a - b;
b += 1;

// ### 題目九：型別查詢
// 請不要觀看 console.log，透過註解告知解答每個變數的型別
let c = 'world';
let d = 456;
let e = c + d;
let f = false;
let g = d + d;
let h = f + g;

// 請從以下新增註解，告知上面每行各別是哪些型別
//題目八的回答
let a = 8; //宣告一個「數字型別」的變數，名稱為「a」，賦值為「8」
let b = 0; //宣告一個「數字型別」的變數，名稱為「b」，賦值為「0」
a = 13; //針對變數「a」，重新賦值為「13」
a = b + 4; //針對變數「a」，重新賦值為「4」
a - b; //計算「a-b」，結果為「4」
b += 1; //針對變數「b」，重新賦值為「1」

//題目九的回答
let c = 'world'; //宣告一個「字串型別」的變數，名稱為「c」，賦值為「'world'」
let d = 456; //宣告一個「數字型別」的變數，名稱為「d」，賦值為「456」
let e = c + d; //宣告一個「字串型別」的變數(系統自動轉型別)，名稱為「e」，賦值為「'world456'」
let f = false; //宣告一個「布林型別」的變數，名稱為「f」，賦值為「false」
let g = d + d; //宣告一個「數字型別」的變數，名稱為「g」，賦值為「912」
let h = f + g; //宣告一個「數字型別」的變數(系統自動轉型別)，名稱為「h」，賦值為「912」



// ### 題目十：傳值與傳參考
// 情境：請依照程式碼告知答案是多少，並在下方用註解方式寫上這五行程式碼做了什麼事
// 以下程式碼請勿變更

let numberArr1 = [5, 10, 15]; //宣告一個「物件型別(陣列)」的變數，名稱為「numberArr1」，賦值為「[5, 10, 15]」
let numberArr2 = numberArr1; //宣告一個「物件型別(陣列)」的變數，名稱為「numberArr2」，賦值依據變數「numberArr1」傳址
numberArr2.push(20); //針對變數「numberArr2」，新增「20」至陣列的最後位置為「[5, 10, 15, 20]」，並傳址給變數「numberArr1」
numberArr2 = [25, 30, 35]; //針對變數「numberArr2」，重新賦值為「[25, 30, 35]」，並中斷與變數「numberArr1」傳址關係
console.log(numberArr1, numberArr2); //呈現變數「numberArr1」與「numberArr2」的值，分別為「[5, 10, 15, 20]」, 「[25, 30, 35]」
