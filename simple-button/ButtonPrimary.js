const template = document.createElement("template");
template.innerHTML = `
  <style>
    button { 
      border:none;
      margin: 20px;
      padding: 15px 20px;
      text-align: center;
      font-size: 14px;
      font-weight:700;
      background-color: #00bd6a;
      color: white;
      border-radius:50px;
      box-shadow: 1px 1px 2px 1px #00bd6a;
     
    }
    button:hover {
      cursor:pointer;
      background-color:#00ae5f;
    }
  </style>
  <button type="button"><slot/></button>`;

export default class ButtonPrimary extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  set text(newText) {
    this.setAttribute("text", newText);
  }
  get text() {
    return this.getAttribute("text");
  }
}
