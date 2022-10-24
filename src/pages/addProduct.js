import React, {useState} from 'react';
import clsx from "clsx";
import AddProductHeader from '../components/AddHeaderComponent';
import { useFormValidator } from '../hooks/useFormValidator';

/*-- Add Product Section -- */
function ProductAdd(){

    const [form, setForm] = useState({ 
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

    const { errors, validateForm, onBlurField } = useFormValidator(form);
 

    const onUpdateField = e => {
        const field = e.target.name;
        const nextFormState = {
          ...form,
          [field]: e.target.value,
        };
        setForm(nextFormState);
        if (errors[field].dirty)
          validateForm({
            form: nextFormState,
            errors,
            field,
          });
      };



    function submitData(e){
        e.preventDefault();
        const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
        if (!isValid) return;

        console.log("Form is clean");
        // console.log(formData);
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
                                    <input type="text" className="form-control" id="sku" name="sku" value={form.sku} onChange={onUpdateField}  onBlur={onBlurField}/>
                                    {errors.sku.dirty && errors.sku.error ? (<small className="text-danger">{errors.sku.message}</small> ) : null}
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" id="name" name="name" value={form.name} onChange={onUpdateField} onBlur={onBlurField}/>
                                    {errors.name.dirty && errors.name.error ? (<small className="text-danger">{errors.name.message}</small> ) : null}
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Price($)</label>
                                <div className="col-sm-4">
                                    <input type="number" className="form-control" name="price" id="price" value={form.price} onChange={onUpdateField} onBlur={onBlurField}/>
                                    {errors.price.dirty && errors.price.error ? (<small className="text-danger">{errors.price.message}</small> ) : null}
                                </div>
                            </div>
        
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Type Switcher</label>
                                <div className="col-sm-4">
                                    <select className="form-select" name="productType" aria-label="Default select example" id="productType" value={form.productType} onChange={onUpdateField}>
                                        <option value="">Select</option>
                                        <option value="DVD">DVD</option>
                                        <option value="Furniture">Furniture</option>
                                        <option value="Book">Book</option>
                                    </select>
                                    {errors.productType.dirty && errors.productType.error ? (<small className="text-danger">{errors.productType.message}</small> ) : null}
                                </div>
                            </div>
                            {form.productType === "DVD" && (
                            <div className="" id="dvd">
                                <div className="row mb-3">
                                    <label className="col-sm-2 col-form-label">Size(MB)</label>
                                    <div className="col-sm-4">
                                        <input type="number" className="form-control" name="size" id="size" value={form.size} onChange={onUpdateField}  onBlur={onBlurField}/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-2"></div>
                                    <div className="col-sm-4">
                                    {errors.size.dirty && errors.size.error ? (<small className="text-danger">{errors.size.message}</small> ) : null}
                                    </div>
                                </div>
                            </div>
                             )}

                            {form.productType === "Furniture" && (
                            <div id="furniture" className="">
                                <div className="row mb-3">
                                    <label className="col-sm-2 col-form-label">Height (CM)</label>
                                    <div className="col-sm-4">
                                        <input type="number" className="form-control" name="height" id="height" value={form.height} onChange={onUpdateField} onBlur={onBlurField}/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-2"></div>
                                    <div className="col-sm-4">
                                    {errors.height.dirty && errors.height.error ? (<small className="text-danger">{errors.height.message}</small> ) : null}
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-sm-2 col-form-label">Width (CM)</label>
                                    <div className="col-sm-4">
                                        <input type="number" name="width" className="form-control" id="width" value={form.width} onChange={onUpdateField} onBlur={onBlurField}/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-2"></div>
                                    <div className="col-sm-4">
                                    {errors.width.dirty && errors.width.error ? (<small className="text-danger">{errors.width.message}</small> ) : null}
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-sm-2 col-form-label">Length (CM)</label>
                                    <div className="col-sm-4">
                                        <input type="number" name="length" className="form-control" id="length" value={form.length} onChange={onUpdateField} onBlur={onBlurField}/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-2"></div>
                                    <div className="col-sm-4">
                                    {errors.length.dirty && errors.length.error ? (<small className="text-danger">{errors.length.message}</small> ) : null}
                                    </div>
                                </div>
                            </div>
                            )}

                            {form.productType === "Book" && (
                            <div className="" id="book">
                                <div className="row mb-3"  >
                                    <label className="col-sm-2 col-form-label">Weight(Kg)</label>
                                    <div className="col-sm-4">
                                        <input type="number" name="weight" className="form-control" id="weight" value={form.weight} onChange={onUpdateField}/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-2"></div>
                                    <div className="col-sm-4">
                                    {errors.weight.dirty && errors.weight.error ? (<small className="text-danger">{errors.weight.message}</small> ) : null}
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