import React,{Component} from 'react'
import '../../Componets/SignUp/sign-up.styles.scss'
import FormInput from '../../Componets/Form-input/form-Input.component'
import axios from 'axios'
import './addProduct.scss'
class AddItem extends Component{
    constructor(){
        super();
        this.state={
        id:'',
        name: '',
        imageUrl: '',
        price:'',
        selectValue: ""
        };
    }
    ChangeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    
    }
   
    submitHandler=(e)=>{
        e.preventDefault()
        const {id,name,imageUrl,price,selectValue}=this.state;
        const requestBody = {
            name:name ,
            id: id,
            imageUrl: imageUrl,
            price:price,
          }
          const config = {
            headers: {
              "Content-type": "application/json"
            }
        }
          axios.post(`http://localhost:8080/addItem/${selectValue}`,(requestBody),config)
            .then(res => {
              console.log(res);
              console.log(res.data);
            })
    }
    handleDropdownChange=(e)=>{
        this.setState({ selectValue: e.target.value });
      }

    render(){
    const {id,name,imageUrl,price}=this.state;    
        return(
<div className="product">
    <form className='sign-up-form' onSubmit={this. submitHandler}>

<div >
    <span className="heading">Select Product Type </span><br/>
<select id="dropdown" onChange={this.handleDropdownChange} className='dropdown'>
              <option value="womens">womens</option>
              <option value="Mens">Mens</option>
              <option value="Hats">Hats</option>
              <option value="Jackets">Jackets</option>
              <option value="Sneakers">Sneakers</option>
            </select>
</div>
<span className="heading">Enter Product details </span><br/>
    <FormInput type="text" name="id" placeholder="id"  value={id} onChange={this.ChangeHandler}/><br></br>
    <FormInput type="text" name="name" placeholder="name"  value={name} onChange={this.ChangeHandler} /><br/>
    <FormInput type="text" name="imageUrl" placeholder="imageUrl"  value={imageUrl} onChange={this.ChangeHandler} /><br></br>
    <FormInput type="text" name="price" placeholder="price" value={price} onChange={this.ChangeHandler} /><br></br>
    

    <button value="Submit " type='submit' style={{width:20,height:20}} />
    </form>
</div>

        )
    }

}

export default AddItem;