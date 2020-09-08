import { getData } from "../../controllers/data.js";
import { form } from "../../controllers/valid.js";

class MainScreen extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(
      document.getElementById("main-screen").content.cloneNode(true)
    );

    this.$nameBoook = this._shadowRoot.querySelector("#nameBook");
    this.$author = this._shadowRoot.querySelector("#author");
    this.$form = this._shadowRoot.querySelector("form");
    this.$listBook = this._shadowRoot.querySelector("#listBooks");
    this.$form.addEventListener("submit", (e) => {
      e.preventDefault();
      let nameBook = this.$nameBoook.value;
      let author = this.$author.value;
      let err = form(nameBook, author);
      if (err.hasError) {
        alert("Lỗi rồi");
      } else {
        const newBook = {
          nameBook: nameBook,
          author: author,
          isRead: false,
        };
        db.collection("mybooks").doc(newBook.nameBook).set(newBook);
      }
      this.render();
    });
  }

  async render() {
    const data = await getData();
    console.log(data);
    this.$listBook.innerHTML = "";
    data.forEach((value) => {
      console.log(value);
      let bookItem = document.createElement("book-item");
      bookItem.name = value.nameBook;
      bookItem.author = value.author;
      console.log(value.isRead);
      bookItem.isRead = value.isRead;
      console.log(bookItem);
      this.$listBook.appendChild(bookItem);
    });
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("main-screen", MainScreen);
