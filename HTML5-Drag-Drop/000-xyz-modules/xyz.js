// IIFE

(() => {
    fetch(
        'https://cdn.xgqfrms.xyz/json/xgqfrms.json', 
        {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: `no-cors`
        }
    ).then(
        (response) => {
            console.log('parsed response: ', response);
            return response.json();
        }
    ).then(
        (json) => {
            console.log('parsed json: ', json);
            populateWithCourses(data.courses.completed);
            populateWithCourses(data.courses.in_progress);
            hide();
        }
    ).catch(
        (error) => {
            console.log('parsing failed: ', error);
            setTimeout(
                () => {
                    alert(`faild to load data!`);
                    this.window.location = `https://learning.xgqfrms.xyz/`;
                },
                3000
            );
        }
    );
    const populateWithCourses = (courses) => {
        const $badges=$('#badges');
        console.log(`courses `,courses);
        courses.forEach(
            (course) => {
                $div=$('<div />',{'class':'course'}).appendTo($badges);
                $('<h3 />',{text:course.title}).appendTo($div);
                $('<img />',{src:course.badge}).appendTo($div);
                $('<a />',{'class':'btn btn-primary',target:'_blank',href:course.url,text:'See Course'}).appendTo($div);
            }
        );
    };
    const hide = () => {
        const hideLoad=document.getElementById('hideLoad');
        let state="showTure";
        if(state==="showTure"){
            hideLoad.classList.remove('showTure');
            hideLoad.classList.add("hidenTure");
            console.log(`state = "showTure" `);
            hideLoad.style.display="none";
        }else{
            console.log(`state = "hidenTure"`);
        }
    }
})();


// https://learning.xgqfrms.xyz/JavaScript/Ajax/js/main.js

// https://learning.xgqfrms.xyz/JavaScript/Ajax/Ajax-Portfolio.html

// G:\wwwRoot\learning\JavaScript\Ajax\js
