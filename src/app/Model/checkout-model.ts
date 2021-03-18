import { CheckoutModelItem } from "./checkout-model-item";

export class CheckoutModel {
    name: string;
        email: string;
        phone: string;
        streetaddress: string;
        province_id?: any;
        district_id?: any;
        municipality_id?: any;
        shipping_area_id?: any;
        shipping_charge?: any;
        order_message: string;
        items: CheckoutModelItem[];
}
