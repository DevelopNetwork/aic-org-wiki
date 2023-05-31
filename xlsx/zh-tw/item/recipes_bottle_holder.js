import {loadRemoteFile} from "/xlsx-render/main.js"
window.addEventListener('load', (/*event*/) => {
  let url ="https://wiki-assets.aliceincradle.org/xlsx/zh-tw/item/recipes_bottle_holder.xlsx";
  let elementId = "recipes_bottle_holder_zh-tw";
  loadRemoteFile(url,elementId);
});