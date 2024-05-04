import { Rating } from "@features/context";
import RatingControl from "./ratingControl";
import { useState } from "react";
import { IRating } from "@entities/Review/types";


export default function MockProvider() {
    const [rate, setRate] = useState<IRating>()

    return (
        <Rating.Context.Provider value={{value: rate, handleChange: e => {
            setRate(+e.target.value as IRating)
        }}}>
            <RatingControl/>
        </Rating.Context.Provider>
    )
}