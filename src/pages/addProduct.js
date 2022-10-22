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

    const [isvalid, setIsValid] = useState(true);


    const onUpdateField = e => {
        const nextFormState = {
          ...formData,
          [e.target.name]: e.target.value,
        };
        setFormData(nextFormState);
    };
    
      
    const setData = name => {
        return ({ target: { value } }) => {
          setFormData(oldData => (
            {...oldData, 
                [name]: value 
            }
            ));
        }
    };



    function submitData(e){
        e.preventDefault();

        // console.log("Form is clean");
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
                                    <input type="text" className="form-control" id="sku" name="sku" value={formData.sku} onChange={onUpdateField}/>
                                    {formData.skuErr !== false  && <small className="text-danger">{formData.skuErr}</small> }
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={onUpdateField}/>
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