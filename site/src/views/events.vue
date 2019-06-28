<template>
    <main class="events">
        <h3>Events / Triggers</h3>
            
        <p>
            There are several options to trigger the display of the tooltip: <br>
            you can use a combination of these keywords: click | hover | focus
        </p>
        <p id="events-click">
            single event: <a href="#" @click.prevent v-tooltip.click="'Show on: click'">click trigger</a>
        </p>

        <p id="events-combi">
            or even a combination: <a href="#" @click.prevent v-tooltip.hover.focus="'Show on: hover.focus'">hover.focus triggers together</a>
        </p>

        <p id="events-manual">
            By the default, the <code>click</code> trigger will close when clicking anywhere on the page. <br>
            In case you want the tooltip to close when clicking again on the same element, there is an extra option.
            click event: <a href="#" @click.prevent v-tooltip.click.manual="'click + manual trigger'">click + manual trigger</a>
        </p>
        
        <iframe width="100%" height="600" src="//jsfiddle.net/hekigan/qo3x1hky/embedded/html,js,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
    </main>
</template>
