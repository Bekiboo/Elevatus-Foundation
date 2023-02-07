export function isClickOutsideElement(clickEvent, element) {
    // Get the parent node of the element
    const parent = element.parentNode;
  
    // Check if the parent node contains the element
    const isInside = parent.contains(element);
  
    // Return the opposite of isInside, since we want to know if the click occurred outside of the element
    return !isInside;
  }

  export function getPreview(image, max_size = 500 * 1024) {
    if (image.size > max_size) {
      alert('File size is too big. Please select a file less than 500KB.')
      return
    }
    return URL.createObjectURL(image)
  }