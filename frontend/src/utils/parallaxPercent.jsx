function parallaxpercent(scrollPos, minScroll, maxScroll, minValue, maxValue) {
  let fullScale = maxScroll - minScroll;
  let scroll = scrollPos - minScroll;
  let percent = scroll / fullScale;
  let value = minValue + (maxValue - minValue) * percent;

  return Math.round(value);
}

export default parallaxpercent;
