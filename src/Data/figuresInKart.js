export default function (state = null, action){
    switch(action.type){
        case "FIGURE_ADDED":
            return action.payload;
            break;
    }
    return state;
}