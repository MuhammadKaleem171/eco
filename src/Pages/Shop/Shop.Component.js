import React from 'react'
import SHOP_DATA from './Shope.Data'
import CollectionPreview from '../../Componets/PreView-Collection/Preview.component'
class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            //'Collection':SHOP_DATA,
            users:[],
            
        }
    }
    componentDidMount(){
        console.log('clicked')
        fetch('http://localhost:8080/')
        .then(response => response.json())
        .then(result => {
            this.setState({users: result })
           console.log('gghhghhg',this.state.users)
        })
        .catch(e => {
            console.log(e);
          // this.setState({...this.state, isFetching: false});
        });
      }
    render(){
               // const {Collection}=this.state
                //const {Collections}=this.state.users
                
                console.log(this.state.users)
                if(this.state.users.length<0)
                return 
        return(
            <div className='shop-page'>
                {
this.state.users.map(({id,...otherCollectionProps})=>(
<CollectionPreview key={id}{...otherCollectionProps}/>
))
                }
            </div>
        )
    }
}
export default  ShopPage;