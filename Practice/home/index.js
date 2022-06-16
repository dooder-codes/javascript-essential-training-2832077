// const main = document.createElement("main");

// const markup = () => {
//   return `
//     <div>
//     <p>${this}</p>
//     <p>${document}</p>
//     </div>
//     `;
// };
// main.innerHTML = markup();
// document.body.appendChild(main);
// console.log(this);
// console.log(document);
const Person = {
  firstname: "Michael",
  lastname: "Smith",
  interests: ["Software", "MacBook", "Art"],
  fullname: function () {
    return this.firstname + " " + this.lastname;
  },
  spitFunction() {
    const para = document.createElement("p");
    para.textContent = this.fullname();
    document.body.appendChild(para);
  },
};
Person.spitFunction();
