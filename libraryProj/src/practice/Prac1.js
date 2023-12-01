const Prac1 = () => {

  let name2 = 'mario';
  
  const handleClick = (e) => {
    console.log('hello', e);
  }

  const handleClick2 = (name, e) => {
    console.log(`${name}`, e.target);
  }
  return (
    <div className="home">
      <h2>Home Page</h2>

      
      {/* Use a reference to handleClick
      Invokes the func after clicking
      If you put handleClick() the func will alw run immediately */}
      <button onClick={handleClick}>Click Me</button>

      {/* Need to wrap the func in an annonymous fn
        Use an arrow fn that fires when user clicks
        Inside the arrow fn run the fn we want
        annonymous fn cus NO NAME, just () =>{}
        not invoking fn but referencing */}
        
        {/* Run it all in one line so dont need curly braces to wrap handleclick2
          But maintain the outer braces to signify the dynamic nature of the value within */}

        {/* The annon fn gets access to e as an object as it's 1st parameter
          Take the parameter from the annon fn and pass it to the inner fn as 2nd/3rd/etc parameter */}


      <button onClick={(e) => handleClick2('mario',e)}>Click me again</button>

      {/* Event object within functions  */}
    </div>
    );
}

export default Prac1;