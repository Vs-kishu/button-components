import './index.css';
import { MdAddShoppingCart } from 'react-icons/md';

function Page(){
    return(
        <>
        <h2>Buttons</h2>
        <div>
        <p className='button_1'>{'<Button>'}</p>
        <button className='rectangle_1'>Default</button>
        </div>
        <div>
            <p className='button_5'>{'&:hover, &:focus'}</p>
            <button className='rectangle_5'>Default</button>
        </div>
        <div>
            <p className='button_3' >{'<Button variant=”outline” />'}</p>
            <button className='rectangle_3' ><span style={{color:'#3D5AFE'}}>Default</span></button>       
        </div>
        <div>
            <p className='local_23'>{'&:hover, &:focus'}</p>
            <button className='rectangle_23'><span style={{color:'#3D5AFE'}}>Default</span></button>

            <p className='group_34_text'>{'<Button variant=”text” />'}</p>
            <p className='group_34_default'>Default</p>
            <p className='local_24'>{'&:hover, &:focus'}</p>
            <button className='rectangle_24'><span style={{color:'#3D5AFE'}}>Default</span></button>
        </div>
        <div>
            <p className='text_6'>{'<Button disableShadow />'}</p>
            <button className='button_6'><span style={{color:'#FFFFFF'}}>Default</span></button>
        </div>
        <div>
            <p className='text_14'>{'<Button disabled />'}</p>
            <button className='button_14'><span style={{color:'#9E9E9E'}}>Disabled</span></button>

            <p className='text_13'>{'<Button variant=”text” disabled />'}</p>
            <p className='button_13'>Disabled</p>
        </div>
        <div>
            <p className='text_16'>{'<Button startIcon=”local_grocery_store” />'}</p>
            <button className='button_16'><span style={{color:'#FFFFFF'}}><MdAddShoppingCart/>  Default</span></button>

            <p className='text_18'>{'<Button endIcon=”local_grocery_store” />'}</p>
            <button className='button_18'><span style={{color:'#FFFFFF'}}>Default   <MdAddShoppingCart/>  </span></button>
        </div>
        <div>
        <p className='text_24'>{'<Button size=”sm” />'}</p>
        <button className='button_24'><span style={{color:'#FFFFFF'}}>Default</span></button>

         <p className='text_22'>{'<Button size=”md” />'}</p>
         <button className='button_22'><span style={{color:'#FFFFFF'}}>Default</span></button>

         <p className='text_23'>{'<Button size=”lg” />'}</p>
         <button className='button_23'><span style={{color:'#FFFFFF'}}>Default</span></button>
        </div>
        <div>
            <p className='text_32'>{'<Button color=”default” />'}</p>
            <button className='button_32'>Default</button>

            <p className='text_31'>{'<Button color=”primary” />'}</p>
            <button className='button_31'><span style={{color:'#FFFFFF'}}>Default</span></button>

            <p className='text_30'>{'<Button color=”secondary” />'}</p>
            <button className='button_30'><span style={{color:'#FFFFFF'}}>Secondary</span></button>

            <p className='text_29'>{'<Button color=”danger” />'}</p>
            <button className='button_29'><span style={{color:'#FFFFFF'}}>Danger</span></button>
        </div>
        <div>
            <p className='text_33'>{'&:hover, &:focus'}</p>
            <button className='button_33'>Default</button>

            <button className='button_43'><span style={{color:'#FFFFFF'}}>Default</span></button>

            <button className='button_45'><span style={{color:'#FFFFFF'}}>Secondary</span></button>

            <button className='button_44'><span style={{color:'#FFFFFF'}}>Danger</span></button>
           
        </div>
        <footer>
            <p className='foottext'>{'Icons: https://material.io/resources/icons/?style=round'}</p>
            <p className='userfoot'>created by <b><u>kishan</u></b> - devChallenges.io</p>
        </footer>
        </>

        
    )
}

export default Page;