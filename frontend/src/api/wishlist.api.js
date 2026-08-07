import httpClient from "./httpClient";

export const getWishlist = () => httpClient.get("/wishlist");
export const addToWishlist = (propertyId) => httpClient.post(`/wishlist/${propertyId}`);
export const removeFromWishlist = (propertyId) => httpClient.delete(`/wishlist/${propertyId}`);
