function parallaxpercent(scrollPos, minScroll, maxScroll, minValue, maxValue) {
  let fullScale = maxScroll - minScroll;
  let scroll = scrollPos - minScroll;
  let percent = scroll / fullScale;
  let value = minValue + (maxValue - minValue) * percent;

  if (scrollPos < minScroll) {
    return minValue;
  } else if (scrollPos > maxScroll) {
    return maxValue;
  } else {
    return Math.round(value);
  }
}

export default parallaxpercent;
