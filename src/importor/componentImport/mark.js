export function markHeader() {
  [...document.head.children].forEach((ele) => {
    ele.isMain = true;
  });
}
export function clearExtra() {
  [...document.head.children]
    .filter((ele) => !ele.isMain)
    .forEach((i) => {
      if (!i.isMain) {
        console.log(i);
        i.remove();
      }
    });
}
