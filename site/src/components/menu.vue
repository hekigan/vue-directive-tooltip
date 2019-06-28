<template>
    <menu class="aside-menu" :class="{hidden: hide}">
        <div class="lists">
        <ul class="main-list">
                <li>
                    <a v-tooltip.right="'Vue directive tooltip repository'" href="https://github.com/hekigan/vue-directive-tooltip" class="github-logo"><span class="label">Github</span></a>
                </li>
                <li><router-link to="/">home</router-link></li>
                <li><router-link to="/setup">setup</router-link></li>
                <li><router-link to="/globals">global values</router-link></li>
                <li><router-link to="/usage">Usage</router-link></li>
                <li>
                    <span>options</span>
                    <ul>
                        <li><router-link to="/positions">positions</router-link></li>
                        <li><router-link to="/delay">delay</router-link></li>
                        <li><router-link to="/offset">offset</router-link></li>
                        <li><router-link to="/events">events/triggers</router-link></li>
                        <li><router-link to="/custom">custom css</router-link></li>
                        <li><router-link to="/ios">iOS</router-link></li>
                    </ul>
                </li>
            </ul>

            <section v-if="dev" class="tests">
                <ul>
                    <li><router-link to="/tests">tests</router-link></li>
                </ul>
            </section>
        </div>

        <footer class="footer">
            <p>
                &copy;<span v-text="year"></span> Laurent Blanes <br>
                All rights reserved
            </p>
        </footer>
    </menu>
</template>

<script>
export default {
    name: 'aside-menu',
    props: ['hide'],
    computed: {
        dev() {
            return process.env.NODE_ENV === 'development';
        },
        year() {
            const d = new Date();
            return d.getUTCFullYear();
        }
    }
}
</script>
