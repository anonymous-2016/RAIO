let modal = document.querySelector("#modal"),
    modalOverlay = document.querySelector("#modal-overlay"),
    // btns
    closeButton = document.querySelector("#close-button"),
    openButton = document.querySelector("#open-button");

closeButton.addEventListener("click", function() {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
});

openButton.addEventListener("click", function() {
    // fetch data & insert data to DOM
    let p_text = document.querySelector(`[data-text="p"]`);
    const data = `Getting Started The difference between building a plugin and a project component lies in flexibility. <br/> The first thing we are going to is take a step back and think about the requirements. <br/>Our modal plugin should: Launch different modals based upon option sets Allow users to define custom transitions Be responsive Have max/min width points Anchor to the top of the page if too tall Be centered otherwise Accept a HTML string for content OR a domNode Have no dependencies See that last line? Thats right folks, we're doing this in plain old Javascript. <br/>The Javascript Architecture Alright, lets get our hands dirty. <br/>Our first order of business is going to be deciding on our plugin architecture and picking a design pattern. <br/>Let's create an IIFE to create a closure we can work within. <br/>Closures can be leveraged to create a private scope, where you have control over what data you make available.<br/>`;
    // data-links
    p_text.innerHTML = data;
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
});
