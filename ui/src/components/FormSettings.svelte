<script lang="ts">
    import {FORM} from "../state";
    function resetForm():void {
        console.log("reset to when opened")
    }
    function testForm():void {
        console.log("testing form");
    }
</script>
    <form>
        <label>
            SkjemaID
            <input type="text" class="org-input" value={$FORM.name}>
        </label>
        <label>
            Beskrivelse
            <textarea class="org-input">{$FORM.description}</textarea>
        </label>
        <label>
            Kontaktperson
            <input type="text" class="org-input" value={$FORM.formContactPerson}>
        </label>
        <label>
            Aktivt fra
            <input type="date" class="org-input" value={$FORM.activeFrom}>
        </label>
        <label>
            Aktivt til
            <input type="date" class="org-input" value={$FORM.activeTo}>
        </label>
        <img alt="" class="image" src={`https://gfx.nrk.no/${$FORM.kaleidoId}`}/>
        <hr>
        <button class="org-button org-button--secondary" on:click|preventDefault={resetForm}>Tilbakestill</button>
        <button class="org-button org-button--secondary" on:click|preventDefault={testForm}>Send inn testskjema til Monitor</button>
    </form>

    <style>
        .image {
            border-radius: 50%;
        }
    </style>
