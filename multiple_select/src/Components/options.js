import React from 'react'

function options() {
    const [options] =useState([
             { id:1,
               value:"Laxman ",
             },
             {id:2,
              value:"Iyappan ",
             },
             {id:3,
              value:"Vaishnavi ",
              },
             {id:4,
              value:"Praveen ",
              }
           ]);
           const filtered = options.filter((options) =>
    options.value.toLowerCase().includes(filtername.toLowerCase())
  );
    return 
    {show? (
        <div class="container" >

        {filtered.map((a) => (
         <div class="click" ><option onClick={handleClick} className = "value">{a.value}</option></div>
        ))}
            
        </div>
    )
}

export default options
