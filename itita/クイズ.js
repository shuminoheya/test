const dialog = document.getElementById("myDialog");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});

const monndai_1 = {
  monndai: '刹那',
  kotae: 'せつな',
  maru: '〇〇〇'
}

const monndai_2 = {
  monndai: '那由多',
  kotae: 'なゆた',
  maru: '〇〇〇'
}

const monndai_3 = {
  monndai: '慟哭',
  kotae: 'どうこく',
  maru: '〇〇〇〇'
}

const monndai_4 = {
  monndai: '不知火',
  kotae: 'しらぬい',
  maru: '〇〇〇〇'
}

const monndai_5 = {
  monndai: '隻眼',
  kotae: 'せきがん',
  maru: '〇〇〇〇'
}

const monndai_6 = {
  monndai: '泡沫',
  kotae: 'うたかた',
  maru: '〇〇〇〇'
}

const monndai_7 = {
  monndai: '十六夜',
  kotae: 'いざよい',
  maru: '〇〇〇〇'
}

const monndai_8 = {
  monndai: '森羅万象',
  kotae: 'しんらばんしょう',
  maru: '〇〇〇〇〇〇〇〇'
}

const monndai_9 = {
  monndai: '魑魅魍魎',
  kotae: 'ちみもうりょう',
  maru: '〇〇〇〇〇〇〇'
}

const monndai_10 = {
  monndai: '傀儡',
  kotae: 'くぐつ',
  maru: '〇〇〇'
}

const monndai_11 = {
  monndai: '陽炎',
  kotae: 'かげろう',
  maru: '〇〇〇〇'
}

const monndai_12 = {
  monndai: '叛逆',
  kotae: 'はんぎゃく',
  maru: '〇〇〇〇〇'
}

const monndai_13 = {
  monndai: '霹靂',
  kotae: 'へきれき',
  maru: '〇〇〇〇'
}

const monndai_14 = {
  monndai: '終焉',
  kotae: 'しゅうえん',
  maru: '〇〇〇〇〇'
}

const monndai_15 = {
  monndai: '開闢',
  kotae: 'かいびゃく',
  maru: '〇〇〇〇〇'
}

const monndai_16 = {
  monndai: '噺',
  kotae: 'はなし',
  maru: '〇〇〇'
}
const monndai_17 = {
  monndai: '輪廻',
  kotae: 'りんね',
  maru: '〇〇〇'
}

const monndai_18 = {
  monndai: '玉櫛',
  kotae: 'たまくし', 
  maru: '〇〇〇〇'
}

const monndai_19 = {
  monndai: '蒼穹',
  kotae: 'そうきゅう',
  maru: '〇〇〇〇〇'
}

const monndai_20 = {
  monndai: '百鬼夜行',
  kotae: 'ひゃっきやこう',
  maru: '〇〇〇〇〇〇〇'
}

const monndai_21 = {
  monndai: '跳梁跋扈',
  kotae: 'ちょうりょうばっこ',
  maru: '〇〇〇〇〇〇〇〇〇'
}

const monndai_22 = {
  monndai: '空蝉',
  kotae: 'うつせみ',
  maru: '〇〇〇〇'
}

const monndai_23 = {
  monndai: '翡翠',
  kotae: 'ひすい',
  maru: '〇〇〇'
}

const monndai_24 = {
  monndai: '天上天下唯我独尊',
  kotae: 'てんじょうてんげゆいがどくそん',
  maru: '〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇'
}

let monnsuu = 1;
let kaitou_ran = null;
let monndai_rokku = true;
let hannteiyou_hennsuu = monndai_1.kotae;
let seikai_suu = 0;
let monndai_maru_hyouziyou = null;

function kuizu_start() {
  const start_syoukyo = document.getElementById('openBtn')
  start_syoukyo?.remove();

  const mitame_kaizou = document.createElement("p");
  kaitou_ran = document.createElement("input");
  const kaitou_button = document.createElement("button");
  const seikai_hyouzi = document.createElement("h3");

  kaitou_ran.type = "text";
  kaitou_ran.id = "kaitou";
  mitame_kaizou.id = "mitame_kaizou_kaitou";
  kaitou_ran.placeholder = "答えを入力しろぉぉ！！";
  kaitou_button.textContent = "回答する";
  kaitou_button.addEventListener("click", seikai_hanntei);
  seikai_hyouzi.id = "seikai_happyou";

  mitame_kaizou.appendChild(kaitou_ran);
  document.body.appendChild(mitame_kaizou);
  mitame_kaizou.appendChild(kaitou_button);
  document.body.appendChild(seikai_hyouzi);
  document.getElementById('monndai_soto').textContent = '第' + monnsuu + '問:';
  document.getElementById('monndai').textContent = monndai_1.monndai;
  document.getElementById('monndai_maru_honntai').textContent = monndai_1.maru;

  const tugino_button__seiri = document.createElement("p");
  const tugino_button = document.createElement("button");
  tugino_button.textContent = "次へ";
  tugino_button.id = "tugino_bottun"
  tugino_button__seiri.id = "tugino_button_seiri";
  tugino_button__seiri.appendChild(tugino_button);
  document.body.appendChild(tugino_button__seiri);
  tugino_button.addEventListener("click", monndai_kirikae);

  document.getElementById("tugino_button_seiri").style.visibility = "hidden";
  document.getElementById("seikai_happyou").style.visibility = "hidden";
};

function seikai_hanntei() {
  if (monndai_rokku === true) {
    if (kaitou_ran.value === hannteiyou_hennsuu) {
      document.getElementById('seikai_happyou').textContent = "正解！";
      seikai_happyou.style.color = "green";
      seikai_suu++;
    } else {
      document.getElementById('seikai_happyou').textContent = "不正解wwww";
      seikai_happyou.style.color = "red";
    };
  };

  document.getElementById("tugino_button_seiri").style.visibility = "visible";
  document.getElementById("seikai_happyou").style.visibility = "visible";
}

