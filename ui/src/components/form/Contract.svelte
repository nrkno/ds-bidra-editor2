<script lang="ts">
    import { onMount } from "svelte";
    import { getAllAgreements } from "../../api/index";

    let agreementText:string='';
    onMount(async () => {
        const agreements = await getAllAgreements();
        agreementText=agreements[0].text.text.nb;
    })
</script>

<label>
    <textarea disabled={true}>{agreementText}</textarea>
    <br />
    <label><input type="checkbox" class="org-input" />Lest og godtatt</label>
</label>