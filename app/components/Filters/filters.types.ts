import { SORT } from "@/components/Filters/filters.constants";

type SortType = keyof typeof SORT | "default" | undefined;

export { type SortType };
