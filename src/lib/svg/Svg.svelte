<script>
    export let size = 1.5
    export let path
    export let rotation = 0
    export let stroke = 'currentColor'
    export let stroke_width = 1.5
  </script>
  
  <svg
    style="
      width: {size}rem;
      height: {size}rem;
      transform: rotate({rotation}deg);
      transition: transform 0.1s ease-in-out;"
    fill="none"
    stroke={stroke}
    stroke-width={stroke_width}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d={path} />
  </svg>
  