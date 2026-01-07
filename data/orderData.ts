import { ServiceRecord } from "@/utils/types";

export const services: ServiceRecord = {
  glovo: {
    name: "Glovo",
    color: "bg-error",
    text: "text-background",
    border: "border-error/40",
    btn: "bg-error",
  },
  uber: {
    name: "Uber Eats",
    color: "bg-text/80",
    text: "text-white",
    border: "border-text/40",
    btn: "bg-black",
  },
  bolt: {
    name: "Bolt Food",
    color: "bg-success",
    text: "text-white",
    border: "border-success/40",
    btn: "bg-success",
  },
};

export const restaurant = {
  name: "The Eats Diner",
  rating: "4.8",
  reviews: "1.2k+",
  phone: "+254 712 909 475",
  category: "Pizza • Desserts • Beverages",
};
