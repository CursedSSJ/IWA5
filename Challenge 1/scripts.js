const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING =
  "Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = 0;
let shipping = 0;
let currency = "R";
let country = "RSA";
let customers = "1";

const items = {
  shoes: 300 * 1,
  toys: 100 * 5,
  shirts: 150 * NONE_SELECTED,
  batteries: 35 * 2,
  pens: 5 * NONE_SELECTED,
};

if (country === "RSA") {
  shipping = 400;
  currency = "R";
} else if (country === "NAM") {
  shipping = 600;
  currency = "$";
} else {
  shipping = 800;
  currency = "$";
}

if (
  country == "RSA" &&
  items.shoes + items.toys + items.batteries + items.pens + items.shirts > 1000
) {
  shipping = 0;
}

if (
  country == "NAM" &&
  items.shoes + items.toys + items.batteries + items.pens + items.shirts > 60
) {
  shipping = 0;
}

if (shipping == 0 && customers != 1) {
  console.log(FREE_WARNING);
}

if (country === "NK") {
  console.log(BANNED_WARNING);
}

total =
  items.shoes +
  items.toys +
  items.batteries +
  items.pens +
  items.shirts +
  shipping;

console.log(currency, total);
