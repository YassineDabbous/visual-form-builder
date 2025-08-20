import type { ExamValidationError } from "../store/formStore";
import type { FormDefinition } from "../types/form";

const ALLOWED_INPUT_TYPES = ['text', 'number', 'select', 'choice', 'date', 'time'];
const ALL_INPUT_TYPES = [
    'text', 'textarea', 'email', 'password', 'number', 'url', 'tel', 
    'date', 'time', 'datetime', 'select', 'choice', 'pictureChoice', 
    'rating', 'opinionScale', 'file'
];

export const validateExamForm = (formDefinition: FormDefinition): ExamValidationError[] => {
  const errors: ExamValidationError[] = [];

  // If auto-correction is not enabled, there are no errors.
  if (!formDefinition.settings.isAutoSolvable) {
    return [];
  }

  const allElements = [
    ...(formDefinition.startSlide?.elements ?? []),
    ...formDefinition.slides.flatMap(slide => slide.elements),
    ...(formDefinition.endSlide?.elements ?? []),
  ];

  for (const element of allElements) {
    // We only care about validating input types
    if (!ALL_INPUT_TYPES.includes(element.type)) {
      continue;
    }

    // Rule 1: Check if the input type is allowed
    if (!ALLOWED_INPUT_TYPES.includes(element.type)) {
      errors.push({
        elementId: element.id,
        message: `Invalid Type: The '${element.type}' input is not supported in auto-correction mode.`
      });
      // If the type is invalid, no need to check for answer/score
      continue;
    }

    // Rule 2: Check for a score
    if (element.score === undefined || element.score === null || String(element.score).trim() === '') {
       errors.push({
        elementId: element.id,
        message: 'Score is required for auto-correction.'
      });
    }
    
    // Rule 3: Check for an answer
    if (element.answer === undefined || (Array.isArray(element.answer) && element.answer.length === 0)) {
       errors.push({
        elementId: element.id,
        message: 'A correct answer is required for auto-correction.'
      });
    }
  }

  return errors;
};