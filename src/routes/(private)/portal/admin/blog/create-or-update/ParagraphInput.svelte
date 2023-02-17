<script>
  export let element
  export let index
</script>

<label class="w-full mt-4">
  <textarea
    class="w-full h-48 bg-slate-100"
    type="message"
    name={'paragraph' + index}
    placeholder="Paragraph..."
    bind:value={element.value}
  />
</label>
