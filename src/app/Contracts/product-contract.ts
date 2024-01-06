import { RatingContract } from "./rating-contract";

export interface ProductContract {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: RatingContract;
}