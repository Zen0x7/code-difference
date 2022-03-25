<template>
    <div>
        <h4 class="font-normal text-80 mt-30">Differences</h4>
        <code-diff class="code-diff" :old-string="field.value.past" :new-string="field.value.next" :context="50" outputFormat="side-by-side" />
    </div>
</template>

<style scoped>
    .code-diff {
        margin-top: 30px;
    }
    .mt-30 {
        margin-top: 30px;
    }
</style>

<script>
    import CodeDiff from 'vue-code-diff';

    export default {
        props: ['resource', 'resourceName', 'resourceId', 'field'],
        components: { CodeDiff }
    }
</script>
