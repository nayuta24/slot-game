bt_start = document.getElementById("bt-start");
tx_roll1 = document.getElementById("roll1");
tx_roll2 = document.getElementById("roll2");
tx_roll3 = document.getElementById("roll3");

const start = () => {
    count_stoped = 0;
    count_speed = 100;

    // startボタンの状態を初期化
    bt_start.setAttribute("disabled", true);
    bt_start.style.backgroundColor = "gray";

    rolling1 = setInterval(randomRoll1, count_speed);
    rolling2 = setInterval(randomRoll2, count_speed);
    rolling3 = setInterval(randomRoll3, count_speed);
}

const randomRoll1 = () => {
    let roll_num1 =  Math.round( Math.random()*4 )+1;
    tx_roll1.innerText = roll_num1;
}

const randomRoll2 = () => {
    let roll_num2 =  Math.round( Math.random()*4 )+1;
    tx_roll2.innerText = roll_num2;
}

const randomRoll3 = () => {
    let roll_num3 =  Math.round( Math.random()*4 )+1;
    tx_roll3.innerText = roll_num3;
}

const stopRoll = (rolling) => {
    clearInterval(rolling);

    count_stoped += 1;
    if (count_stoped > 2) {
        // disabled属性を削除することで、startボタンを再有効化
        bt_start.removeAttribute("disabled");
        bt_start.style.backgroundColor = "crimson";

        // HTMLから文字列を取得し、それを比較
        if (tx_roll1.textContent == tx_roll2.textContent &&
            tx_roll1.textContent == tx_roll3.textContent) {
            alert('あたり');
        } else {
            alert("はずれ");
        }
    }
}
