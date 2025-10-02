export interface FormElement {
    id: string;
    type: string;
    [key: string]: any;
}
interface StringKeyObject {
    [key: string]: any;
}
export interface FormSlide {
    slideOptions?: StringKeyObject;
    elements: FormElement[];
}
export interface FormDefinition {
    settings: StringKeyObject;
    options: StringKeyObject;
    startSlide?: FormSlide;
    slides: FormSlide[];
    endSlide?: FormSlide;
}
export {};
//# sourceMappingURL=form.d.ts.map