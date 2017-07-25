// actions


// 使用 Action Creators 生成 action
// Action Creators 是一个 pure function，它最后会返回一个 action 对象

const FrontEndWebFrameworks = (type, text) => {
    return {
        type: `${type}`,
        payload : {
            text: `${text}`
        }
    };
};

const FEWF = FrontEndWebFrameworks;

console.log(`FEWF`, typeof FEWF);
// function

// const FEWF_R = FEWF('VOTE_REACT', 'REACT new');
// object
const FEWF_R1 = () => {
    return FEWF('ACTION_TYPE_1', 'REACT ACTION_TYPE_1');
};
console.log(`FEWF_R1`, typeof FEWF_R1);
// function

const FEWF_R2 = () => {
    return FEWF('ACTION_TYPE_2', 'REACT ACTION_TYPE_2');
};
console.log(`FEWF_R2`, typeof FEWF_R2);

// 要触发一个 action 只要调用
// dispatch: dispatch(FEWF(`type`, `text`));

export {FEWF, FEWF_R1, FEWF_R2};

export default FEWF;


/* 

app.js 触发一个 action 只要调用 store.dispatch(FEWF_R1())); / store.dispatch(FEWF_R2()));

// app component

class App extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
        this.state = {
            store = this.props.store
        };
    }
   handleVoteReact = () => {
        // this.store.dispatch(voteReact());
        this.store.dispatch(FEWF_R());
    };
    handleVoteAngular = () => {
        // this.store.dispatch(voteAngular());
        this.store.dispatch(FEWF_A());
    };
    handleVoteVuejs = () => {
        // this.store.dispatch(voteVuejs());
        this.store.dispatch(FEWF_V());
    };
}


// container component


    constructor(props){
        super(props);
         // 接受从父组件 props 传递过来的 store
        this.store = this.props.store;
         // 通过 props 获取 store， 使用 state 处理
        this.state = {
            store: this.props.store
        }
    }
    votesAngularInPercent = () => {
        const ng2 = this.state.store.getState().angular;
        const r15 = this.state.store.getState().react;
        const vue2 = this.state.store.getState().vue;
        if (ng2) {
            return (
                ng2 / (ng2 + r15 + vue2) * 100
            );
        } else {
            return 0;
        }
    }


*/
