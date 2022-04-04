import {createStore, combineReducers } from 'redux';
import {v4 as uuid} from 'uuid';
//
//ADDEXPENSE Action Generator
//
// const addExpense=({description="",note="",amount=0,createdAt=0}={})
//   ( {type:'ADDEXPENSE',
// expense:{
//     id:uuid(),
//     description,//Shorthand property
//     note,//Shorthand property
//     amount,//Shorthand property
//     createdAt//Shorthand property
//  }});
const addExpense=({description="",note="",amount=100,createdAt=0}={}) =>
({
    type:'ADDEXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const demostate={
   expense: [{
       id:"kjdfksk",
       description:"January Rent",
       note:"This was last Rent for that site",
       Amount:5000,
       CreateAt:"0"
    }],
    filters:{
        text:"rent",
        sortby:"amount",
        startdate:undefined,
        Enddate:undefined
    }
};

// Expensify  Reducer
const expensifyDefault=[];
const expensifyReducer=(state =[],action) =>{
switch(action.type)
{   case 'ADDEXPENSE':
    return state.concat(action.expense);
    default:return state;}
} 
// Filter Reducer
const defaultFilterReducer={
    text:"",
    sortby:"Date",
    startdate:undefined,
    enddate:undefined
};
const filterReducer=(state=defaultFilterReducer,action)=>{
    switch(action.type)
    {
        default:
            return state;
    }
}

//Store Creation
const store=createStore(
    combineReducers({
        expense:expensifyReducer,
        filters:filterReducer
    })
    );

    store.subscribe(()=>{console.log(store.getState())});

    store.dispatch(addExpense({description:"RENT",amount:1000}));
    