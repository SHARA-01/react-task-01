import React, { useState } from 'react';

function Task01() {
  const [displayArray, setDisplayArray] = useState(false);
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [sum, setSum] = useState(0);
  const [UserName, setUserName] = useState('')
  const [check, setCheck] = useState(false)

  const array = [
    {
      name: "user01",
      Id: "01",
    },
    {
      name: "user02",
      Id: "02",
    },
    {
      name: "user03",
      Id: "03",
    },
    {
      name: "user04",
      Id: "04",
    },
  ];
  const handleAddButtion = () => {
    const add = parseInt(firstNumber) + parseInt(secondNumber);
    setSum(add)
  }

  return (
    <div className=' flex flex-col space-y-8'>
      <ul className='text-center'>

        <li>
          <span className='font-bold'> Display array </span>
          <button
            className="border-2 px-2 py-1 bg-blue-500 rounded-md"
            onClick={() => setDisplayArray(!displayArray)} disabled={check}
          >
            {displayArray ? "Hide" : "Show"}
          </button>
          <button className="border-2 px-2 py-1 bg-blue-500 rounded-md" onClick={() => setCheck(!check)}
          >
            {check ? "Enable" : "disable"}
          </button>
       
        </li>

        {displayArray ? (
          array.map((data) => (
            <li key={data.Id}>
              <h1>user name: {data.name}</h1>
              <h1>user id: {data.Id}</h1>
            </li>
          ))
        ) : ''}
      </ul>

      <ul className='text-center'>
        <h1 className='font-bold'>Sum of Two Number : {sum}</h1>
        <input className='border-2 border-black/40 rounder-md mx-2 text-center' type="number" value={firstNumber} onChange={(e) => setFirstNumber(e.target.value)} />
        <input className='border-2 border-black/40 rounder-md mx-2 text-center' type="number" value={secondNumber} onChange={(e) => setSecondNumber(e.target.value)} />
        {
          (firstNumber && secondNumber) != 0 ? <button
            className="border-2 px-2 py-1 bg-blue-500 rounded-md"
            onClick={handleAddButtion}
          >Add</button> : <button
            className="border-2 px-2 py-1 bg-gray-500 rounded-md" disabled

          >Enter Input </button>

        }

      </ul>
      <ul className='text-center'>
        <li>
          <h1 className='font-bold'>Two way data binding display</h1>
          <input className='border-2 border-black/40 rounder-md mx-2 text-center' type="text" value={UserName} onChange={(e) => setUserName(e.target.value)} />
          <p>{UserName ?  `Hello, ${UserName}`: ''}</p>
        </li>
      </ul>

    </div>
  );
}

export default Task01;
