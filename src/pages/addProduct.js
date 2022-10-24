import React, {useState} from 'react';
import clsx from "clsx";
import AddProductHeader from '../components/AddHeaderComponent';
import { useFormValidator } from '../hooks/useFormValidator';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
/*-- Add Product Section -- */
function ProductAdd(){

    const [form, setForm] = useState({ 
        sku: '', 
        name: '',
        price: '', 
        type: '',
        size: '',
        height: '',
        width: '',
        length: '',
        weight: '',
        
      });

    const [skuErr, setSkuErr] = useState(false)
    const { errors, validateForm, onBlurField } = useFormValidator(form);
    const navigate = useNavigate();

    const onUpdateField = e => {
        const field = e.target.name;
        const nextFormState = {
          ...form,
          [field]: e.target.value,
        };
        setForm(nextFormState);
        setSkuErr(false);
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

        /* Form is clean and ready to be submitted */
        axios
        .post(`http://localhost:8888/php-api/products`, form, {
        })
        .then(function (res) {
            if (res.data === 1) {
                navigate('/');
            }
        })
        .catch((e) => {
            if (e.response.data.skuErr) {
               setSkuErr(true);
            }
        })
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
                                    {skuErr ? (<small className="text-danger">Sku Already exists, Please submit unique sku</small> ) : null}
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
                                    <select className="form-select" name="type" aria-label="Default select example" id="type" value={form.type} onChange={onUpdateField} onBlur={onBlurField}>
                                        <option value="">Select</option>
                                        <option value="DVD">DVD</option>
                                        <option value="Furniture">Furniture</option>
                                        <option value="Book">Book</option>
                                    </select>
                                    {errors.type.dirty && errors.type.error ? (<small className="text-danger">{errors.type.message}</small> ) : null}
                                </div>
                            </div>
                            {form.type === "DVD" && (
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
                                    {errors.size.dirty && errors.size.error ? (<small className="text-danger">{errors.size.message}</small> ) : <small className="text-dark fw-bold">Please, provide size (in MB)</small>}
                                    
                                    </div>
                                </div>
                            </div>
                             )}

                            {form.type === "Furniture" && (
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
                                    {/* {errors.height.dirty && errors.height.error ? (<small className="text-danger">{errors.height.message}</small> ) : <small className="text-dark fw-bold">Please, provide size</small>} */}
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
                                    {/* {errors.width.dirty && errors.width.error ? (<small className="text-danger">{errors.width.message}</small> ) : null} */}
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
                                    {errors.length.dirty && errors.length.error || errors.width.dirty && errors.width.error || errors.height.dirty && errors.height.error ? (<small className="text-danger">Please, provide dimensions (in HxWxL)</small> ) : <small className="text-dark fw-bold">Please, provide dimensions (in HxWxL)</small> }
                                    </div>
                                </div>
                            </div>
                            )}

                            {form.type === "Book" && (
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
                                    {errors.weight.dirty && errors.weight.error ? (<small className="text-danger">{errors.weight.message}</small> ) : <small className="text-dark fw-bold">Please, provide weight (in kg)</small>}
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