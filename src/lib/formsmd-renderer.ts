import { Composer } from 'formsmd';
import type { FormDefinition } from '../types/form';

export const createComposerFromDefinition = (formDefinition: FormDefinition): Composer => {
  const composer = new Composer(formDefinition.settings);

  const formElementsMap: { [key: string]: (el: any) => void } = {
    h1: (el) => composer.h1(el.text),
    h2: (el) => composer.h2(el.text),
    h3: (el) => composer.h3(el.text),
    h4: (el) => composer.h4(el.text),
    h5: (el) => composer.h5(el.text),
    h6: (el) => composer.h6(el.text),
    p: (el) => composer.p(el.text),
    hr: () => composer.hr(),
    ul: (el) => composer.ul(el.items),
    ol: (el) => composer.ol(el.items),
    blockquote: (el) => composer.blockquote(el.text),
    code: (el) => composer.code(el.content, el.options || {}),
    text: (el) => composer.textInput(el.name, el),
    textarea: (el) => composer.textInput(el.name, { ...el, multiline: true }),
    email: (el) => composer.emailInput(el.name, el),
    url: (el) => composer.urlInput(el.name, el),
    tel: (el) => composer.telInput(el.name, el),
    password: (el) => composer.passwordInput(el.name, el),
    number: (el) => composer.numberInput(el.name, el),
    select: (el) => composer.selectBox(el.name, el),
    choice: (el) => composer.choiceInput(el.name, el),
    pictureChoice: (el) => composer.pictureChoice(el.name, el),
    rating: (el) => composer.ratingInput(el.name, el),
    opinionScale: (el) => composer.opinionScale(el.name, el),
    datetime: (el) => composer.datetimeInput(el.name, el),
    date: (el) => composer.dateInput(el.name, el),
    time: (el) => composer.timeInput(el.name, el),
    file: (el) => composer.fileInput(el.name, el),
  };

  const renderElements = (elements: any[]) => {
    if (elements && Array.isArray(elements)) {
      elements.forEach((element) => {
        const props = { ...element };
        delete props.id; 

        const renderFunction = formElementsMap[props.type as keyof typeof formElementsMap];
        if (renderFunction) {
          renderFunction(props);
        } else {
          console.warn(`Live Preview: Unknown element type in JSON: "${props.type}"`);
        }
      });
    }
  };

  // Handle startSlide
  if (formDefinition.startSlide) {
    composer.startSlide(formDefinition.startSlide.slideOptions || {});
    renderElements(formDefinition.startSlide.elements);
  }
  
  // Handle regular slides
  formDefinition.slides.forEach((slide) => {
    composer.slide(slide.slideOptions || {});
    renderElements(slide.elements);
  });

  // Handle endSlide
  if (formDefinition.endSlide) {
    composer.endSlide(formDefinition.endSlide.slideOptions || {});
    renderElements(formDefinition.endSlide.elements);
  }
  
  return composer;
};