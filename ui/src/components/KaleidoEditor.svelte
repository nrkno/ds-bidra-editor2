<script lang="ts">
  import kaleido from "@nrk/kaleido-ui";
  import { onMount } from "svelte";
  export let saveImage: any;
  export let id: string;
  export let format: string;
  export let button: boolean;
  let editor: any;
  const IMAGE_MAX_WIDTH = 350;

  onMount(() => {
    kaleido.initialize({
      username: "bildebanken-keyart",
      environment: "stage",
    });

    if (id) {
      kaleido.editor(editor, {
          id,
          format,
          onDragend: handleImageChanged,
        });
    }
  });
  function selectImage(state: any) {
    const selectedId = state.selected[0];
    kaleido.editor(editor, { id: selectedId, format, onDragend: handleImageChanged });
    console.log("selected", selectedId);
    //saveImage(selectedId);
  }

  type kaleidoDerivate = {
    format: string;
    h: number;
    height: number;
    id: string;
    orientation: number;
    quality: number;
    transformation: [];
    type: string;
    uri: string;
    url: URL;
    w: number;
    width: number;
    x: number;
    y: number;
  };
  function handleImageChanged(data: any) {
    console.log("drag ended");
    const kaleidoParameters = { ...data.params, width: IMAGE_MAX_WIDTH };
    kaleido.getDerivate(id, kaleidoParameters).then((derivate: kaleidoDerivate) => {
      saveImage(derivate.uri);
      //id = derivate.uri;
    });
  }
</script>

{#if id}
  <div class={button ? "bidraButton" : ""} bind:this={editor} />
{/if}
<button
  name="open"
  class="org-button"
  on:click|preventDefault={() => kaleido.picker({ onChange: selectImage, multiple: false })}
>
  Velg bilde
</button>
{id}

<style>
  .bidraButton {
    width: 200px;
    height: 200px;
    clip-path: circle(100px at center);
    margin: 10px;
  }
</style>
