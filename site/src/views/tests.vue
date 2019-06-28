<script>
export default {
    data: function() {
        return {
            perfList: Array(1000).fill('text', 0, 1000),
            visibility: true,
            timeNow: ''
        };
    },
    mounted: function() {
        this.getTime();
    },
    computed: {
        time: function() {
            return this.timeNow;
        },
        seconds: function () {
            return Number(this.timeNow[this.timeNow.length-5]);
        }
    },
    methods: {
        getTime: function() {
            // var date = new Date();
            // this.timeNow = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            setInterval(() => {
                var date = new Date();
                this.timeNow = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`;
                // console.log(this.timeNow);
            }, 1000);
        }
    }
}
</script>


<style>
.vue-tooltip.tooltip-custom {
  background-color: red;
}

.vue-tooltip.tooltip-custom .tooltip-arrow {
  border-color: red;
}
</style>


<template>
    <main class="tests">
        <h3>Tests</h3>
        
        <section>
            <h4>Usage</h4>
            
            <section>
                <!-- BASICS -->
                <p>
                    Basic <br>
                    <code v-tooltip="'simple way'">&lt;span v-tooltip="'simple way'"...</code>
                </p>

                <p>
                    Object way <br>
                    <code v-tooltip="{ content: 'Object way' }">&lt;span v-tooltip="{ content: 'Object way' }"...</code>
                </p>
            </section>

            <section>
                <!--  HTML TARGET -->
                <h5>Referencing an HTMLElement</h5>

                <h6>Standard html element</h6>

                <p>
                    <code v-tooltip="{ html: 'id-of-html-content-by-html' }">&lt;span v-tooltip="{ html: 'id-of-html-content' }"...</code><br>
                </p>
                <p>OR</p>
                <p>
                    <code v-tooltip="{ id: 'id-of-html-content-by-id' }">&lt;span v-tooltip="{ id: 'id-of-html-content' }"...</code>
                </p>

                <p>Target</p>
                <p>
                    <code>
                        &lt;div id="id-of-html-content"...
                    </code>
                </p>

                <div id="id-of-html-content-by-html" class="tooltip-content">
                    <p v-text="time"></p>
                    <p>Let's use some <b>HTML</b> in this tooltip</p>
                    <ol>
                        <li>set <strong>v-tooltip</strong> with the <strong>html</strong> attribute</li>
                        <li><strong>html</strong> should be the <strong>id</strong> attribute of the html target element</li>
                    </ol>
                </div>

                <div id="id-of-html-content-by-id" class="tooltip-content">
                    <p v-text="time"></p>
                    <p>Let's use some <b>HTML</b> in this tooltip</p>
                    <ol>
                        <li>set <strong>v-tooltip</strong> with the <strong>id</strong> attribute</li>
                        <li><strong>id</strong> should be the <strong>id</strong> attribute of the html target element</li>
                    </ol>
                </div>
                
                <h6>Vue.js way <code>ref</code></h6>
                <p>
                    <code v-tooltip="{ ref: 'tooltipRef' }">&lt;span v-tooltip="{ ref: 'ref-of-html-content' }"...</code>
                </p>

                <p>Target</p>
                <p>
                    <code>
                        &lt;div ref="ref-of-html-content"...
                    </code>
                </p>

                <div ref="tooltipRef" class="tooltip-content">
                    <p v-text="time"></p>
                    <p>Let's use some HTML in this tooltip</p>
                    <ol>
                        <li>set <strong>v-tooltip</strong> with the <strong>ref</strong> attribute</li>
                    </ol>
                </div>
            </section>
        </section>

        <!-- POSITIONS -->
        <section>
            <h4>Positions</h4>
            <p>
                Default <span class="tooltip-target" v-tooltip="'bottom'">position</span><br>
                <code>&lt;span v-tooltip="'I am on the bottom'"...</code>
            </p>
            <p>
                Position <span class="tooltip-target" v-tooltip.right="'I am on the right'">right</span><br>
                <code>&lt;span v-tooltip.right="'I am on the right'"...</code>
            </p>
            <p>
                Position <span class="tooltip-target" v-tooltip.top="'I am on the top'">top</span><br>
                <code>&lt;span v-tooltip.top="'I am on the top'"...</code>
            </p>
            <p>
                I need a longer sentence to position <span class="tooltip-target" v-tooltip.left="'I am on the left'">left</span><br>
                <code>&lt;span v-tooltip.left="'I am on the left'"...</code>
            </p>
        </section>


        <!-- EVENTS / TRIGGERS -->
        <section>
            <h4>Events</h4>

            <p>
                There are several options to trigger the display of the tooltip:
            </p>
            <p>
                you can use a combination of these keywords: <strong>click, hover, focus</strong>
            </p>
            <p>
                <code v-tooltip.click="{ content: 'show on click' }">&lt;span v-tooltip.click="{ content: 'Show on: click' }"...</code>
            </p>
            <p>

                <code v-tooltip.focus.hover="{ content: 'Show on: focus, hover' }">&lt;span v-tooltip.focus.hover="{ content: 'Show on: focus, hover' }"...</code>
            </p>
            <p>
                Click to open AND close<br>
                <code v-tooltip.click.manual="{ content: 'show/hide on click' }">
                    &lt;span v-tooltip.click.manual="{ content: 'Show on click' }"...</code>
            </p>
        </section>

        <!-- VISIBILITY -->
        <section>
            <h4>Visibility</h4>
            <p>
                <!-- simple toggle -->
                <button @click="visibility = !visibility">
                    <span v-if="visibility">hide</span>
                    <span v-else>show</span>
                    tooltip
                </button>
                &nbsp;
                <!-- toggle + hover tooltip -->
                <button @click="visibility = !visibility" v-tooltip.hover.right="{ content: 'Hovering!', visible: visibility }">
                    <span v-if="visibility">Hover Hide Tooltip</span>
                    <span v-else>Hover Show Tooltip</span>
                </button>
            </p>

            <p>
                In case you need to toggle a tooltip's visibility, you can use the <b class="tooltip-target" v-tooltip.top="{ content: 'change the visibility', visible: visibility }">visible</b> option
            </p>
            <p>
                <code>&lt;span v-tooltip="{ content: 'change the visibility', visible: <span v-text="visibility"></span> }"...</code>
            </p>
            <p>
                Toggle visibility AND disable triggers (hover, click, focus) <b class="tooltip-target" v-tooltip.bottom.notrigger="{ content: 'change the visibility', visible: visibility }">visible</b> option
            </p>
            <p>
                <code>&lt;span v-tooltip.notrigger="{ content: 'change the visibility', visible: <span v-text="visibility"></span> }"...</code>
            </p>
        </section>

        <!-- OFFSET -->
        <section>
            <h4>Tooltip offset</h4>
            
            <p>
                <code v-tooltip.top="{ content: 'let\'s offset this', offset: 20 }">
                    &lt;span v-tooltip="{ offset: 20 }"...</code>
            </p>
        </section>

        <!-- CUSTOM CSS -->
        <section>
            <h4>Custom CSS classes</h4>
            
            <p>
                <code  v-tooltip.top="{ content: 'custom class', class: 'tooltip-custom tooltip-other-custom' }">
                    &lt;span v-tooltip="{ class: 'tooltip-custom tooltip-other-custom' }"...</code>
            </p>
        </section>

        <!-- PERFORMANCE TEST -->
        <section>
            <div id="perf-test">
                <div v-for="(o, index) in perfList" :key="index">
                    <span class="tooltip-target" v-tooltip="time">Performance item <span v-text="index"></span></span>
                </div>
            </div>
        </section>

    </main>
</template>
