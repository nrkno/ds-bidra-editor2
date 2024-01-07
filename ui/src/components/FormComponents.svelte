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
    orgDropdownArrowDown,
  } from "@nrk/origo";
  export let componentData: any;
  export let index: number;


  function updateType(ev: any): void {
    const type = ev.target.value;
    console.log("type", type);
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
      case "video":
        $NEWFORM[index].videoId = "0b5f3b0a-7577-4b81-93bb-1d4e85a4aa5a";
        $NEWFORM[index].videoAspect = "16:9";
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
  {#if $NEWFORM[index]}
    <div class="org-8of12">
      <select on:change={updateType} class="org-input">
        {#each FORM_COMPONENTS as fc}
          <option value={fc.id}>{fc.description}</option>
        {/each}
      </select>
      <!--       <button class="org-button toggleTypesButton">
        Type
        {@html orgDropdownArrowDown}</button
      >
      <bidraeditor-dropdown id={`dd${index}`} hidden>
        {#each FORM_COMPONENTS as fc}
          <button
            class={`org-button${fc.id === componentData.type ? " selectedType" : ""}`}
            on:click={() => {
              updateType(fc.id);
            }}>{@html fc.icon} {fc.description}</button
          >
        {/each}
      </bidraeditor-dropdown> -->
    </div>
  {/if}
</div>

<style>
  .selectedType {
    background: var(--org-color-gray-300);
  }
  .toggleTypesButton {
    border: 1px solid;
  }
  .typesDropDown {
    border: 1px solid;
    padding: 5px;
    z-index: 2;
  }
</style>
