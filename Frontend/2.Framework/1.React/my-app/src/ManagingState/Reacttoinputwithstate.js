import { useState } from "react";

export default function Reactiveform(){
   /* const [isEmpty, setIsEmpty] = useState(true);
    const [isTyping, setTyping] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    */
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success') {
        return <h1>That's right!</h1>
      }
    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
          await submitForm(answer);
          setStatus('success');
        } catch (err) {
          setStatus('typing');
          setError(err);
        }
      }
    function handletextinputchange(e){
        setAnswer(e.target.value)
    }
    function submitForm(answer) {
        // Pretend it's hitting the network.
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'lima'
            if (shouldError) {
              reject(new Error('Good guess but a wrong answer. Try again!'));
            } else {
              resolve();
            }
          }, 1500);
        });
      }
    return(
    <>
     <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea value={answer} disabled={status=== 'submitting'} onChange={handletextinputchange}/>
        <br />
        <button disabled = {
          answer.length === 0 || status==='submitting'} onSubmit={handleSubmit}>
          Submit
        </button>
          {error !== null &&
          <p className="Error">
            {error.message}
          </p>}

      </form>
    </>);
}
