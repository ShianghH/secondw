// ### 題目一：比較運算子
// 請依序告知以下 console.Log 會顯示什麼值，
// 若不確定答案，可將 code 貼在 chrome console 顯示後，再回頭補知識點。
let a = 9;
let b = 13;
console.log(a > 0); //true
console.log(b > a); //true
console.log(a + b > 1); //true
let c = 51;
let d = 163;
console.log(c == d); //false
console.log(c !== d); //true
let e = 28;
let f = 45;
console.log(f >= e); //true
console.log(f != e); //true
console.log(f == e); //false

// ### 題目二：比較運算子 + 強制轉型
// 請回答每個 console.log 的值為？
let g = 8;
let h = '8';
console.log(g * h == 88); //false
console.log(g * h == 64); //true
console.log(g * h === 64); //true

let i = '9';
let j = '9';
console.log(i + j == 99); //true
console.log(i + j === '99'); //true
console.log(i + j === 99); //false

var k = 3;
var l = '8';
// 請文字解釋為什麼
console.log(k * l > 21); //true 字串與數字相乘,字串會轉成數字 輸出結果為3*8>21 is ture

// ### 題目三：邏輯運算子 + if, else
// 情境：健身房週年慶，買課程送贈品
// 健身房準備了 280 個贈品，只要有達以下條件之一，就送會員一個贈品
// 1. 消費滿 1599 元
// 2. 是健身房的 VIP 會員
// Bob 今天來消費了 1800 元，但並非 VIP 會員
// 請問 Bob 是否有獲得贈品，以及贈品剩下多少？請完成以下修改處程式碼

let giftNum = 280; /* 贈品數量 */
let giftPriceRule = 1599; /* 贈品消費門檻 */
let BobPrice = 1800; /* Bob 消費金額 */
let BobIsVip = false; /* Bob 是否為 VIP */

//練習：（可自行將下方程式碼的註解刪除，完成答題）
if (BobPrice >= giftPriceRule || BobIsVip) {
    giftNum --;// 贈品數量減少 1
    console.log("Bob符合贈品資格");
} else {
    console.log("沒有符合贈品資格")
}

console.log(`贈品還剩下${giftNum}個`);

// ### 題目四：
// 健身房的業績獎金計算
// 會計官想寫一個程式，來計算教練的業績獎金，以下為條件值
// 條件一：不管有無課程，基本獎金先給 6,000元
// 條件二：全年業績在 10 萬以下者，給 10% 獎金
// 條件三：全年業績超過 10 萬 ~ 30 萬以下者，給 15% 獎金
// 條件四：全年業績超過 30 萬者，給 20% 獎金

// 例如小華的全年業績為 8 萬：80,000 * 0.1 + 6,000 總計需要支付 14,000 元獎金。

let coachIncome = 240000; // 小明全年業績
let baseBonus = 6000; // 基本獎金
let coachBonus = baseBonus; // 教練業績獎金帳單，並已加入條件一基本獎金

let lessthan10w = 0.1
let above10wBelow30W = 0.15
let over30w = 0.2
// 練習：計算教練業績獎金

if(coachIncome<=100000){
    coachBonus=coachIncome*0.1+baseBonus // 全年業績在 10 萬以下，給 10% 獎金
}else if(coachIncome<=300000){
    coachBonus=coachIncome*0.15+baseBonus // 全年業績超過 10 萬 ~ 30 萬以下，給 15% 獎金
}else if(coachIncome>300000){
    coachBonus=coachIncome*0.2+baseBonus // 全年業績超過 30 萬，給 20% 獎金
}



console.log(`小明總共需支付 $${coachBonus} 獎金`);

// ### 題目五：剪刀石頭布
// 請寫程式來判斷剪刀石頭布的輸贏
// 宣告兩個變數，一個是 playerA 另一個是 playerB
// 請透過 if, if 包 if, else if, else 等方法思考每個玩家出拳的情境

let playerA = '剪刀';
let playerB = '剪刀';

// 練習：使用 if, else if, else 判斷輸贏

if (playerA === playerB){
    console.log('平手');
}else if (
    (playerA === '剪刀' && playerB === '布')||
    (playerA === '石頭' && playerB === '剪刀')||
    (playerA === '布' && playerB === '剪刀') 
){
    console.log('playerA贏');
}else{
    console.log('playerB贏');
}








