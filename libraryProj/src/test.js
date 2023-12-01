import { useEffect, useState } from "react";

const useFetch = (url) => {

const [data, setData] = useState(null);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);

  useEffect(() => {

    const abortCont = new AbortController(); //associate it with a fetch and use it to stop that fetch when needed

    setTimeout(() =>{
    fetch(url, { signal: abortCont.signal }) //once the promise is resolved aka the data has been pulled
    .then(res => { //we get a response object. to get the data we have to do the smt with the response obj
      if(!res.ok){
        throw Error('Could not fetch the data for that resource')
      }
      return res.json(); //passes the json into a js obj for us
      //the entire fetch fn also returns another promise cus res.json is asnychornous and waits for a response
    })
    .then(data => {
      setData(data);
      setIsLoading(false)
      setError(null)
    })
    .catch(err => {
      if(err.name === 'AbortError') {
        console.log('fetch aborted')  //this is to prevent the states of isloading and seterror to keep updating due to the error catch from the abort
      } else {
      setIsLoading(false)
      setError(err.message);
      }
    })
  },1000);

  return() => abortCont.abort();

}, [url])

  return {data, isLoading, error};
}
//need a cleanup function
//when the component using usefetch unmounts
//it runs the cleanup func


export default useFetch;