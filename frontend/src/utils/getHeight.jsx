function getInnerHeight(elm) {
  let computed = getComputedStyle(elm),
    padding = parseInt(computed.paddingTop) + parseInt(computed.paddingBottom);

  return elm.clientHeight - padding;
}

function getHight(selector, type = "height") {
  const div = document.querySelector(selector);

  if (div !== null && type === "height") {
    return getInnerHeight(div);
  }
  if (div !== null && type === "offsetTop") {
    return div.offsetTop;
  }
}

export default getHight;
