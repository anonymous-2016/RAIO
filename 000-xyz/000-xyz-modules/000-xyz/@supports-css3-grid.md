# @supports 


https://drafts.csswg.org/css-conditional-3/#at-supports
https://drafts.csswg.org/css-conditional-3/#ref-for-at-ruledef-supports③


```css

/* applies the rules inside the '@supports' rule only when display: flex is supported. */

@supports ( display: flex ) {
    body, #navigation, #content { display: flex; }
    #navigation { background: blue; color: white; }
    #article { background: white; color: black; }
}

/* The following example shows an additional '@supports' rule that can be used to provide an alternative for when display: flex is not supported: */

@supports not ( display: flex ) {
    body { width: 100%; height: 100%; background: white; color: black; }
    #navigation { width: 25%; }
    #article { width: 75%; }
}



.noticebox {
    border: 1px solid black;
    padding: 1px;
}

/* vendor-prefixed */

@supports ( box-shadow: 0 0 2px black inset ) or ( -moz-box-shadow: 0 0 2px black inset ) or ( -webkit-box-shadow: 0 0 2px black inset ) or ( -o-box-shadow: 0 0 2px black inset ) {
    .noticebox {
        -moz-box-shadow: 0 0 2px black inset;
        -webkit-box-shadow: 0 0 2px black inset;
        -o-box-shadow: 0 0 2px black inset;
        box-shadow: 0 0 2px black inset; /* unprefixed last */
        /* override the rule above the @supports rule */
        border: none;
        padding: 2px;
    }
}


/* parentheses */

@supports ((transition-property: color) or (animation-name: foo)) and (transform: rotate(10deg)) {
    /* // ... */
}
@supports (transition-property: color) or ((animation-name: foo) and (transform: rotate(10deg))) {
    /* // ... */
}


@supports (display: flex) {
    /* // ... */
}


@supports ((display: flex)) {
    /* // ... */
}



```


























