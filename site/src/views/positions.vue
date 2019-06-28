<template>
    <main class="positions">
        <h3>Positioning</h3>
            
        <p>
            5 different positions are available: auto (default) | bottom | top | left | right
        </p>
        <p id="position-default">
            Default positioning: <a href="#" @click.prevent v-tooltip="'auto'">auto tooltip</a>
        </p>
        <code>&lt;span v-tooltip="'auto positionning'">Tooltip&lt;/span></code>
        
        <p id="position-bottom">
            Bottom positioning: <a href="#" @click.prevent v-tooltip.bottom="'bottom'">bottom tooltip</a>
        </p>
        <code>&lt;span v-tooltip.bottom="'bottom'">bottom tooltip&lt;/span></code>
        
        <p id="position-top">
            Top positioning: <a href="#" @click.prevent v-tooltip.top="'top'">top tooltip</a>
        </p>
        <code>&lt;span v-tooltip.top="'top'">top tooltip&lt;/span></code>

        <p id="position-left">
            Left positioning: <a href="#" @click.prevent v-tooltip.left="'left'">left tooltip</a>
        </p>
        <code>&lt;span v-tooltip.left="'left'">left tooltip&lt;/span></code>

        <p id="position-right">
            Right positioning: <a href="#" @click.prevent v-tooltip.right="'right'">right tooltip</a>
        </p>
        <code>&lt;span v-tooltip.right="'right'">right tooltip&lt;/span></code>
    </main>
</template>
