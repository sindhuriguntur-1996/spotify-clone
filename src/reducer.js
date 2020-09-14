export const initialState={
    user:null,
    playLists:[],
    playing:false,
    item:null,
   // token:"BQC7xy83scL3WLtkS-eOC7_RWxvQoXfDAHAq12uVJI2jc2ULP9R1rvlijMAbj9TWGwZR7aWa6c3Ljtnj00IQ5DtxqYaTpmmcf6AZvJxzapHGZhdZgfdbZ38h5VxCrYDVdHm_k3BRT3hRS3NYwBeiaGDQuC575T2hXlvRnq1WPtn5RA0Z",
}

const reducer=(state,action)=>{
console.log(action);

switch(action.type){
    case 'SET_USER':
        return {
            ...state,
            user:action.user,
           
        }
    case 'SET_TOKEN':
        return{
            ...state,
            token:action.token
        }

    case 'SET_PLAYLISTS':
        return{
            ...state,
            playLists:action.playLists,
        }
    case 'SET_DISCOVER_WEEKLY':
        return{
            ...state,
            discover_weekly:action.discover_weekly,
        }
        default:
            return state
}
}

export default reducer;