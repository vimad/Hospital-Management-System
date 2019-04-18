export interface DrugBrandName {
    drugBrandNameId: number;
    brandname: string;
}

export interface DrugSideEffect {
    drugSideEffectId: number;
    sideEffect: string;
}

export interface DrugInfo {
    drugId: number;
    drugName: string;
    drugBrandNames: DrugBrandName[];
    drugSideEffects: DrugSideEffect[];
    drugManufacturer: string;
    drugDescription: string;
    drugExpireDate: Date;
    drugQuantity: number;
}