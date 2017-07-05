let html = require('choo/html'),
    choo = require('choo'),
    app = choo();

app.use(titleStore);
app.route('/', mainView);
app.mount('body');

const mainView = (state, emit) => {
    let update = (e) => {
        emit('update', e.target.value);
    };
    return html `
        <body>
            <h1>Title: ${state.title}</h1>
            <input type="text" value="${state.title}" oninput=${update}>
        </body>
    `;
};

const titleStore = (state, emitter) => {
    state.title = 'Not quite set yet';
    emitter.on('DOMContentLoaded', () => {
        emitter.on('update', (newTitle) => {
            state.title = newTitle;
            emitter.emit('render');
        });
    });
};

