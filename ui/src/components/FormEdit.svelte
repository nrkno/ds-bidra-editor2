<script lang="ts">
  import { NEWFORM, FORM } from "../state";
  import { saveFormToDatabase } from "api/index";
  import { orgExternalLink, orgInfo } from "@nrk/origo";
  export let componentData: any;
  export let index: number;

  async function saveValue(ev: Event): Promise<void> {
    if (ev.target.id === "required") {
      $NEWFORM[index][ev.target.id] = ev.target.checked;
    } else {
      $NEWFORM[index][ev.target.id] = ev.target.value;
    }
    const saved = await saveFormToDatabase({ ...$FORM, form: $NEWFORM });
    console.log("Saved to database", saved);
  }
  function init(el: HTMLElement) {
    el.focus();
  }
</script>

<div class="org-editorial org-grid" style="padding: var(--org-small)">
  <div class="org-10of12">
    <form>
      <label>
        Overskrift
        <input
          on:keyup={saveValue}
          id="label"
          type="text"
          class="org-input"
          on:focus={(evt) => evt.target.select()}
          use:init
          value={componentData.label}
        />
      </label>
      {#if ["text", "textarea", "date", "checkbox", "contract", "file", "email"].includes(componentData.type)}
        <label>
          Påkrevd
          <input
            on:change={saveValue}
            id="required"
            type="checkbox"
            class="org-switch"
            checked={componentData.required}
          />
        </label>
      {/if}
      {#if componentData.type === "image"}
        <label>
          Alternativ tekst
          <input
            on:change={saveValue}
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
          <input
            on:change={saveValue}
            type="text"
            id="videoId"
            class="org-input"
            value={componentData.videoId}
          />
          {@html orgInfo}Les mer her om hvordan du kan legge inn video i Bidra-skjemaet
          <a
            href="https://nrkconfluence.atlassian.net/wiki/spaces/DIGSPED/pages/136118721/Legge+inn+video+i+Bidra-skjema"
            target="_blank"
            class="org-button"
            rel="noreferrer"
          >
            {@html orgExternalLink}
          </a>
        </label>
        <br />
        <label>
          Video Aspekt
          <select
            on:change={saveValue}
            id="videoAspect"
            bind:value={componentData.videoAspect}
            class="org-input"
          >
            <option value="16:9">16:9 (Normal)</option>
            <option value="4:3">4:3 (Arkivstoff)</option>
            <option value="9:16">9:16 (Mobil)</option>
            <option value="1:1">1:1 (Instagram)</option>
          </select>
        </label>
      {/if}
      {#if componentData.type === "file"}
        <label>
          Filtyper
          <select
            on:change={saveValue}
            id="accepted"
            bind:value={componentData.accepted}
            class="org-input"
          >
            <option value="image">Kun bilder</option>
            <option value="video">Kun video</option>
            <option value="imageandvideo">Kun bilder og video</option>
          </select>
        </label>
      {/if}
      {#if componentData.type === "contract"}
        <label>
          Avtaletekst
          <select
            on:change={saveValue}
            id="contract"
            bind:value={componentData.contract}
            class="org-input"
          >
            <option value="general">Generell</option>
            <option value="casting">Casting</option>
          </select>
        </label>
      {/if}
    </form>
  </div>
</div>

<style>
</style>
