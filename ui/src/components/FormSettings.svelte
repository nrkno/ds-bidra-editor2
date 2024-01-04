<script lang="ts">
  import { FORM } from "../state";
  import KaleidoEditor from "./KaleidoEditor.svelte";
  import { monitorExpiry } from "../constants";
  import { orgChangelog, orgMonitor } from "@nrk/origo";

  function saveValue(ev:Event):void {
    $FORM[ev.target.id] = ev.target.value;
    console.log('New data', $FORM);
  }
  function resetForm(): void {
    console.log("reset to when opened");
  }
  function testForm(): void {
    console.log("testing form");
  }
</script>

<form on:change={saveValue}>
  <label>
    SkjemaID
    <input id="name" type="text" class="org-input" bind:value={$FORM.name} />
  </label>
  <label>
    Beskrivelse
    <textarea id="description" class="org-input">{$FORM.description}</textarea>
  </label>
  <label>
    Kontaktperson
    <input type="text" id="formContactPerson" on:keyup={saveValue} class="org-input" bind:value={$FORM.formContactPerson} />
  </label>
  <div class="org-grid">
    <div class="org-6of12">
      <label>
        Aktivt fra
        <input id="activeFrom" type="datetime-local" class="org-input" bind:value={$FORM.activeFrom} />
      </label>
    </div>

    <div class="org-6of12">
      <label>
        Aktivt til
        <input id="activeTo" type="datetime-local" class="org-input" bind:value={$FORM.activeTo} />
      </label>
    </div>
  </div>
    <KaleidoEditor id={$FORM.kaleidoId} format={"1:1"} button={true} />
  <hr />
  <h3>Monitor</h3>
  <label>
    Når kan innsendinger slettes?
    <select id="expiresInDays" bind:value={$FORM.expiresInDays} class="org-input">
      {#each monitorExpiry as me}
        <option value={me.value}>{me.label}</option>
      {/each}
    </select>
  </label>
  <label>
    Skal tilgang begrenses til en gruppe?
    <select id="accessGroupId" class="org-input" bind:value={$FORM.accessGroupId}>
      <option value="">Ingen (Åpen for alle i NRK)</option>
    </select>
  </label>
  <h3>Kvittering</h3>
  <label>
    Emne
    <input id="emailSubject" type="text" class="org-input" bind:value={$FORM.emailSubject} />
  </label>
  <label>
    Tekst som skal være med i e-posten
    <textarea id="emailDescription" class="org-input" bind:value={$FORM.emailDescription}></textarea>
  </label>
  <button class="org-button org-button--secondary" on:click|preventDefault={resetForm}
    >{@html orgChangelog} Tilbakestill</button
  >
  <button class="org-button org-button--secondary" on:click|preventDefault={testForm}
    >{@html orgMonitor} Send inn testskjema til Monitor</button
  >
</form>

<style>
</style>
