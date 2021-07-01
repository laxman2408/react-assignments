import React, { useState,useEffect,useRef } from "react";
import './style.css';
// import { FaRegWindowClose } from 'react-icons/fa';
const Dropdown=function(props){
    const [name,setName]=useState("",[]); 
    const[addname,setAddName]=useState([]); ;
    const[view,setView]=useState(false);   
    const[filter,setFilter]=useState("",)
    
    const handleClick =(e)=> {
    e.preventDefault();
    setName(e.target.value);
    AddTask(e.target.value); 
    removeOptions(e.target.value);
  
    }
        const AddTask =(name) => {

        const taskDetails={
                
                value: name ,
            };
            setAddName([...addname,taskDetails]);
        
        };    

        const removeTask = (e, value)=>{
        e.preventDefault();
        setAddName(addname.filter((t) => t.value !== value));
        var task = {value}
        setOptions([...options,task])
        };

const filterHandle =(e)=>{
setFilter(e.target.value);
console.log(filter);

}
    const [options,setOptions] =useState([
     { 
       value:"Laxman ",
     },
     {
      value:"Iyappan ",
     },
     {
      value:"Vaishnavi ",
      },
     {
      value:"Praveen ",
      }
   ]);


   const removeOptions = (value,e) => {
            const newTod =[...options];
            newTod.splice(value,1);
            setOptions(newTod);
        }
  
const filtered = options.filter((options) =>
    options.value.toLowerCase().includes(filter.toLowerCase())
  );
  let menuRef = useRef();
        useEffect(() => {
            let handler = (event) => {
            if(!menuRef.current.contains(event.target)){
                setView(false);
            }
            
        }
            document.addEventListener('mousedown',handler);

            return () => {
                document.removeEventListener('mousedown',handler);
            }
        });
return(
    <div>
    <h3 className="heading" style = {{marginLeft:'90px'}}> DropDown Task</h3>
    <div ref = {menuRef}>
    
             <div class="textbox " >
             
            {addname.map((t) => (
             <li class="content">{t.value} 
             <div class="button" onClick={(e)=> removeTask(e, t.value)}><div className ="cancel"> X </div></div>
             </li>))}
             </div>
            <input  className='input' type="search"  placeholder="search" onChange={(e) => filterHandle(e) } onClick={()=>setView(!view)} />
            
         
            
{view?
    
 <div class="container" >

      {filtered.map((a) => (
       <div class="click" ><option onClick={handleClick} className = "value">
           {a.value}
       
       </option>
       </div>
      ))}
</div> 
     
:null }
</div>
</div>
);
      }

export default Dropdown;








