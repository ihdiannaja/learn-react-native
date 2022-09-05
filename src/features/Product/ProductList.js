import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import AppBackground from "../../shared/components/AppBackground";
import HeaderPageLabel from "../../shared/components/HeaderPageLabel";
import { MainContainer } from "../../shared/components/MainContainer";
import { useTheme } from "../../shared/context/ThemeContext"
import { useDepedency } from "../../shared/hook/UseDepedency";
import Item from "./components/ProductItem";

const ProductList = () => {
    const theme = useTheme();
    const {productService} = useDepedency();
    const [products , setProducts] = useState([]);
    const [isFetching, setFetchiing] = useState(false);
    const [page, setPage] = useState(1);
    const [next, setNext] = useState(false);
    
    let preOpenedRow;
    const row = []

    useEffect(() => {
        onGetAllProduct();
    }, [page])

    const onGetAllProduct = async () => {
        try {
            const response = await productService.getAllProduct(page);
            if (page === 1) {
                setProducts([...response])
            } else {
                setProducts(prevState => 
                    [...prevState, ...response]
                )
            }
            setFetchiing(false);
            setNext(true);
        } catch (error) {
            console.log(error);
            setFetchiing(false);
            setNext(false);
        }
    }

    const onFetchMore = async () => {
        if (next){
            setPage(prevState => prevState + 1)
        } else {
            onGetAllProduct();
        }
    }

    const onRefresh = () => {
        setPage(1)
    }

    const onDeleteItem = (index) => {
        console.log('Delete Item', products[index]);
    }

    const renderItem = ({item, index}) => {
        return <Item productName={item.productName} idx={index} onDelete={() => onDeleteItem(index)} refRow={refRows} closeRow={() => closeRow(index)} />
    }

    const refRows = (index, ref) => {
        row[index] = ref
    }

    const closeRow = (index) => {
        if (preOpenedRow && preOpenedRow !== row[index]){
            preOpenedRow.close();
        }
        preOpenedRow = row[index]
    }

    return (
        <MainContainer>
            <AppBackground>
                <HeaderPageLabel text='Products'/>
                <View style={{margin : theme.spacing.s, backgroundColor: theme.color.light, borderRadius : theme.radius.m,  height : 500, borderColor : theme.color.primary, borderWidth : 1}}>
                    <FlatList 
                        data={products} 
                        renderItem={renderItem} 
                        keyExtractor={item => item.id} 
                        onRefresh={onRefresh}
                        refreshing={isFetching}
                        onEndReached={onFetchMore}
                    />
                </View>
            </AppBackground>
        </MainContainer>
    )
}

export default ProductList;