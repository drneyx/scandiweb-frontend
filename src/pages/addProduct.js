import React, {useState} from 'react';
import AddProductHeader from '../components/AddHeaderComponent';

/*-- Add Product Section -- */
function ProductAdd(){

    const [formData, setFormData] = useState({ 
        sku: '', 
        name: '',
        price: '', 
        productType: '',
        size: '',
        height: '',
        width: '',
        length: '',
        weight: '',

        skuErr: false,
        nameErr: false,
        priceErr: false,
        selectedErr: false,
        sizeErr: false,
        heightErr: false,
        widthErr: false,
        lengthErr: false,
        weightErr: false,
      });
    
      
    const setData = name => {
        return ({ target: { value } }) => {
          setFormData(oldData => (
            {...oldData, 
                [name]: value 
            }
            ));
        }
    };

    function validateSku(){
         if (formData.sku.length === 0) {
            setFormData(oldData => (
                {...oldData, 
                    skuErr: "Please submit required SKU data"
                }
            ));
            } else if (!(/^\S+$/.test(formData.sku))) {
            setFormData(oldData => (
                    {...oldData, 
                        skuErr: "Please submit an unique SKU without spaces"
                    }
                ));
            } else {
            setFormData(oldData => (
                    {...oldData, 
                        skuErr: false
                    }
             ));
            }
     }

     function validateName(){
        if (formData.name.length === 0) {
           setFormData(oldData => (
               {...oldData, 
                   nameErr: "Please submit required Name data"
               }
           ));
           } else {
           setFormData(oldData => (
                   {...oldData, 
                       nameErr: false
                   }
            ));
           }
    }


    function validatePrice(){
        if (formData.price.length === 0) {
           setFormData(oldData => (
               {...oldData, 
                   priceErr: "Please submit required Price data"
               }
           ));
           }else if (!(/^\d+(\.\d{2})?$/.test(formData.price))) {
            setFormData(oldData => (
                {...oldData, 
                    priceErr:"Please submit price in n.xx format"
                }
            ));
          } else {
           setFormData(oldData => (
                   {...oldData, 
                       priceErr: false
                   }
            ));
           }
    }


    function validateProductType(){
        if (formData.productType.length === 0) {
           setFormData(oldData => (
               {...oldData, 
                   selectedErr: "Please select product type"
               }
           ));
          } else {
           setFormData(oldData => (
                   {...oldData, 
                       selectedErr: false
                   }
            ));
           }
    }

    function validateSize(){
        if (formData.size.length === 0) {
           setFormData(oldData => (
               {...oldData, 
                   sizeErr: "Please provide data of indicated type"
               }
           ));
          } else if (!(/^\d+$/.test(formData.size))) {
            setFormData(oldData => (
                {...oldData, 
                    sizeErr: "Please submit Size data in n format"
                }
            ));
          } else {
           setFormData(oldData => (
                   {...oldData, 
                       sizeErr: false
                   }
            ));
         }
    }

    function validateHeight(){
        if (formData.height.length === 0) {
           setFormData(oldData => (
               {...oldData, 
                   heightErr: "Please provide data of indicated type"
               }
           ));
          } else if (!(/^[1-9]\d*$|^[0-9]+\.[0-9]+$/.test(formData.height))) {
            setFormData(oldData => (
                {...oldData, 
                    heightErr: "Please submit Height data in n or n.n format"
                }
            ));
          } else {
           setFormData(oldData => (
                   {...oldData, 
                    heightErr: false
                   }
            ));
         }
    }


    function validateLength(){
        if (formData.length.length === 0) {
           setFormData(oldData => (
               {...oldData, 
                lengthErr: "Please provide data of indicated type"
               }
           ));
          } else if (!(/^[1-9]\d*$|^[0-9]+\.[0-9]+$/.test(formData.length))) {
            setFormData(oldData => (
                {...oldData, 
                    lengthErr: "Please submit length data in n or n.n format"
                }
            ));
          } else {
           setFormData(oldData => (
                   {...oldData, 
                    lengthErr: false
                   }
            ));
         }
    }


    function validateWidth(){
        if (formData.width.length === 0) {
           setFormData(oldData => (
               {...oldData, 
                widthErr: "Please provide data of indicated type"
               }
           ));
          } else if (!(/^[1-9]\d*$|^[0-9]+\.[0-9]+$/.test(formData.length))) {
            setFormData(oldData => (
                {...oldData, 
                    widthErr: "Please submit width data in n or n.n format"
                }
            ));
          } else {
           setFormData(oldData => (
                   {...oldData, 
                    widthErr: false
                   }
            ));
         }
    }


    function validateWeight(){
        if (formData.weight.length === 0) {
           setFormData(oldData => (
               {...oldData, 
                   weightErr: "Please provide data of indicated type"
               }
           ));
          } else if (!(/^[1-9]\d*$|^[0-9]+\.[0-9]+$/.test(formData.weight))) {
            setFormData(oldData => (
                {...oldData, 
                    weightErr: "Please submit Weight data in n or n.n format"
                }
            ));
          } else {
           setFormData(oldData => (
                   {...oldData, 
                    weightErr: false
                   }
            ));
         }
    }

    function formValidation(){
        validateSku();
        validatePrice();
        validateName();
        validateProductType();
        if (formData.skuErr !== false || formData.nameErr !== false || formData.priceErr !== false || formData.selectedErr !== false){
            return false;
        }

        else if (formData.productType === "DVD"){
            validateSize();
            if (formData.sizeErr !== false){
                return false;
            }
        }

        else if (formData.productType === "Book"){
            validateWeight();
            if (formData.weightErr !== false){
                return false;
            }
        }

        else if (formData.productType === "Furniture"){
            validateWidth();
            validateHeight();
            validateLength();
            if (formData.lengthErr !== false || formData.weightErr !== false|| formData.heightErr !== false){
                return false;
            }
        }
        else {
            return true;
        }
    }


    function submitData(e){
        e.preventDefault();
        formValidation();
        console.log("Form is clean");
        console.log(formData);
    }

    return (
        <div>
            <AddProductHeader/>
            <section className="content-section">
                <div className="container">
                    <div className="w-100 content-section-products mt-2">
                        <form method="POST" id="product_form" action="#" className="mt-3" onSubmit={submitData}>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">SKU</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" id="sku" value={formData.sku} onChange={setData('sku')}/>
                                    {formData.skuErr !== false  && <small className="text-danger">{formData.skuErr}</small> }
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" id="name" value={formData.name} onChange={setData('name')}/>
                                    {formData.nameErr !== false  && <small className="text-danger">{formData.nameErr}</small> }
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Price($)</label>
                                <div className="col-sm-4">
                                    <input type="number" className="form-control" id="price" value={formData.price} onChange={setData('price')}/>
                                    {formData.priceErr !== false  && <small className="text-danger">{formData.priceErr}</small> }
                                </div>
                            </div>
        
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Type Switcher</label>
                                <div className="col-sm-4">
                                    <select className="form-select" aria-label="Default select example" id="productType" value={formData.productType} onChange={setData('productType')}>
                                        <option value="">Select</option>
                                        <option value="DVD">DVD</option>
                                        <option value="Furniture">Furniture</option>
                                        <option value="Book">Book</option>
                                    </select>
                                    {formData.selectedErr !== false  && <small className="text-danger">{formData.selectedErr}</small> }
                                </div>
                            </div>
                            {formData.productType === "DVD" && (
                            <div className="" id="dvd">
                                <div className="row mb-3">
                                    <label className="col-sm-2 col-form-label">Size(MB)</label>
                                    <div className="col-sm-4">
                                        <input type="number" className="form-control" id="size" value={formData.size} onChange={setData('size')} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-2"></div>
                                    <div className="col-sm-4">
                                        {formData.sizeErr !== false  && <small className="text-danger">{formData.sizeErr}</small> }
                                    </div>
                                </div>
                            </div>
                             )}

                            {formData.productType === "Furniture" && (
                            <div id="furniture" className="">
                                <div className="row mb-3">
                                    <label className="col-sm-2 col-form-label">Height (CM)</label>
                                    <div className="col-sm-4">
                                        <input type="number" className="form-control" id="height" value={formData.height} onChange={setData('height')}/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-2"></div>
                                    <div className="col-sm-4">
                                        {formData.heightErr !== false  && <small className="text-danger">{formData.heightErr}</small> }
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-sm-2 col-form-label">Width (CM)</label>
                                    <div className="col-sm-4">
                                        <input type="number" className="form-control" id="width" value={formData.width} onChange={setData('width')}/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-2"></div>
                                    <div className="col-sm-4">
                                        {formData.weightErr !== false  && <small className="text-danger">{formData.weightErr}</small> }
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-sm-2 col-form-label">Length (CM)</label>
                                    <div className="col-sm-4">
                                        <input type="number" className="form-control" id="length" value={formData.length} onChange={setData('length')}/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-2"></div>
                                    <div className="col-sm-4">
                                        {formData.lengthErr !== false  && <small className="text-danger">{formData.lengthErr}</small> }
                                    </div>
                                </div>
                            </div>
                            )}

                            {formData.productType === "Book" && (
                            <div className="" id="book">
                                <div className="row mb-3"  >
                                    <label className="col-sm-2 col-form-label">Weight(Kg)</label>
                                    <div className="col-sm-4">
                                        <input type="number" className="form-control" id="weight" value={formData.weight} onChange={setData('weight')}/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-2"></div>
                                    <div className="col-sm-4">
                                        {formData.weightErr !== false  && <small className="text-danger">{formData.weightErr}</small> }
                                    </div>
                                </div>
                            </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default ProductAdd;