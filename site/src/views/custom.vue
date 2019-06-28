<template>
    <main class="custom">
        <h3>Custom css / class</h3>
            
        <p>
            Let's personalize a bit this tooltip! <br>
            Wants some red? Here is how to do it.
        </p>
        <ol>
            <li>
                add somewhere in your css file the classes that you want to use. <br>
                Let's say... <code>.tooltip-custom</code> <br>
                It can be whatever you want.
                <br>
                We have to account for the arrow color also depending on the tooltip's position.
            </li>
            <li>in your directive options object, specify your css class name(s)</li>
        </ol>
        
        <iframe width="100%" height="230" src="//jsfiddle.net/hekigan/mz56y1g0/embedded/css,html,js,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
    </main>
</template>
