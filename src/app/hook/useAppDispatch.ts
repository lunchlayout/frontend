import { AppDispatch } from "@app/types";
import { useDispatch } from "react-redux";

const useAppDispatch = () => useDispatch<AppDispatch>();

export { useAppDispatch };
