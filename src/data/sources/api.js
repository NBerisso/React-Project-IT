export const ApiDataSource = () => ({
    endpoint: '',

    async getAllProducts() {
        const res = await fetch(`${this.endpoint}/products`);
        const data = await res.json();
        return data;
    },

    async postCheckout(checkoutData) {

    }
});