// ### 題目六：陣列、物件變數定義
// 這是一間位於高雄市的健身房，名為「高雄市健身教練聯盟」，專注於提供高品質的健身指導服務。健身房內有多位專業教練，以下是兩位教練的詳細介紹：
/*
王教練：
- 專長：力量訓練、減重課程
- 課程：
  - 個人訓練課程：每次收費 2000 元，課程時長 60 分鐘，目前有空堂。
  - 團體訓練課程：每次收費 1500 元，課程時長 90 分鐘，目前無空堂。
- 背景介紹：王教練擁有 5 年教學經驗，專精於提升學員的肌力與減脂，適合希望快速達成體能目標的學員。
- 是否接收新學員：是

李教練：
- 專長：瑜伽、體態雕塑
- 課程：
  - 個人訓練課程：每次收費 1800 元，課程時長 50 分鐘，目前無空堂。
  - 團體訓練課程：每次收費 1200 元，課程時長 75 分鐘，目前有空堂。
- 背景介紹：李教練是一位瑜伽大師，擁有 10 年教學經驗，擅長幫助學員雕塑完美體態，適合希望改善姿態與柔軟度的學員。
- 是否接收新學員：否
*/

const gymCoach = {
     // 定義王教練的資訊
    coachWang:{
        specialty:['力量訓練','減重課程'],
        courses:{
            personalTraining:{ //個人訓練課程
                price:2000, // 每次收費
                duration:60,//課程時長(分鐘)
                isHaveClass:true //是否有空堂
            },
            groupTraining:{ //團體訓練課程
                price:1500, // 每次收費
                duration:90,//課程時長(分鐘)
                isHaveClass:false //是否有空堂
            },
            },
        background:'王教練擁有 5 年教學經驗，專精於提升學員的肌力與減脂，適合希望快速達成體能目標的學員',
        acceptNewStudents:true
        },
    coacLee:{
        specialty:['瑜珈','體態雕塑'],
        courses:{
            personalTraining:{
                price:1800, // 每次收費
                duration:50,//課程時長(分鐘)
                isHaveClass:false //是否有空堂
                },
            groupTraining:{
                price:1200, // 每次收費
                duration:75,//課程時長(分鐘)
                HaveClass:true //是否有空堂
            }
            },
        background:'教練是一位瑜伽大師，擁有 10 年教學經驗，擅長幫助學員雕塑完美體態，適合希望改善姿態與柔軟度的學員。',
        acceptNewStudents:false
    }
}
    
// 練習：使用物件變數定義兩位教練的資訊

console.log(gymCoach);

// ### 題目七：
// 主管要求健身中心的兩位教練業績都需達到 50,000元
// 請透過以下資訊修改，幫助教練業績達標！
let performanceData = {
    company: 'hahaFitness',
    bossName: 'casper',
    coaches: [
    {
        name: 'Alice',
        performance: 42000,
    },
    {
        name: 'Bob',
        performance: 38000,
    },
    ],
};

// 練習：第一位教練（可將下方程式碼註解移除，完成答題）

// if (/* 判斷邏輯，使其為 true */) {
//   // 請填寫第一位教練業績增長程式碼，使用 +=
// }
performanceData.coaches[0].performance+=8000;//將Alice的業績修改為5W

if(performanceData.coaches[0].performance>=50000){
    performanceData.coaches[0].performance = true;
}



// 練習：第二位教練（可將下方程式碼註解移除，完成答題）

// if (/* 判斷邏輯，使其為 true */) {
//   // 請填寫第二位教練業績增長程式碼，使用 +=
// }
performanceData.coaches[1].performance+=12000;//將Bob的業績修改為5W
if(performanceData.coaches[1].performance>=50000){
    performanceData.coaches[1].performance=true;
}

console.log(performanceData);

// ### 題目八
/* 
使用 `物件包含物件` 的格式定義以下內容：
  - 跑步機每分鐘消耗 10 卡
  - 瑜伽每分鐘消耗 5 卡
  - 騎腳踏車每分鐘消耗 8 卡
*/
const activities = {
    treadmill:{
        name:'跑步機',
        caloriesPerMinute:10
    },
    yoga:{
        name:'瑜珈',
        caloriesPerMinute:5
    },
    cycling:{
        name:'腳踏車',
        caloriesPerMinute:8
    }
}; // 練習：使用 `物件包含物件` 的格式定義運動類型與每分鐘消耗卡路里


// ## 題目九
// 情境：算小明今天的卡路里消耗
// 承上題，根據運動類型與每分鐘消耗卡路里的變數設計，計算小明消耗的卡路里。
// 小明今天騎了 10 分鐘的腳踏車去健身房，並先跑了 30 分鐘的跑步機熱身，最後再參加了 40 分鐘的瑜伽團課，最後再騎 10 分鐘腳踏車回家。

