import { RatingContract } from "../Contracts/rating-contract";

export abstract class RatingTemplate implements RatingContract {
    rate: number = 0;
    count: number = 0;
}
