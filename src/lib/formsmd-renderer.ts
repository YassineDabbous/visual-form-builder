import { Composer } from 'formsmd';
import type { FormDefinition } from '../types/form';

export const createComposerFromDefinition = (formDefinition: FormDefinition): Composer => {
  const composer = new Composer({
    id: formDefinition.id,
    postUrl: formDefinition.postUrl,
  });

  const formElementsMap = {
    h1: (el: any) => composer.h1(el.text),
    h2: (el: any) => composer.h2(el.text),
    h3: (el: any) => composer.h3(el.text),
    h4: (el: any) => composer.h4(el.text),
    h5: (el: any) => composer.h5(el.text),
    h6: (el: any) => composer.h6(el.text),
    p: (el: any) => composer.p(el.text),
    hr: () => composer.hr(),
    ul: (el: any) => composer.ul(el.items),
    ol: (el: any) => composer.ol(el.items),
    blockquote: (el: any) => composer.blockquote(el.text),
    code: (el: any) => composer.code(el.content, el.options || {}),
    text: (el: any) => composer.textInput(el.name, el),
    textarea: (el: any) => composer.textInput(el.name, { ...el, multiline: true }),
    email: (el: any) => composer.emailInput(el.name, el),
    url: (el: any) => composer.urlInput(el.name, el),
    tel: (el: any) => composer.telInput(el.name, el),
    password: (el: any) => composer.passwordInput(el.name, el),
    number: (el: any) => composer.numberInput(el.name, el),
    select: (el: any) => composer.selectBox(el.name, el),
    choice: (el: any) => composer.choiceInput(el.name, el),
    pictureChoice: (el: any) => composer.pictureChoice(el.name, el),
    rating: (el: any) => composer.ratingInput(el.name, el),
    opinionScale: (el: any) => composer.opinionScale(el.name, el),
    datetime: (el: any) => composer.datetimeInput(el.name, el),
    date: (el: any) => composer.dateInput(el.name, el),
    time: (el: any) => composer.timeInput(el.name, el),
    file: (el: any) => composer.fileInput(el.name, el),
  };

  const allSlides = [
    ...(formDefinition.startSlide ? [formDefinition.startSlide] : []),
    ...formDefinition.slides,
    ...(formDefinition.endSlide ? [formDefinition.endSlide] : []),
  ];

  allSlides.forEach((slide, index) => {
    if (slide.elements && Array.isArray(slide.elements)) {
      slide.elements.forEach((element) => {
        const renderFunction = formElementsMap[element.type as keyof typeof formElementsMap];
        if (renderFunction) {
          renderFunction(element);
        } else {
          console.warn(`Live Preview: Unknown element type in JSON: "${element.type}"`);
        }
      });
    }
    if (index < allSlides.length - 1) {
      composer.slide(slide.slideOptions || {});
    }
  });
  
  return composer;
};