import { ScrollView, View } from "react-native";
import PromoItem from "./PromoItem";

const PromoView = () => {
    const promos = [
        {id : 1, promo : 'Discount Food'},
        {id : 2, promo : 'Buy 1 get 1'},
        {id : 3, promo : 'Buy 1 get 2'},
        {id : 4, promo : 'Cashback 50%'},
        {id : 5, promo : 'Get 100rb, mac order'},
        {id : 6, promo : 'Discount Special Food'},
        {id : 7, promo : 'Discount 9.9'},
        {id : 8, promo : 'Discount Drink'},
        {id : 9, promo : 'Free Ongkir'},
        {id : 10, promo : 'Discount 30%'},
        {id : 11, promo : 'Cashback 20%'},
    ]
    const renderPromoItem = () => {
        const promoItems = [];
        for (let i = 0; i < Math.ceil(promos.length / 2); i++) {
            let promo1Index = i * 2;
            let promo2Index = (i * 2) + 1;
            if (promo2Index === promos.length){
                promo2Index = null
            }
            const p = <View key={i}>
                <PromoItem promo={promos[promo1Index]} />
                {promo2Index && <PromoItem promo={promos[promo2Index]} />}
            </View>
            promoItems.push(p)
        }
        return promoItems
    }

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {renderPromoItem()}
        </ScrollView>
    )
}

export default PromoView;