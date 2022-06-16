const backpack = {
  name: "Nike",
  color: "blue",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  changeColor(color) {
    this.color = color;
    updateBackpack(color)
  },
};
const updateBackpack = (color) => console.log(`Color updated to ${color}`);
backpack.changeColor("red");

const markup = (backpack) => {
  return `
  <div>
  <p>${backpack.name}</p>
  <ul>
    <li>Color: ${backpack.color}</li>
    <li>Pocket number: ${backpack.pocketNum}</li>
    <li>Strap lengths: L: ${backpack.strapLength.left}, R: ${backpack.strapLength.right}
      </li >
  </ul>
  </div>
  `;
};
const main = document.createElement("main");
main.innerHTML = markup(backpack);
document.body.appendChild(main);
