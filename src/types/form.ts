export interface FormElement {
  id: string;
  type: string;
  [key: string]: any; 
}

export interface FormSlide {
  slideOptions?: {
    pageProgress?: string;
    [key: string]: any;
  };
  elements: FormElement[];
}

export interface FormDefinition {
  id: string;
  postUrl: string;
  startSlide?: FormSlide;
  slides: FormSlide[];
  endSlide?: FormSlide;
}