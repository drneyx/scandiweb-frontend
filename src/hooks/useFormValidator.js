import { useState } from "react";
import { 
    skuValidator,
    nameValidator,
    priceValidator,
    productTypeValidator,
    sizeValidator,
    weightValidator,
    widthValidator,
    lengthValidator,
    heightValidator
} from "../shared/validators";


const touchErrors = errors => {
    return Object.entries(errors).reduce((acc, [field, fieldError]) => {
      acc[field] = {
        ...fieldError,
        dirty: true,
      };
      return acc;
    }, {});
  };


export const useFormValidator = form => {
    const [errors, setErrors] = useState({
      sku: {
        dirty: false,
        error: false,
        message: "",
      },
      name: {
        dirty: false,
        error: false,
        message: "",
      },
      price: {
        dirty: false,
        error: false,
        message: "",
      },
      productType: {
        dirty: false,
        error: false,
        message: "",
      },
      size: {
        dirty: false,
        error: false,
        message: "",
      },
      weight: {
        dirty: false,
        error: false,
        message: "",
      },
     height: {
        dirty: false,
        error: false,
        message: "",
      },
      length: {
        dirty: false,
        error: false,
        message: "",
      },

      width: {
        dirty: false,
        error: false,
        message: "",
      },
 });

 const validateForm = ({ form, field, errors, forceTouchErrors = false }) => {
    let isValid = true;

    // Create a deep copy of the errors
    let nextErrors = JSON.parse(JSON.stringify(errors));


    // Force validate all the fields
    if (forceTouchErrors) {
        nextErrors = touchErrors(errors);
      }
    
    const { sku, name, price, productType, size, weight, height, length, width } = form;

    if (nextErrors.sku.dirty && (field ? field === "sku" : true)) {
        const skuMessage = skuValidator(sku, form);
        nextErrors.sku.error = !!skuMessage;
        nextErrors.sku.message = skuMessage;
        if (!!skuMessage) isValid = false;
    }


    if (nextErrors.name.dirty && (field ? field === "name" : true)) {
        const nameMessage = nameValidator(name, form);
        nextErrors.name.error = !!nameMessage;
        nextErrors.name.message = nameMessage;
        if (!!nameMessage) isValid = false;
    }


    if (nextErrors.price.dirty && (field ? field === "price" : true)) {
        const priceMessage = priceValidator(price, form);
        nextErrors.price.error = !!priceMessage;
        nextErrors.price.message = priceMessage;
        if (!!priceMessage) isValid = false;
    }

    if (nextErrors.productType.dirty && (field ? field === "type" : true)) {
        const typeMessage = productTypeValidator(productType, form);
        nextErrors.productType.error = !!typeMessage;
        nextErrors.productType.message = typeMessage;
        if (!!typeMessage) isValid = false;
    }

    if (nextErrors.size.dirty && (field ? field === "size" : true)) {
        const sizeMessage = sizeValidator(size, form);
        nextErrors.size.error = !!sizeMessage;
        nextErrors.size.message = sizeMessage;
        if (!!sizeMessage) isValid = false;
    }

    if (nextErrors.weight.dirty && (field ? field === "weight" : true)) {
        const weightMessage = weightValidator(weight, form);
        nextErrors.weight.error = !!weightMessage;
        nextErrors.weight.message = weightMessage;
        if (!!weightMessage) isValid = false;
    }


    if (nextErrors.height.dirty && (field ? field === "height" : true)) {
        const heightMessage = heightValidator(height, form);
        nextErrors.height.error = !!heightMessage;
        nextErrors.height.message = heightMessage;
        if (!!heightMessage) isValid = false;
    }


    if (nextErrors.length.dirty && (field ? field === "length" : true)) {
        const lengthMessage = lengthValidator(length, form);
        nextErrors.length.error = !!lengthMessage;
        nextErrors.length.message = lengthMessage;
        if (!!lengthMessage) isValid = false;
    }

    if (nextErrors.width.dirty && (field ? field === "width" : true)) {
        const widthMessage = widthValidator(width, form);
        nextErrors.width.error = !!widthMessage;
        nextErrors.width.message = widthMessage;
        if (!!widthMessage) isValid = false;
    }

    setErrors(nextErrors);

    return {
        isValid,
        errors: nextErrors,
      };
 }


 const onBlurField = e => {
    const field = e.target.name;
    const fieldError = errors[field];
    if (fieldError.dirty) return;

    const updatedErrors = {
      ...errors,
      [field]: {
        ...errors[field],
        dirty: true,
      },
    };

    validateForm({ form, field, errors: updatedErrors });
  };

  return {
    validateForm,
    onBlurField,
    errors,
  };

}