export interface Product {
  id: number;
  productName: string;
  imageURL: string;
  subCategory: string[];
  category: string;
  mass: number;
  foodEnergy: number;
  calories: number;
  allergens: string[];
  allergensInTraces: string[];
  nutritionalValues: {
    fat?: number;
    sugar?: number;
    salt?: number;
    protein?: number;
  }[];
}

export interface ProductAPIResponse {
  breads: Product[];
}
