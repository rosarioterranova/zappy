export function disablePageScroll() {
  window.onscroll = function () {
    window.scrollTo(0, 0);
  };
  window.scrollTo(0, 0);
}

export function enablePageScroll() {
  window.onscroll = null;
}
