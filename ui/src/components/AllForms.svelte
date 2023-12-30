<script lang="ts">
    	import { onMount } from 'svelte';
    import {getAllActiveForms} from "../api/index";
    import FormCard from './FormCard.svelte';

    let forms:any = [];

onMount(async () => {
    forms = await getAllActiveForms();
});

</script>

<div>
    <h2>Aktive skjema</h2>
    {#each forms as form, index (form._id)}
    <FormCard form={form}/>
{/each}
</div>