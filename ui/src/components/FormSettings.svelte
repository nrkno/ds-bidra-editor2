<script lang="ts">
  import { FORM } from "../state";
  import KaleidoEditor from "./KaleidoEditor.svelte";
  import { monitorExpiry } from "../constants";
  import { orgChangelog, orgMonitor } from "@nrk/origo";

  function resetForm(): void {
    console.log("reset to when opened");
  }
  function testForm(): void {
    console.log("testing form");
  }
</script>

<form>
  <label>
    SkjemaID
    <input type="text" class="org-input" bind:value={$FORM.name} />
  </label>
  <label>
    Beskrivelse
    <textarea class="org-input">{$FORM.description}</textarea>
  </label>
  <label>
    Kontaktperson
    <input type="text" class="org-input" bind:value={$FORM.formContactPerson} />
  </label>
  <div class="org-grid">
    <div class="org-6of12">
      <label>
        Aktivt fra
        <input type="date" class="org-input" bind:value={$FORM.activeFrom} />
      </label>
    </div>

    <div class="org-6of12">
      <label>
        Aktivt til
        <input type="date" class="org-input" bind:value={$FORM.activeTo} />
      </label>
    </div>
  </div>
    <KaleidoEditor id={$FORM.kaleidoId} format={"1:1"} button={true} />
    <!-- <img alt="" class="image" src={`https://gfx.nrk.no/${$FORM.kaleidoId}`} /> -->
  <hr />
  <h3>Monitor</h3>
  <label>
    Når kan innsendinger slettes?
    <select bind:value={$FORM.expiresInDays} class="org-input">
      {#each monitorExpiry as me}
        <option value={me.value}>{me.label}</option>
      {/each}
    </select>
  </label>
  <label>
    Skal tilgang begrenses til en gruppe?
    <select class="org-input">
      <option value="">Ingen (Åpen for alle i NRK)</option>
    </select>
  </label>
  <h3>Kvittering</h3>
  <label>
    Emne
    <input type="text" class="org-input" bind:value={$FORM.emailSubject} />
  </label>
  <label>
    Tekst som skal være med i e-posten
    <textarea class="org-input">{$FORM.emailDescription}</textarea>
  </label>
  <button class="org-button org-button--secondary" on:click|preventDefault={resetForm}
    >{@html orgChangelog} Tilbakestill</button
  >
  <button class="org-button org-button--secondary" on:click|preventDefault={testForm}
    >{@html orgMonitor} Send inn testskjema til Monitor</button
  >
</form>

<style>
  .image {
    border-radius: 50%;
    width: 200px;
    height: auto;
  }
</style>
