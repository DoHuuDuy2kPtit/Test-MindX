class BookItem extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(
      document.getElementById("bookItem").content.cloneNode(true)
    );

    this.$nameBookItem = this._shadowRoot.querySelector("#nameBook");
    this.$authorItem = this._shadowRoot.querySelector("#author");
    this.$isRead = this._shadowRoot.querySelector("#isRead");
    this.$isRead.addEventListener("click", (e) => {
      console.log(e.target.checked);
      this.isRead = e.target.checked;
      db.collection("mybooks").doc(this.name).set(
        {
          isRead: e.target.checked,
        },
        { merge: true }
      );
    });
  }

  static get observedAttributes() {
    return ["name", "author", "isread"];
  }

  set name(newVal) {
    this.setAttribute("name", newVal);
  }

  set author(newVal) {
    this.setAttribute("author", newVal);
  }

  set isRead(newVal) {
    this.setAttribute("isread", newVal);
  }

  get name() {
    return this.getAttribute("name");
  }

  get author() {
    return this.getAttribute("author");
  }

  get isRead() {
    return this.getAttribute("isread");
  }

  connectedCallback() {
    this.$nameBookItem.innerHTML = this.name;
    this.$authorItem.innerHTML = this.author;

    this.isRead === "true"
      ? (this.$isRead.checked = true)
      : (this.$isRead.checked = false);
  }
}

customElements.define("book-item", BookItem);
