export const skuValidator = sku => {
    if (!sku) {
      return "Please submit required SKU data";
    } else if (!(/^\S+$/.test(sku))) {
      return "Please submit an unique SKU without spaces";
    }
    return "";
};

export const nameValidator = name => {
    if (!name) {
      return "Please submit required Name data";
    } 
    return "";
};


export const priceValidator = price => {
    if (!price) {
      return "Please submit required Price data";
    }else if (!(/^\d+(\.\d{2})?$/.test(price))) {
        return "Please submit price in n.xx format";
      }
    return "";
};


export const typeValidator = type => {
    if (!type) {
      return "Please select product type";
    }
    return "";
};


export const sizeValidator = size => {
    if (!size) {
      return "Please, provide size (in MB)";
    }else if (!(/^\d+$/.test(size)))  {
        return "Please submit size in n format";
      }
    return "";
};


export const weightValidator = weight => {
    if (!weight) {
      return "Please, provide weight (in KG)";
    }else if (!(/^[1-9]\d*$|^[0-9]+\.[0-9]+$/.test(weight)))  {
        return "Please submit weight in n format";
      }
    return "";
};


export const heightValidator = height => {
    if (!height) {
      return "Please  provide height";
    }else if (!(/^[1-9]\d*$|^[0-9]+\.[0-9]+$/.test(height)))  {
        return "Please submit height in n format";
      }
    return "";
};

export const widthValidator = width => {
    if (!width) {
      return "Please  provide width";
    }else if (!(/^[1-9]\d*$|^[0-9]+\.[0-9]+$/.test(width)))  {
        return "Please submit width in n format";
      }
    return "";
};


export const lengthValidator = length => {
    if (!length) {
      return "Please  provide Length";
    }else if (!(/^[1-9]\d*$|^[0-9]+\.[0-9]+$/.test(length)))  {
        return "Please submit Length in n format";
      }
    return "";
};