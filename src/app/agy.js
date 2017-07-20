document.onload = () => {
    let yid = document.querySelector('#autoGetYear');
    const year =  new Date().getFullYear();
    return yid.innerText = `Copyright © ${year} ShangHai Gildata Inc. All Rights Reserved`;
};


