<script>
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;
    let element
  
    function dragStart(e) {
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;
  
      isDragging = true;
    }
  
    function dragEnd(e) {
      isDragging = false;
    }
  
    function drag(e) {
      if (isDragging) {
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
  
        xOffset = currentX;
        yOffset = currentY;
  
        requestAnimationFrame(() => setTranslate(currentX, currentY));
      }
    }
  
    function setTranslate(xPos, yPos) {
      element.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }
  </script>
  
  <div bind:this={element}
       on:mousedown={dragStart}
       on:mouseup={dragEnd}
       on:mousemove={drag}>
    Drag me!
  </div>