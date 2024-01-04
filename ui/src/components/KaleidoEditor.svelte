<script lang="ts">
  import kaleido from "@nrk/kaleido-ui";
  import { onMount } from "svelte";
  export let id: number;
  export let format: string;
  export let button: boolean;
  let editor: any;

  let crop: any;

  onMount(() => {
    kaleido.initialize({
      username: "bildebanken-keyart",
      environment: "stage",
    });

    if (id) {
      kaleido.editor(editor, {
        id,
        format,
        onChange: handleImageChanged,
      });

      kaleido
        .getDerivate(id, {
          width: 4096,
        })
        .then(({ url }) => {
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.src = url;
          img.decode().then(() => {
            image = img;
          });
        });
    }
  });
  function selectImage(state) {
    const selectedId = state.selected[0];
    kaleido.editor(editor, {
      id: selectedId,
      onChange: handleImageChanged,
    });

    kaleido
      .getDerivate(selectedId, {
        width: 4096,
      })
      .then(({ url }) => {
        const img = new Image();
        img.src = url;
        img.crossOrigin = "anonymous";
        img.decode().then(() => {
          image = img;
        });
      });
  }

  function handleImageChanged(state) {
    crop = state.params;
    console.log("crop", crop);
  }
</script>

<div class={button ? "bidraButton" : ""} bind:this={editor}></div>
<button
  name="open"
  class="org-button"
  on:click={() => kaleido.picker({ onChange: selectImage, multiple: false })}
>
  Velg bilde
</button>

<style>
  .bidraButton {
    width: 200px;
    height: 200px;
    clip-path: circle(100px at center);
    margin: 10px;
  }
</style>
