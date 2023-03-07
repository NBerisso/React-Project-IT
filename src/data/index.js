import { ApiDataSource, MockDataSource } from './sources';

// Builders
const productsDataSourceBuilder = (dataSource) => () => ({
    all: dataSource.getAllProducts
})

const checkoutDataSourceBuilder = (dataSource) => () => ({  
    post: dataSource.postCheckout
})


// Build Data Sources

const dataSource = MockDataSource();

const productsDataSource = productsDataSourceBuilder(dataSource);
const checkoutDataSource = checkoutDataSourceBuilder(dataSource);


// Export

const DataSources = {
    products: productsDataSource,
    checkout: checkoutDataSource
}

export default DataSources;