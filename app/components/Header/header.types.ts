import { ComponentType } from "react";

export interface Link {
  link: string;
  name: string;
  before?: ComponentType;
  after?: ComponentType;
}
