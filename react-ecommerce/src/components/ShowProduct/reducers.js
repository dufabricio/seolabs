import {LOAD_PRODUCT_COMPLETE} from './actions'

const showProductReducer = (state = { data: {}, status: {} }, action) => {
    switch (action.type) {
      case LOAD_PRODUCT:
        return {
          data: {},
          product: null,
          status: {
            loading: true,
            failure: false
          }
        };
      case LOAD_PRODUCT_COMPLETE:
        return {
          ...state,
          product: action.product,
          loading: false,
        };
      default:
        return state;
    }
  };

export default showProductReducer;