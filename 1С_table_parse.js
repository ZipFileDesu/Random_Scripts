// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://10.132.1.160/pls/apex/f?p=104:70:6609166747351::NO
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

let doc = document.getElementById("327337847490756993")
let text = "";

for (let i = 1; i <= doc.rows.length - 2; ++i) {
    //Если дата эксплуатации не задана, то берём этот номер
    if (doc.rows[i].getElementsByTagName("td")[23].innerHTML == "-"){
        text += doc.rows[i].getElementsByTagName("td")[10].innerHTML + " " + doc.rows[i].getElementsByTagName("td")[19].innerHTML + " " + doc.rows[i].getElementsByTagName("td")[23].innerHTML + "\n";
    }
}
    console.log(text);
})();