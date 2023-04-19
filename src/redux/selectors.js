export const getContacts = state => state.contact.contacts.items;
export const getIsLoading = state => state.contact.contacts.isLoading;
export const getError = state => state.contact.contacts.error;
export const getStatusFilter = state => state.contact.filters;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
