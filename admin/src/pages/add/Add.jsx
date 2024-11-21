import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'
const add = ({url}) => {
    const [image, setImage] = useState(false)
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Beach trips"
    })
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))

    } 
    const onSubmitHandler = async(event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("image",image)
        const response = await axios.post(`${url}/api/service/add`,formData);
        if (response.data.success) {
            setData({
                name: "",
                description: "",
                price: "",
                category: "Beach trips"
            })
            setImage(false)
            toast.success(response.data.message)


        }
        else {
            toast.error(response.data.message)

        }
    }

    return (
        <div className='Add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className="add-img-upload flex-col">
                    <p> upload image</p>
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
                </div>
                <div className="add-name flex-col">
                    <p>Name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder='type here' />


                </div>
                <div className="add-description flex-col">
                    <p>description</p>
                    <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='write content here ' required></textarea>
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>category</p>
                        <select onChange={onChangeHandler} name="category" >
                            <option value="Beach trips">Beach trips</option>
                            <option value="full course">full course</option>
                            <option value="endurance">endurance</option>
                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>price</p>
                        <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='20 or' />
                    </div>

                </div>
                <button type='submit' className='add-btn'>Add</button>

            </form>

        </div>
    )
}

export default add
