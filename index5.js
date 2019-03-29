const data = [
  [
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20053">KIG-17</a>',
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20053">Erialane tüpograafia; Interaktiivse graafika loomine (48 EKAP) praktiline töö; 26 tundi</a> ',
    "",
    "",
    "",
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20053">4</a>',
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20053">6</a>',
    ' <img id="create_testing_session_btn_20053" src="/img/btn_add.gif" onclick="create_testing_session(20053)" style="vertical-align: bottom;cursor: pointer" title="Ava vastamiseks antud päeviku õpilastele õppeaine tagasiside vorm" alt="btn_add.gif">'
  ],
  [
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20058">KIG-17</a>',
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20058">Illustratsioon; Interaktiivse graafika loomine (48 EKAP) praktiline töö; 26 tundi</a> <img src="/img/incomplete.png" style="vertical-align: top" title="06.12.2018<br/>Palun kohe päevik ära täita." alt="incomplete.png">',
    "",
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20058">8</a>',
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20058">2/4</a>',
    "",
    "",
    ' <img id="create_testing_session_btn_20058" src="/img/btn_add.gif" onclick="create_testing_session(20058)" style="vertical-align: bottom;cursor: pointer" title="Ava vastamiseks antud päeviku õpilastele õppeaine tagasiside vorm" alt="btn_add.gif">'
  ],
  [
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20052">KIG-17</a>',
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20052">Interaktiivse graafika ajalugu ja hetkeseis; Interaktiivse graafika loomine (48 EKAP) teoreetiline töö; 13 tundi</a> ',
    "",
    "",
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20052">4</a>',
    "",
    "",
    ' <img id="create_testing_session_btn_20052" src="/img/btn_add.gif" onclick="create_testing_session(20052)" style="vertical-align: bottom;cursor: pointer" title="Ava vastamiseks antud päeviku õpilastele õppeaine tagasiside vorm" alt="btn_add.gif">'
  ],
  [
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20060">KIG-17</a>',
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20060">Interaktiivse meedia lahenduse interaktsiooniosa; Interaktiivse graafika loomine (48 EKAP) praktiline töö; 156 tundi</a> ',
    "",
    "",
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20060">18</a>',
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20060">22</a>',
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20060">38</a>',
    ' <img id="create_testing_session_btn_20060" src="/img/btn_add.gif" onclick="create_testing_session(20060)" style="vertical-align: bottom;cursor: pointer" title="Ava vastamiseks antud päeviku õpilastele õppeaine tagasiside vorm" alt="btn_add.gif">'
  ],
  [
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20049">KIG-17</a>',
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20049">Kujunduse idee loomine ja kavandamine; Kujunduse idee loomine ja kavandamine (6 EKAP) praktiline töö; 52 tundi</a> <img src="/img/incomplete.png" style="vertical-align: top" title="06.12.2018<br/>Palun päevik kohe ära täita." alt="incomplete.png">',
    "",
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20049">8</a>',
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20049">8</a>',
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20049">4</a>',
    "",
    ' <img id="create_testing_session_btn_20049" src="/img/btn_add.gif" onclick="create_testing_session(20049)" style="vertical-align: bottom;cursor: pointer" title="Ava vastamiseks antud päeviku õpilastele õppeaine tagasiside vorm" alt="btn_add.gif">'
  ],
  [
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20061">KIG-17</a>',
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20061">Markeerimis- ja programmeerimiskeeled ja frontend tööprotsess; Interaktiivse graafika loomine (48 EKAP) praktiline töö; 130 tundi</a> <img src="/img/incomplete.png" style="vertical-align: top" title="06.12.2018<br/>Palun päevik kohe ära täita." alt="incomplete.png">',
    "",
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20061">20</a>',
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20061">16</a>',
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20061">24</a>',
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20061">5</a>',
    ' <img id="create_testing_session_btn_20061" src="/img/btn_add.gif" onclick="create_testing_session(20061)" style="vertical-align: bottom;cursor: pointer" title="Ava vastamiseks antud päeviku õpilastele õppeaine tagasiside vorm" alt="btn_add.gif">'
  ],
  [
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20701">KKG-18</a>',
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20701">Infograafika; Kujundusgraafika loomine (48 EKAP) praktiline töö; 26 tundi</a> ',
    "",
    "",
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20701">10</a>',
    "",
    "",
    ' <img id="create_testing_session_btn_20701" src="/img/btn_add.gif" onclick="create_testing_session(20701)" style="vertical-align: bottom;cursor: pointer" title="Ava vastamiseks antud päeviku õpilastele õppeaine tagasiside vorm" alt="btn_add.gif">'
  ],
  [
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=19892">KLG-16</a>',
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=19892">Infograafika; Liikuva graafika loomine (50 EKAP) praktiline töö; 52 tundi</a> ',
    "",
    "",
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=19892">6</a>',
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=19892">34</a>',
    "",
    ' <img id="create_testing_session_btn_19892" src="/img/btn_add.gif" onclick="create_testing_session(19892)" style="vertical-align: bottom;cursor: pointer" title="Ava vastamiseks antud päeviku õpilastele õppeaine tagasiside vorm" alt="btn_add.gif">'
  ],
  [
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20117">KLG-17T</a>',
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20117">Erialane portfoolio; Liikuva graafika loomine (48 EKAP) praktiline töö; 52 tundi</a> ',
    "",
    "",
    "",
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20117">14</a>',
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20117">12</a>',
    ' <img id="create_testing_session_btn_20117" src="/img/btn_add.gif" onclick="create_testing_session(20117)" style="vertical-align: bottom;cursor: pointer" title="Ava vastamiseks antud päeviku õpilastele õppeaine tagasiside vorm" alt="btn_add.gif">'
  ],
  [
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20108">KLG-17T</a>',
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20108">Illustratsioon; Liikuva graafika loomine (48 EKAP) praktiline töö; 52 tundi</a> <img src="/img/incomplete.png" style="vertical-align: top" title="06.12.2018<br/>Palun päevik kohe ära täita." alt="incomplete.png">',
    "",
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20108">20</a>',
    "",
    "",
    "",
    ' <img id="create_testing_session_btn_20108" src="/img/btn_add.gif" onclick="create_testing_session(20108)" style="vertical-align: bottom;cursor: pointer" title="Ava vastamiseks antud päeviku õpilastele õppeaine tagasiside vorm" alt="btn_add.gif">'
  ],
  [
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20110">KLG-17T</a>',
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20110">Infograafika; Liikuva graafika loomine (48 EKAP) praktiline töö; 50 tundi</a> <img src="/img/incomplete.png" style="vertical-align: top" title="06.12.2018<br/>" alt="incomplete.png">',
    "",
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20110">4</a>',
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20110">14</a>',
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=20110">6</a>',
    "",
    ' <img id="create_testing_session_btn_20110" src="/img/btn_add.gif" onclick="create_testing_session(20110)" style="vertical-align: bottom;cursor: pointer" title="Ava vastamiseks antud päeviku õpilastele õppeaine tagasiside vorm" alt="btn_add.gif">'
  ],
  [
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=19581">TA-18</a>',
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=19581">CASE; Tarkvara arendusprotsess (5 EKAP) teoreetiline töö; 65 tundi</a> <img src="/img/incomplete.png" style="vertical-align: top" title="06.12.2018<br/>Palun päevik kohe ära täita." alt="incomplete.png">',
    "",
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=19581">18</a>',
    "",
    "",
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=19581">12</a>',
    ' <img id="create_testing_session_btn_19581" src="/img/btn_add.gif" onclick="create_testing_session(19581)" style="vertical-align: bottom;cursor: pointer" title="Ava vastamiseks antud päeviku õpilastele õppeaine tagasiside vorm" alt="btn_add.gif">'
  ],
  [
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=19611">TA-18</a>',
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=19611">Veebidisain; Veebidisain (6 EKAP) teoreetiline töö; 26 tundi</a> <span class="label label-warning">valikaine</span>',
    "",
    "",
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=19611">8</a>',
    "",
    "",
    ' <img id="create_testing_session_btn_19611" src="/img/btn_add.gif" onclick="create_testing_session(19611)" style="vertical-align: bottom;cursor: pointer" title="Ava vastamiseks antud päeviku õpilastele õppeaine tagasiside vorm" alt="btn_add.gif">'
  ],
  [
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=19739">TAK-18</a>',
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=19739">CASE; Tarkvara arendusprotsess (6 EKAP) teoreetiline töö; 78 tundi</a> <img src="/img/incomplete.png" style="vertical-align: top" title="06.12.2018<br/>Palun päevik kohe ära täita." alt="incomplete.png">',
    "",
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=19739">28</a>',
    "",
    "",
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=19739">32</a>',
    ' <img id="create_testing_session_btn_19739" src="/img/btn_add.gif" onclick="create_testing_session(19739)" style="vertical-align: bottom;cursor: pointer" title="Ava vastamiseks antud päeviku õpilastele õppeaine tagasiside vorm" alt="btn_add.gif">'
  ],
  [
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=19844">Ä-17</a>',
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=19844">5 Uuenduslikud tehnoloogiad; Tootmis- ja teenindusprotsessi toetamine (27 EKAP) teoreetiline töö; 48 tundi</a> <span class="label label-warning">valikaine</span>',
    "",
    "",
    "",
    "",
    '<a href="https://ametikool.siseveeb.ee/kutseope/oppetoo/paevik/taitmine?paevik=19844">16</a>',
    ' <img id="create_testing_session_btn_19844" src="/img/btn_add.gif" onclick="create_testing_session(19844)" style="vertical-align: bottom;cursor: pointer" title="Ava vastamiseks antud päeviku õpilastele õppeaine tagasiside vorm" alt="btn_add.gif">'
  ],
  [
    "",
    "<strong>kokku</strong>",
    "<strong>0</strong>",
    "<strong>106</strong>",
    "<strong>88</strong>",
    "<strong>108</strong>",
    "<strong>121</strong>",
    ""
  ],
  [
    "Grupp",
    "Päevik",
    "0.p",
    "1.p",
    "2.p",
    "3.p",
    "4.p",
    '<img src="/img/ico_chart.png" style="vertical-align: bottom" title="Tagasiside" alt="ico_chart.png">'
  ]
];

const getLink = html => html.match(/(href=")(.*)(")/)[2];

const getText = html => {
  return html ? html.replace(/(<([^>]+)>)/gi, "") : "";
};

const getNames = text => {
  return text.split('(')[0].split(';').map(t => t.trim())
}
const links = data
  .filter(d => d[0] !== "" && d[0] !== "Grupp")
  .map(d => {
    return {
      group: getText(d[0].trim()),
      url: getLink(d[0]),
      names: getNames(getText(d[1].trim()))
    };
  });

console.log(links);

// alert(div.innerText); // Hello, World

// const getLink = html => html.match(/<a [^>]+>([^<]+)<\/a>/)[1];
// const get
