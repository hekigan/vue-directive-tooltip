<template>
    <main class="ios">
        <h3>iOS</h3>

        <p>
            Due to a <b>feature/bug</b> in mobile iOS/safari combo, users will have to tap twice to obtain a proper <b>click/tap</b>.
        </p>

        <iframe width="100%" height="200" src="//jsfiddle.net/hekigan/5z307kuc/embedded/html,js,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
        
        <p>
            It's not a bug per say but a feature according to Safari's devs.
            This is a famous problem and I did a lot of digging to see what was involved.
        </p>
        <p>
            It is annoying to go around but at the same time I do understand the reason behind the implementation.
            First tap is for the <b>hover</b> event (either JS or CSS -this is important-), the second confirms that you want to <b>click</b> and not just hover.
        </p>
        <p>
            In the situation in which you just have a normal tooltip (let's say for a pagination), you want to just display the tooltip on the first tap and then click it on the second one.
            That's all well, but this tooltip lib can also be used to display interactive html content (like a menu). And in this case, it means trouble because you don't want to tap twice to activate a link.
        </p>
        <p>
            For this specific reason and because I don't want to have a breaking change, I think that the most elegant solution is to add a <code>.ios</code> modifier (like <code>.prevent</code> for example).
            What it will do is, on mobile safari on iOS, remove the hover event and substitute the click event for it. On other platform, it will retain the usual behaviour without any need for you to get involved.
            I did test a first implementation and it fixed the issue for me.
        </p>
    </main>
</template>
