<script>
  export let element
  export let index
</script>

<label class="w-full mt-8">
  <input
    class="w-full text-2xl font-bold bg-slate-100 py-2"
    type="text"
    name={'title' + index}
    placeholder="Title..."
    autocomplete="off"
    bind:value={element.value}
  />
</label>

<br />
