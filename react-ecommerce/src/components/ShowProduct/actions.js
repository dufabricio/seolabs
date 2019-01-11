export const LOAD_PRODUCT = 'LOAD_PRODUCT';
export const LOAD_PRODUCT_COMPLETE = 'LOAD_PRODUCT_COMPLETE';

export function loadProductAction(productId) {
  return { type: LOAD_PRODUCT, productId };
}