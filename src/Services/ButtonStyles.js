function btnStyle(e) {
  if (e === "green") {
    return "green";
  } else if (e === "red") {
    return "red";
  }
}
function pulletStyle(style, b) {
  if (style === "#166534") {
    //green
    // #9ee9b9 noght
    document.querySelector("body").style.backgroundColor = "rgb(240,253,244)";
    b.style.background = style;
  } else if (style === "#991b1b") {
    //red
    // #fab4b4 noght
    document.querySelector("body").style.backgroundColor = "rgb(254,242,242)";
    b.style.background = style;
  } else if (style === "#1e40af") {
    //blue
    // #a3c5fb noght
    document.querySelector("body").style.backgroundColor = "rgb(239,246,255)";
    b.style.background = style;
  } else if (style === "#FFA500") {
    //blue
    // #a3c5fb noght
    document.querySelector("body").style.backgroundColor = "#f2e6d1";
    b.style.background = style;
  } else if (style === "#A020F0") {
    //blue
    // #a3c5fb noght
    document.querySelector("body").style.backgroundColor = "rgb(239,246,255)";
    b.style.background = style;
  }
  const btnButton = document.querySelectorAll("input[type='button']");
  btnButton.forEach((item) => (item.style.background = style));
  const btnSubmit = document.querySelectorAll("input[type='submit']");
  btnSubmit.forEach((item) => (item.style.background = style));
  const linkA = document.querySelectorAll("a");
  linkA.forEach((item) => (item.style.color = style));
}
function pallet(a, b) {
  if (a === "#1e40af") {
    pulletStyle("#1e40af", b);
  } else if (a === "#991b1b") {
    pulletStyle("#991b1b", b);
  } else if (a === "#166534") {
    pulletStyle("#166534", b);
  } else if (a === "#A020F0") {
    pulletStyle("#A020F0", b);
  } else if (a === "#FFA500") {
    pulletStyle("#FFA500", b);
  }
}
//captcha random
function random() {
  let captcha = Math.floor(Math.random() * 280000);
  // let rev = captcha.reverse()
  const tostr = captcha.toString();
  console.log(tostr)
  // const spl = tostr.split("");
  // let jin = spl.join(" ");
  return tostr;
}
export default btnStyle;
export { pallet, random };
