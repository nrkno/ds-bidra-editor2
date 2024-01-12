<script lang="ts">
  import { FORM } from "../state";
  import { orgGarbage, orgEditMetadata, orgMoveVertical } from "@nrk/origo";
  import KaleidoEditor from "./KaleidoEditor.svelte";
  import Video from "./form/Video.svelte";
  import Contract from "./form/Contract.svelte";
  import FormComponents from "./FormComponents.svelte";
  import FormEdit from "./FormEdit.svelte";
  export let item: any;
  export let index: number;

  function saveImage(derivateId: string): void {
    $FORM.form[index].kaleidoid = derivateId;
  }
  function toggleEditMode(): void {
    $FORM.form.forEach((f, idx) => {
      if (idx !== index) {
        $FORM.form[idx].editing = false;
      } else {
        $FORM.form[idx].editing = !f.editing;
      }
    });
  }
  function deleteItem(): void {
    const tempForm = $FORM.form;
    tempForm.splice(index, 1);
    $FORM.form = tempForm;
  }
</script>

<div class="formElement org-grid">
  <div class="org-1of12 dragButton">{@html orgMoveVertical}</div>
  <div class="org-7of12">
    {#if ["text", "date", "file", "email"].includes(item.type)}
      <label>
        {item.label?.nb}
        {#if item.validations?.required}<span class="required">*</span>{/if}
        <input type={item.type} class="org-input" />
      </label>
    {/if}
    {#if item.type === "textarea"}
      <label>
        {item.label?.nb}
        {#if item.validations?.required}<span class="required">*</span>{/if}
        <textarea class="org-input"></textarea>
      </label>
    {/if}
    {#if item.type === "checkbox"}
      <label
        >{item.label?.nb}
        <input type="checkbox" class="org-input" />
      </label>
    {/if}
    {#if item.type === "label"}
      <p class={`labelSize_${item.className}`}>{item.label?.nb}</p>
    {/if}
    {#if item.type === "radioGroup"}
      <p>{item.label?.nb}</p>
      <select class="org-input">
        <!--         {#each item.items as itm}
          <option value={itm.value}>{itm.name}</option>
        {/each} -->
      </select>
    {/if}
    {#if item.type === "line"}
      {item.label?.nb}
      <hr />
    {/if}
    {#if item.type === "video"}
      <p>{item.label?.nb || ""}</p>
      {#if item.videoId}
        <Video videoId={item.videoId} videoAspect={item.videoAspect} />
      {:else}
        <span>Du må velge en video {item.videoId} {item.videoAspect}</span>
      {/if}
    {/if}
    {#if item.type === "list"}
      <p>{item.label?.nb}</p>
      <select class="org-input">
        <!--         {#each item.items as itm}
          <option value={itm.value}>{itm.name}</option>
        {/each} -->
      </select>
    {/if}
    {#if item.type === "checkboxGroup"}
      <p>{item.label?.nb}</p>
      <!--       {#each item.items as itm}
        <label>
          {item.name}
          <input type="checkbox" class="org-input" checked={itm.checked} />
        </label>
      {/each} -->
    {/if}
    {#if item.type === "image"}
      <figure>
        <KaleidoEditor {saveImage} id={item.kaleidoid} format="16:9" button={false} />
        {#if item.kaleidoid}
        {item.label.nb}
        <p class="altText"><strong>AltText </strong>{item.alternativeText || '(Mangler)'}</p>
        {/if}
      </figure>
    {/if}
    {#if item.type === "contract"}
      <Contract />
    {/if}
    {#if item.editing}
      <FormEdit {index} componentData={item} />
    {/if}
  </div>
  <div class="org-3of12">
    <FormComponents {index} />
  </div>
  <div class="org-1of12">
    <button on:click={deleteItem} class="org-button">{@html orgGarbage}</button>
    <button on:click={toggleEditMode} class="org-button">{@html orgEditMetadata}</button>
  </div>
</div>

<style>
  .formElement {
    padding: 9px;
    margin-bottom: 9px;
  }
  .formElement:hover {
    background: #d8dcdf;
  }
  .image {
    width: 350px;
    height: auto;
  }
  .required {
    color: red;
  }
  .labelSize_h1 {
    font-size: 3em;
  }
  .labelSize_h2 {
    font-size: 2em;
  }
  .labelSize_p {
    font-size: 1.5em;
  }
  .dragButton {
    cursor: grab;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 1.5em;
  }
  .altText {
    background:rgb(255,255,255,0.7);
    position:relative;
    width:90%;
    text-align: center;
    margin:auto;
    top:-80px;
  }
</style>
