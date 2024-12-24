import { content } from "./dom.js";

export function renderMenu(){
  content.innerHTML = "";
  const menuConteiner  = document.createElement("div");
  menuConteiner.innerHTML = `<h1>Menú</h1>
                              <ul>
                                <li>Vacio</li>
                                <li>Costillar</li>
                                <li>Algo más</li>
                              </ul>`;
  return menuConteiner;
}