function monndai_kirikae() {
  monnsuu++;
  if (monnsuu === 2) {
    monndai = monndai_2.monndai
    hannteiyou_hennsuu = monndai_2.kotae
    monndai_maru_hyouziyou = monndai_2.maru
  } else if (monnsuu === 3) {
    monndai = monndai_3.monndai
    hannteiyou_hennsuu = monndai_3.kotae
    monndai_maru_hyouziyou = monndai_3.maru
  };
  if (monnsuu === 4) {
    monndai = monndai_4.monndai
    hannteiyou_hennsuu = monndai_4.kotae
    monndai_maru_hyouziyou = monndai_4.maru
  } else if (monnsuu === 5) {
    monndai = monndai_5.monndai
    hannteiyou_hennsuu = monndai_5.kotae
    monndai_maru_hyouziyou = monndai_5.maru
  };
  if (monnsuu === 6) {
    monndai = monndai_6.monndai
    hannteiyou_hennsuu = monndai_6.kotae
    monndai_maru_hyouziyou = monndai_6.maru
  } else if (monnsuu === 7) {
    monndai = monndai_7.monndai
    hannteiyou_hennsuu = monndai_7.kotae
    monndai_maru_hyouziyou = monndai_7.maru
  };
  if (monnsuu === 8) {
    monndai = monndai_8.monndai
    hannteiyou_hennsuu = monndai_8.kotae
    monndai_maru_hyouziyou = monndai_8.maru
  } else if (monnsuu === 9) {
    monndai = monndai_9.monndai
    hannteiyou_hennsuu = monndai_9.kotae
    monndai_maru_hyouziyou = monndai_9.maru
  };
  if (monnsuu === 10) {
    monndai = monndai_10.monndai
    hannteiyou_hennsuu = monndai_10.kotae
    monndai_maru_hyouziyou = monndai_10.maru
  } else if (monnsuu === 11) {
    monndai = monndai_11.monndai
    hannteiyou_hennsuu = monndai_11.kotae
    monndai_maru_hyouziyou = monndai_11.maru
  };
  if (monnsuu === 12) {
    monndai = monndai_12.monndai
    hannteiyou_hennsuu = monndai_12.kotae
    monndai_maru_hyouziyou = monndai_12.maru
  } else if (monnsuu === 13) {
    monndai = monndai_13.monndai
    hannteiyou_hennsuu = monndai_13.kotae
    monndai_maru_hyouziyou = monndai_13.maru
  };
  if (monnsuu === 14) {
    monndai = monndai_14.monndai
    hannteiyou_hennsuu = monndai_14.kotae
    monndai_maru_hyouziyou = monndai_14.maru
  } else if (monnsuu === 15) {
    monndai = monndai_15.monndai
    hannteiyou_hennsuu = monndai_15.kotae
    monndai_maru_hyouziyou = monndai_15.maru
  };
  if (monnsuu === 16) {
    monndai = monndai_16.monndai
    hannteiyou_hennsuu = monndai_16.kotae
    monndai_maru_hyouziyou = monndai_16.maru
  } else if (monnsuu === 17) {
    monndai = monndai_17.monndai
    hannteiyou_hennsuu = monndai_17.kotae
    monndai_maru_hyouziyou = monndai_17.maru
  };
  if (monnsuu === 18) {
    monndai = monndai_18.monndai
    hannteiyou_hennsuu = monndai_18.kotae
    monndai_maru_hyouziyou = monndai_18.maru
  } else if (monnsuu === 19) {
    monndai = monndai_19.monndai
    hannteiyou_hennsuu = monndai_19.kotae
    monndai_maru_hyouziyou = monndai_19.maru
  };
  if (monnsuu === 20) {
    monndai = monndai_20.monndai
    hannteiyou_hennsuu = monndai_20.kotae
    monndai_maru_hyouziyou = monndai_20.maru
  } else if (monnsuu === 21) {
    monndai = monndai_21.monndai
    hannteiyou_hennsuu = monndai_21.kotae
    monndai_maru_hyouziyou = monndai_21.maru
  };
  if (monnsuu === 22) {
    monndai = monndai_22.monndai
    hannteiyou_hennsuu = monndai_22.kotae
    monndai_maru_hyouziyou = monndai_22.maru
  } else if (monnsuu === 23) {
    monndai = monndai_23.monndai
    hannteiyou_hennsuu = monndai_23.kotae
    monndai_maru_hyouziyou = monndai_23.maru
  };
  if (monnsuu === 24) {
    monndai = monndai_24.monndai
    hannteiyou_hennsuu = monndai_24.kotae
    monndai_maru_hyouziyou = monndai_24.maru
  };
  document.getElementById("tugino_button_seiri").style.visibility = "hidden";
  document.getElementById("seikai_happyou").style.visibility = "hidden";

  document.getElementById('monndai_soto').textContent = '第' + monnsuu + '問:';
  document.getElementById('monndai').textContent = monndai;
  document.getElementById('monndai_maru_honntai').textContent = monndai_maru_hyouziyou;
  monndai_rokku = true;

  console.log("問数:" + monnsuu);
  console.log("正解数:" + seikai_suu);

  document.getElementById('kaitou').value = "";

  if (monnsuu === 25) {
    kuizu_kekka ();
  };
}

function kuizu_kekka () {
  tugino_button_seiri?.remove();
  seikai_happyou?.remove();
  monndai_soto?.remove();
  monndai_maru_honntai?.remove();
  mitame_kaizou_kaitou?.remove();

 document.getElementById('monndai').textContent = "正解数:" + seikai_suu + "/" + 24;
}