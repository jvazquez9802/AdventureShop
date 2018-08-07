export const addToKart = (figure) => {
    console.log(figure);
    return {
        type: "FIGURE_ADDED",
        payload: figure
    }
};