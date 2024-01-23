<script lang="ts">
  import { FORM, SAVED_FORM, USERDATA, type FormEventHandler } from "../state";
  import KaleidoEditor from "./KaleidoEditor.svelte";
  import { monitorExpiry } from "../constants";
  import { orgChangelog, orgMonitor } from "@nrk/origo";
  import { saveSettingsValue, resetForm } from "editState";

  function saveImage(derivateId: string): void {
    $FORM.kaleidoId = derivateId;
  }

  function convertTime(datestring: string) {
    if (!datestring) {
      return undefined;
    }
    return new Date(datestring).toISOString().substr(0, 16);
  }
  $: activeFrom = convertTime($FORM.activeFrom);
  $: activeTo = convertTime($FORM.activeTo);

 function _saveValue(event: FormEventHandler): void {
    saveSettingsValue(event);
  }

  function testForm(): void {
    console.log("testing form");
  }
</script>

<form on:change={_saveValue}>
  <button type="button">Generelt</button>
  <be-expand>
    <label>
      SkjemaID
      <span class="required">*</span>
      <input id="name" type="text" class="org-input" value={$FORM.name} />
      <a href={`https://bidra.nrk.no/${$FORM.name}`}>{`https://bidra.nrk.no/${$FORM.name}`}</a><br
      />
    </label>
    <label>
      Beskrivelse
      <textarea id="description" class="org-input">{$FORM.description}</textarea>
    </label>
    <label>
      Kontaktperson
      <span class="required">*</span>
      <input
        type="text"
        id="formContactPerson"
        on:keyup={_saveValue}
        class="org-input"
        value={$FORM.formContactPerson}
      />
    </label>
    <div class="org-grid">
      <div class="org-6of12">
        <label>
          Aktivt fra
          <input id="activeFrom" type="datetime-local" class="org-input" value={activeFrom} />
        </label>
      </div>

      <div class="org-6of12">
        <label>
          Aktivt til
          <span class="required">*</span>
          <input id="activeTo" type="datetime-local" class="org-input" value={activeTo} />
        </label>
      </div>
    </div>
    <KaleidoEditor {saveImage} id={$FORM.kaleidoId} format={"1:1"} button={true} />
  </be-expand>
  <button type="button"> Monitor</button>
  <be-expand>
    <label>
      Når kan innsendinger slettes?
      <select id="expiresInDays" value={$FORM.expiresInDays} class="org-input">
        {#each monitorExpiry as me}
          <option value={me.value}>{me.label}</option>
        {/each}
      </select>
    </label>
    <label>
      Skal tilgang begrenses til en gruppe?
      <select id="accessGroupId" class="org-input" value={$FORM.accessGroupId}>
        <option value="">Ingen (Åpen for alle i NRK)</option>
        {#if $USERDATA.accessGroups.length >= 1}
          {#each $USERDATA.accessGroups as ag}
            <option value={ag.id}>{ag.name}</option>
          {/each}
        {/if}
      </select>
    </label>
  </be-expand>
  <button type="button">Kvittering</button>
  <be-expand>
    <label>
      Emne
      <input
        id="emailSubject"
        type="text"
        class="org-input"
        value={$FORM.emailReceipt.languages.nb.subject}
      />
    </label>
    <label>
      Tekst som skal være med i e-posten
      <textarea
        id="emailDescription"
        class="org-input"
        value={$FORM.emailReceipt.languages.nb.description}
      ></textarea>
    </label>
    <label>
      Inkluder skjema i e-posten
      <input
        type="checkbox"
        class="org-switch"
        id="includeMetadata"
        checked={$FORM.emailReceipt.includeMetadata}
      />
    </label>
  </be-expand>
  <button class="org-button org-button--secondary" on:click|preventDefault={resetForm}
    >{@html orgChangelog} Tilbakestill</button
  >
  <button class="org-button org-button--secondary" on:click|preventDefault={testForm}
    >{@html orgMonitor} Send inn testskjema til Monitor</button
  >
</form>

<style>
  .required {
    color: red;
  }
</style>
