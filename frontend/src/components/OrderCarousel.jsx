function OrderCarousel(props) {
  function closeCarousel() {
    props.close();
    props.setTable();
  }

  return (
    <div className="CarouselOut">
      <div>i am a carousel</div>
      <button onClick={() => closeCarousel()}>close</button>
    </div>
  );
}

export default OrderCarousel;
