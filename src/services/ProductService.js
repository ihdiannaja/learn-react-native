import { DATA } from "../data/product"
import Item from "../features/Product/components/ProductItem"
import { SERVICE } from "../shared/constants"
import { sleep } from "../shared/sleep"

export const productService = ({doGet}) => {
    const getAllProduct = async (page, itemPerPage) => {
        try {
            const response = await doGet({url: SERVICE.PRODUCT, params: {pageNo: page, itemPerPage: itemPerPage}})
            const products = response.products
            if (products.length === 0) {
                throw new Error('No more data')
            } else{
                return products
            }
        } catch (e) {
            throw e
        }
    }

    return {
        getAllProduct
    }
}