<div
  class="fixed w-screen h-screen z-[100000] bg-white bg-opacity-50 grid place-items-center"
>
  <div class="loader" />
</div>

<style>
  .loader {
    border: 12px solid #f3f3f3;
    border-top: 12px solid #f97316;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
