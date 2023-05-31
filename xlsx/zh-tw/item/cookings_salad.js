import {loadRemoteFile} from "/xlsx-render/main.js"
window.addEventListener('load', (/*event*/) => {
  let url ="https://wiki-assets.aliceincradle.org/xlsx/zh-tw/item/cookings_salad.xlsx";
  let elementId = "cookings_salad_zh-tw";
  loadRemoteFile(url,elementId);
});