var container = document.querySelector('.container');
var isMouseDown = false;
var startX;
var scrollLeft;

container.addEventListener('mousedown', function(event) {
  isMouseDown = true;
  startX = event.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener('mousemove', function(event) {
  if (!isMouseDown) return;
  event.preventDefault();
  var x = event.pageX - container.offsetLeft;
  var walk = (x - startX) * 1.5; // Adjust the scroll speed as needed
  container.scrollLeft = scrollLeft - walk;
});

window.addEventListener('mouseup', function() {
  isMouseDown = false;
});
