<template>
    <main class="globals">
        <h3>Change global default values</h3>

        <p>
            Default values
        </p>
        <pre>
            <code>
{
    delay: 200,
    placement: 'auto',
    class: '', // ex: 'tooltip-custom tooltip-other-custom'
    triggers: ['hover', 'focus'],
    offset: 5
}
            </code>
        </pre>
        <p>
            If you have a need to change certain default value(s) for all tooltips:
        </p>
        <pre>
            <code>
Vue.use(vueDirectiveTooltip, {
    delay: 500,
    placement: 'right',
    class: 'tooltip-red',
    triggers: ['hover'],
    offset: 0
});
            </code>
        </pre>
    </main>
</template>