let calorieBurn = 0;

cyclingToGym = 10, // 騎腳踏車去健身房
treadmillWarmup = 30, // 跑步機熱身
yogaClass = 40,  // 瑜伽團課
cyclingBackHome = 10, // 騎腳踏車回家

//騎腳踏車去健身房消耗的卡路里
calorieBurn += cyclingToGym * activities.cycling.caloriesPerMinute;
//跑步機熱身消耗的卡路里
calorieBurn += treadmillWarmup * activities.treadmill.caloriesPerMinute;
//瑜珈團課消耗的卡路里
calorieBurn += yogaClass * activities.yoga.caloriesPerMinute;
//騎腳踏車回家消耗的卡路里
calorieBurn += cyclingBackHome * activities.cycling.caloriesPerMinute;

// 練習：計算小明今日消耗的卡路里

console.log(`小明今日一共消耗約 ${calorieBurn} 卡路里。`);

// ### 10. 運動量是否達標！
// 情境：小明記錄了一週內每一天的運動情況，包含運動時長（分鐘）和平均心率（次數）。
/* 現有的運動標準為「533原則」：
  1. 每週運動至少 5 次
  2. 或每週累計運動時間達 150 分鐘
  3. 每次運動必須達到 **30 分鐘** 且平均心率達 **130 次以上** 才算合格。
  
  請完成程式碼，判斷小明是否符合「533原則」。
*/

// 運動紀錄
let totalDuration = 0; // 累計符合條件的運動時間
let validDays = 0; // 符合條件的運動次數

// 小明的一週運動紀錄
const exerciseRecords = [
  { day: 'Monday', duration: 40, heartRate: 135 },
  { day: 'Tuesday', duration: 20, heartRate: 120 },
  { day: 'Wednesday', duration: 30, heartRate: 140 },
  { day: 'Friday', duration: 50, heartRate: 125 },
  { day: 'Saturday', duration: 60, heartRate: 145 },
];

// 範例：週一
// if (exerciseRecords[0].duration >= 30 && exerciseRecords[0].heartRate >= 130) {
//     totalDuration += mondayDuration = exerciseRecords[0].duration;
//     validDays += 1;
    
// }
// //週二
// if (exerciseRecords[1].duration >= 30 && exerciseRecords[1].heartRate >= 130){
//     totalDuration += tuesdayDuration = exerciseRecords[1].duratio;
//     validDays += 1;
// }
// //週三
// if (exerciseRecords[2].duration >= 30 && exerciseRecords[2].heartRate >= 130){
//     totalDuration += wednesdayDuration = exerciseRecords[2].duration;
//     validDays += 1;
// }
// //週五
// if (exerciseRecords[3].duration >= 30 && exerciseRecords[3].heartRate >= 130){
//     totalDuration += fridayDuration = exerciseRecords[2].duration;
//     validDays += 1;
// }
// //週六
// if(exerciseRecords[4].duration >= 30 && exerciseRecords[4].heartRate >= 130){
//     totalDuration += saturdayDuration = exerciseRecords[4].duration;
//     validDays += 1;
// }
// 練習：週二、週三、週四、週五、週六

//迴圈
// for (初始化;條件;更新){}
for(let i = 0; i < exerciseRecords.length; i++){
// let i = 0：初始化變數 i，從 0 開始（表示陣列的第一個元素）
//i < exerciseRecords.length：迴圈的條件是 i 小於 exerciseRecords 陣列的長度（即每個陣列元素都會被處理一次）。
//i++：每次執行迴圈後，i 的值會加 1，這樣就能依次訪問陣列中的下一個元素。
    const { day, duration, heartRate } = exerciseRecords[i];
//exerciseRecords[i]：表示當前陣列元素（是一個物件，如 { day: 'Monday', duration: 40, heartRate: 135 }）。
    if (duration >= 30 && heartRate >= 130) {
    totalDuration += duration; // 累加符合條件的運動時間
    validDays ++; // 符合條件的天數
    }
}
console.log(`符合條件的總運動時間：${totalDuration} 分鐘`);
console.log(`符合條件的運動次數：${validDays} 天`);


// 練習：判斷是否符合 533 原則
let isCompliant = validDays >= 5 || totalDuration >= 150; // 條件：運動次數至少 5 次 || 運動時間累績達標 >= 150;

console.log(`小明的運動量是否達標: ${isCompliant}`); // 輸出: 小明的運動量是否達標