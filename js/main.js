//読み込み時のData呼び出し
const GET_URL= "https://jsonblob.com/api/jsonBlob/1036337194507452416";
const game_template =document.querySelector("#game_template");
const game_body =document.querySelector(".game_body");

const game_img =document.getElementById("game_image");
const text1 =document.getElementById("inner_text1");
const text2 =document.getElementById("inner_text2");

// const choice1 =document.getElementById("choice1");
// const choice2 =document.getElementById("choice2");
// const choice3 =document.getElementById("choice3");
// const choice4 =document.getElementById("choice4");
const a_choice1 =document.getElementById("a_choice1");
const a_choice2 =document.getElementById("a_choice2");
const a_choice3 =document.getElementById("a_choice3");
const a_choice4 =document.getElementById("a_choice4");
const openSound =new Audio('audio/open.mp3')
const stepsSound =new Audio('audio/steps.mp3')

let hole_flag = 0;
let looked_candle=0;
let openedFlg=0;


//gameListにaxiosを使ってGET_URLから取得したObject型のdateが格納される
//(axiosはHTML上で非同期でAPIからデータのやり取りをするためのライブラリ)
let gameList;
axios.get(GET_URL).then(({data})=>{
    //data.gamesのgamesはjsonblobに登録している配列の名前
    gameList =data.games;

})


function OnLinkClick(roomName){
    audioPlay()
    if(roomName=="hole"){
        //穴flagを確認する

        if(hole_flag==0){
            roomName="hole1"
            hole_flag=1
        }else{
            roomName="hole2"
        }
    }else if(roomName=="candle"){
        //キャンドルを見たかのflag、エンディング分岐もできる
        looked_candle=1;
    }else if(roomName=="panel"){
        pass1 = window.prompt("What is the color of the stone", "")
        if(pass1=="Blue"){
            pass2 = window.prompt("What is the color of the candle", "")
            if(pass2=="Red"){
                roomName="end3"
            }else if(pass2=="White"){
                roomName="end2"
            }else{
                window.alert("The door was not opened")
                return
            }
        }else if(pass1=="White"){
            pass2 = window.prompt("What is the color of the candle", "")
            if(pass2=="White"){
                roomName="end1"
            }else{
                window.alert("The door was not opened")
                return
            }
        }else{
            window.alert("The door was not opened")
            return
        }
    }
    console.log(roomName)
    

    //下のfindRoomByIdでどの部屋か判定する
    const room = findRoomById(roomName);

    //選択肢のテキストを変更する
    a_choice1.innerHTML= room.choice1;
    a_choice2.innerHTML= room.choice2;
    a_choice3.innerHTML= room.choice3;
    a_choice4.innerHTML= room.choice4;

    console.log(room)
    //選択肢に紐づくリンクを変更する
    a_choice1.setAttribute ('href',room.choice1_name);
    a_choice2.setAttribute ('href',room.choice2_name);
    a_choice3.setAttribute ('href',room.choice3_name);
    a_choice4.setAttribute ('href',room.choice4_name);

    //divタグ内のimg要素のイメージURLを変更する
    game_img.style.backgroundImage='url('+room.img+')'

    //画面テキストの表示を変更する
    text1.innerHTML = room.text1;
    text2.innerHTML = room.text2;


}


function findRoomById(roomName){

    for(room of gameList){
        if(room.name ==roomName){
            return room
        }
    }

}

async function audioPlay(){
    if(openedFlg==1){
        stepsSound.play()
    }else{
        openSound.play()
        openedFlg=1
    }
}