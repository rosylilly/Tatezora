// ==UserScript==  
// @name        Tatezora
// @namespace   tatezora.aduca.org
// @description 青空文庫縦書きビューワー
// @include     http://www.aozora.gr.jp/cards/*/files/*
// ==/UserScript==  
!function() {

  // Funcs
  function addCSS(rule) {
    var styleSheet = document.styleSheets[document.styleSheets.length - 1];
    styleSheet.insertRule(rule, styleSheet.cssRules.length);
  }

  function clickOnButton(e) {
    e.preventDefault();
    var action = e.target.getAttribute('href').substring(1);

    switch(action) {
    case 'fontUp':
      localStorage['tatezoraFontSize'] = (~~localStorage['tatezoraFontSize'] + 2).toString();
      break;
    case 'fontNormal':
      localStorage['tatezoraFontSize'] = '16';
      break;
    case 'fontDown':
      localStorage['tatezoraFontSize'] = (~~localStorage['tatezoraFontSize'] - 2).toString();
      break;
    };
    document.body.style.fontSize = localStorage['tatezoraFontSize'] + 'px';
  }

  // Set CSS
  addCSS("body { padding-left: 100%; padding-right: 100%; -webkit-writing-mode: vertical-rl; background: whiteSmoke; color: #333; font-family: 'HiraMinPro-W3'; }");
  addCSS(".author { margin-top: 5em; }");
  addCSS("div.main_text { line-height: 2em; letter-spacing: .06em; text-justify: inter-cluster; text-align: justify; }");
  addCSS("a { text-decoration: none; color: rgba(63,110,194,1); }");
  addCSS("#tatezora-control { position: fixed; top: 8%; right: 10%; z-index: 100; width: 5em; -webkit-writing-mode: horizontal-tb; font-size: 13px; font-family: monospace; }");
  addCSS("#tatezora-control a { display: block; margin-bottom: 0.5em; background: #333; border-radius: 15px; color: #fff; width: 22px; height: 22px; line-height: 22px; text-align: center; opacity: 0.8; }");

  // Font Size
  if(!localStorage['tatezoraFontSize']) {
    localStorage['tatezoraFontSize'] = '16';
  }

  var tatezoraControlElement = document.createElement('div');
  tatezoraControlElement.setAttribute('id', 'tatezora-control');
  var buttons = [
    ['fontUp', '+'],
    ['fontNormal', '0'],
    ['fontDown', '-']
  ],
    button = null,
    i = 0;
  while(button = buttons[i++]) {
    var buttonElement = document.createElement('a');
    buttonElement.setAttribute('href', ['#', button[0]].join(''));
    buttonElement.innerText = button[1];
    buttonElement.addEventListener('click', clickOnButton);
    tatezoraControlElement.appendChild(buttonElement);
  }

  document.body.appendChild(tatezoraControlElement);
  document.body.style.fontSize = localStorage['tatezoraFontSize'] + 'px';
}();
