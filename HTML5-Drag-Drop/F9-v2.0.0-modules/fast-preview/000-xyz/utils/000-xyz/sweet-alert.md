# sweetalert

> Pretty cool, huh?

https://sweetalert.js.org/


https://limonte.github.io/sweetalert2/

https://github.com/t4t5/sweetalert

https://sweetalert.js.org/guides/
https://sweetalert.js.org/docs/


```js

alert("Oops, something went wrong!");

swal("Oops", "Something went wrong!", "error");

// <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
// https://unpkg.com/sweetalert@2.0.8/dist/sweetalert.min.js

swal("Good job!", "You clicked the button!", "success");

/*

And with a third argument, you can add an icon to your alert!
There are 4 predefined ones:
"warning", "error", "success" and "info".

*/

swal({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
});


swal({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
    button: "Aww yiss!",
})

// https://sweetalert.js.org/docs/#button

// Default:
button: {
    text: "OK",
    value: true,
    visible: true,
    className: "",
    closeModal: true,
}

// https://sweetalert.js.org/docs/#buttons

swal({
    buttons: ["Stop", "Do it!"],
});

buttons: {
    cancel: {
        text: "Cancel",
        value: null,
        visible: false,
        className: "",
        closeModal: true,
    },
    confirm: {
        text: "OK",
        value: true,
        visible: true,
        className: "",
        closeModal: true
    }
}

// https://sweetalert.js.org/docs/#content

swal({
    content: "input",
});

swal({
    content: {
        element: "input",
        attributes: {
            placeholder: "Type your password",
            type: "password",
        },
    },
});

var slider = document.createElement("input");
slider.type = "range";

swal({
    content: slider,
});




swal("Hello world!", {
    className: "red-bg",
});



// https://sweetalert.js.org/docs/#closeonclickoutside

swal({
    closeOnClickOutside: false,
});

swal({
    closeOnEsc: false,
});

swal("Are you sure?", {
    dangerMode: true,
    buttons: true,
});

swal("This modal will disappear soon!", {
    buttons: false,
    timer: 3000,
});


// https://sweetalert.js.org/docs/#methods

swal.close()
swal.getState()
swal.setActionValue({ confirm: 'Text from input' })
swal.stopLoading()

// https://sweetalert.js.org/docs/#theming

.swal-overlay {
    background-color: rgba(43, 165, 137, 0.45);
}
.swal-modal {
    background-color: rgba(63,255,106,0.69);
    border: 3px solid white;
}
.swal-title {
    margin: 0px;
    font-size: 16px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.21);
    margin-bottom: 28px;
}
.swal-text {
    background-color: #FEFAE3;
    padding: 17px;
    border: 1px solid #F0E1A1;
    display: block;
    margin: 22px;
    text-align: center;
    color: #61534e;
}

.swal-footer {
    background-color: rgb(245, 248, 250);
    margin-top: 32px;
    border-top: 1px solid #E9EEF1;
    overflow: hidden;
}

.swal-button {
    padding: 7px 19px;
    border-radius: 2px;
    background-color: #4962B3;
    font-size: 12px;
    border: 1px solid #3e549a;
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.3);
}



```




```sh

$ npm i -D sweetalert


```


```css

.landing-top .install .command::before {
    content: "$";
    opacity: 0.5;
    transform: rotate(8deg);
    font-size: 20px;
    position: absolute;
    margin-left: -27px;
    margin-top: -2px;
}


```

