<script lang="ts">
  import { NEWFORM } from "../state";
  import {
    orgImage,
    orgUpload,
    orgList,
    orgDate,
    orgRightsOther,
    orgCheckC,
    orgDotHollow,
    orgPlayCl,
  } from "@nrk/origo";
  export let componentData: any;
  export let index: number;
  function updateLabel(ev: any): void {
    $NEWFORM[index].label = ev.target.value;
  }
  function updateRequired(ev: any): void {
    $NEWFORM[index].required = ev.target.checked;
  }
  function updateType(type: string): void {
    $NEWFORM[index].type = type;
    switch (type) {
      case "image":
        $NEWFORM[index].kaleidoId = "U3_Lg50O2IFV_8s4MTzxKAst5YsDnzsr3j5eqQjlq8Yg";
        $NEWFORM[index].alt = "Et bilde";
        break;
      case "email":
        $NEWFORM[index].fieldName = "email";
      case "file":
        $NEWFORM[index].accepted = "imageandvideo";
        break;
      case "contract":
        $NEWFORM[index].emailTemplate = "general";
        break;
      case "list":
        $NEWFORM[index].items = [{ name: "Valg", value: "verdi" }];
        break;
      case "checkboxGroup":
        $NEWFORM[index].items = [{ name: "Valg", checked: true }];
        break;
      default:
        break;
    }
  }
  const FORM_COMPONENTS = [
    { id: "text", description: "Kort spørsmål", icon: "<span>A_</span>" },
    { id: "textarea", description: "Langt spørsmål", icon: "<span>ABC_</span>" },
    { id: "date", description: "Dato", icon: orgDate },
    { id: "checkbox", description: "Avkryss", icon: orgCheckC },
    { id: "checkboxGroup", description: "Avkrysningsbokser", icon: orgDotHollow },
    { id: "list", description: "Liste", icon: orgList },
    { id: "contract", description: "Avtale", icon: orgRightsOther },
    { id: "file", description: "Filopplasting", icon: orgUpload },
    { id: "image", description: "Bilde", icon: orgImage },
    { id: "video", description: "Videoklipp", icon: orgPlayCl },
    { id: "label", description: "Tekst", icon: `<span>A</span>` },
    { id: "email", description: "E-post", icon: `<span></span>` },
  ];
</script>

<div class="org-editorial org-grid" style="padding: var(--org-small)">
  <div class="org-8of12">
    {#each FORM_COMPONENTS as fc}
      <button
        class={`org-button${fc.id === componentData.type ? " selectedType" : ""}`}
        on:click={() => {
          updateType(fc.id);
        }}>{@html fc.icon} {fc.description}</button
      >
    {/each}
  </div>
  <div class="org-4of12">
    <label>
      Overskrift
      <input type="text" class="org-input" on:blur={updateLabel} value={componentData.label} />
    </label>
    {#if ["text", "textarea", "date", "checkbox", "contract", "file", "email"].includes(componentData.type)}
      <label>
        Påkrevd
        <input
          type="checkbox"
          class="org-switch"
          on:change={updateRequired}
          checked={componentData.required}
        />
      </label>
    {/if}
    {#if componentData.type === "image"}
      <label>
        Alternativ tekst
        <input
          type="text"
          id="alternativeText"
          class="org-input"
          value={componentData.alternativeText}
        />
      </label>
    {/if}
    {#if componentData.type === "video"}
      <label>
        Video ID
        <input type="text" id="videoId" class="org-input" value={componentData.videoId} />
      </label>
      <label>
        Video Aspeckt
        <select id="videoAspect" bind:value={componentData.videoAspect} class="org-input">
          <option value="16:9">16:9 (normal)</option>
          <option value="4:3">4:3 (arkiv)</option>
          <option value="9:16">9:16 (Høyde)</option>
        </select>
      </label>
    {/if}
    {#if componentData.type === "file"}
      <label>
        Filtyper
        <select id="accepted" bind:value={componentData.accepted} class="org-input">
          <option value="image">Kun bilder</option>
          <option value="video">Kun video</option>
          <option value="imageandvideo">Kun bilder og video</option>
        </select>
      </label>
    {/if}
    {#if componentData.type === "contract"}
      <label>
        Avtaletekst
        <select id="accepted" bind:value={componentData.contract} class="org-input">
          <option value="general">Generell</option>
          <option value="casting">Casting</option>
        </select>
      </label>
    {/if}
  </div>
</div>

<style>
  .selectedType {
    border: 1px solid var(--org-color-gray-500);
  }
</style>
