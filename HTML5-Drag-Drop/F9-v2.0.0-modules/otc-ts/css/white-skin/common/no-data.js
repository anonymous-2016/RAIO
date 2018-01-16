let tb = document.querySelector(`.fv-equity-pledge-title-box`);

// tb.parentElement.lastElementChild
// tb.nextElementSibling

tb.parentElement.lastElementChild.remove();

let noDataHTML = `
    <p data-none="no-data-p">
        <span data-none="no-data-span"></span>
    </p>
`;

tb.insertAdjacentHTML(`afterend`, noDataHTML);



/*



// https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove

node.remove();

// https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild

var oldChild = node.removeChild(child);
// OR
node.removeChild(child);



*/
