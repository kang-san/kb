import { infoActions } from "../reducers/InfoReducer";

export const getAllGAInfo = (searchQuery) => (dispatch, getState) => {
    // axios call


    const data = {};
    dispatch(infoActions.getAllGAInfo({data}))
}