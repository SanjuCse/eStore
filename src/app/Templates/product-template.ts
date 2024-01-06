import { ProductConcrete } from "../Concrete/product-concrete";
import { RatingConcrete } from "../Concrete/rating-concrete";
import { RatingContract } from "../Contracts/rating-contract";
import { RatingTemplate } from "./rating-template";

export abstract class ProductTemplate implements ProductConcrete {
    id: number = 0;
    title: string = "";
    price: number = 0;
    description: string = "";
    category: string = "";
    image: string = "";
    rating: RatingTemplate = new RatingConcrete();
}