<script lang="ts">
    import {PAGE, FORM} from "../../state/index";
    export let form:any;

    function editForm() {
        $PAGE = "EDITFORM";
        $FORM=form;
    }
</script>
<div class="formcard">
    <h3>{form.name}</h3>
    <p>{form.description}</p>
    <button class="org-button org-button--primary" on:click={editForm}>Endre</button>
</div>
<style>
    .formcard {
        width:200px;
        height:100px;
        border: 1px solid green;
        padding:var(--org-medium);
        margin:var(--org-medium);
        float:left;
        border-radius: var(--org-medium);
    }
</style>