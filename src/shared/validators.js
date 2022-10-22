export const skuValidator = sku => {
    if (!sku) {
      return "Please submit required SKU data";
    } else if (!(/^\S+$/.test(sku))) {
      return "Please submit an unique SKU without spaces";
    }
    return "";
  };