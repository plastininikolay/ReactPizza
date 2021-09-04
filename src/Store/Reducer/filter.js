const initialState = {category: 'Все', sort: 'популярности'}
const filter = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_CATEGORY':
            return {
                ...state,
                category: action.payload
            }
        case 'CHANGE_SORT':
            return {
                ...state,
                sort: action.payload
            }
        default:
            return state
    }
}
export default filter;
