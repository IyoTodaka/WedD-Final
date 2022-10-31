//読み込み時のData呼び出し
const GET_URL= "https://jsonblob.com/api/jsonBlob/1036337194507452416";
const game_template =document.querySelector("#game_template");
const game_body =document.querySelector(".game_body");

const game_img =document.getElementById("game_image");
const text1 =document.getElementById("inner_text1");
const text2 =document.getElementById("inner_text2");

const choice1 =document.getElementById("choice1");
const choice2 =document.getElementById("choice2");
const choice3 =document.getElementById("choice3");
const choice4 =document.getElementById("choice4");
const a_choice1 =document.getElementById("a_choice1");
const a_choice2 =document.getElementById("a_choice2");
const a_choice3 =document.getElementById("a_choice3");
const a_choice4 =document.getElementById("a_choice4");

let hole_flag = 0;


//gameListにaxiosを使ってGET_URLから取得したObject型のdateが格納される
//(axiosはHTML上で非同期でAPIからデータのやり取りをするためのライブラリ)
let gameList;
axios.get(GET_URL).then(({data})=>{
    //data.gamesのgamesはjsonblobに登録している配列の名前
    gameList =data.games;
    console.log(gameList);
})


function OnLinkClick(id){

    target =document.getElementById("choices");
    


}