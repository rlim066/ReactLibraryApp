import { useState } from "react";

const Prac2 = () => {

  // let name = 'mario';

  /* though the console will show name change
    the var name here is not reactive */

  /*react doesnt watch it for change, when it changes 
  it does not trigger react to re-render the template 
  with the new val inside it */
  
  /* React must detect the change and re-render the template where that value changed
  and show it in the browser
  USE A HOOK called useState
  A hook is a type of fn that does a certain job
  All hooks start with "use"
  useState lets us create a reactive value and lets us change that value whenever we want
  */

  /* we want to store the val in usestate 
    Use array destruct to grab the 2 vals returned by useState
    1st val we call name, 2nd value is a fn to change the name variable 
    val can be anyth. array/obj/number wtv also can */
  const [name, setName] = useState('mario');
  const [age, setAge] = useState(0);

  const handleClick = () =>{
    // name = 'luigi'

    //when we use setName it will trigger react to re-render
    setName('luigi');
    setAge(40);
  }
  return (
    <div className="home">
      <h2>Home Page</h2>
      {/* Now once we use {name} it will take it from the useState fn 
        If we want to change {name} we would use setName fn*/}
      <p>{ name } is {age} years old </p>
      <button onClick={handleClick}> CLICK ME</button>
    </div>
    );
}
 
export default Prac2;