import React, { useState, useEffect } from 'react';
import logo from './images/logo.svg';
import iconDollar from './images/icon-dollar.svg'
import iconPerson from './images/icon-person.svg'


function App() {

  const [tipAmountPP, setTipAmountPP] = useState<Number>(0)
  const [totalPP, setTotalPP] = useState<Number>(0)
  const [bill, setBill] = useState<Number>(0)
  const [tipPercent, setTipPercent] = useState<Number>(0)
  const [numOfPeople, setNumOfPeople] = useState<Number>(0)
  const [selectedButton, setSelectedButton] = useState<Number>(-1);


  useEffect(() => {
    handleCalculations();
  }, [bill, numOfPeople, tipPercent]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = event.target;
    let numVal = Number(value)
    if (name === 'bill') {
      setBill(numVal);
    } else if (name === 'numOfPeople') {

      setNumOfPeople(numVal);
    }
    else if (name === 'tipPercent') {
      setTipPercent(numVal);
    }

  };

  const handleButtonClick = (val: number, event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    setSelectedButton(val);
    setTipPercent(val);

  }
  const buttonBgClass = (val: number) =>
    `w-full  text-white py-2 px-4 rounded-md  ${val === Number(selectedButton) ? 'bg-emerald-500' : 'bg-custom-very-dark-cyan'}`


  const handleCalculations = () => {
    let totalAmount = Number(bill) / Number(numOfPeople)
    let tipAmount = totalAmount * (Number(tipPercent) / 100)
    setTotalPP(totalAmount + tipAmount);
    setTipAmountPP(tipAmount)
  }

  const resetValues = () => {
    setTotalPP(0);
    setTipAmountPP(0);
  }

  return (
    <div className="container mx-auto py-4 min-h-screen 
    bg-custom-light-grayish-cyan flex flex-col items-center font-custom">
      {/* logo */}
      <div className='p-4'>
        <img src={logo} alt="logo" className='py-4' />
      </div>


      <form className='rounded-2xl bg-white p-8 w-full space-y-8 md:w-2/3 md:flex md:gap-5 md:space-y-0'>
        <div className="space-y-8 ">
          {/* Bill  */}
          <div className='space-y-2'>
            <label htmlFor="bill">Bill</label>
            <div className="flex justify-between bg-gray-100 p-4 items-center rounded-md
             hover:outline-emerald-500 hover:outline-2 hover:outline-double hover:cursor-pointer">
              <img src={iconDollar} alt="Dollar Icon" className='w-3' />
              <input type="text" name="bill" id="bill" value={bill.toFixed()} onChange={handleChange} className='bg-gray-100 focus:outline-none h-5 text-right font-custom-weight text-custom-very-dark-cyan text-xl ' />

            </div>
          </div>

          {/* Select Tip  */}
          <div className='space-y-2'>
            <label htmlFor="tipPercent">Select Tip %</label>
            <div className="grid grid-cols-2 gap-4 text-xl md:grid-cols-3" >
              <button className={buttonBgClass(5)}
                onClick={(e) => handleButtonClick(5, e)}
              >5%</button>
              <button className={buttonBgClass(10)}
                onClick={(e) => handleButtonClick(10, e)}
              >10%</button>
              <button className={buttonBgClass(15)}
                onClick={(e) => handleButtonClick(15, e)}
              >15%</button>
              <button className={buttonBgClass(25)}
                onClick={(e) => handleButtonClick(25, e)}
              >25%</button>
              <button className={buttonBgClass(50)}
                onClick={(e) => handleButtonClick(50, e)}
              >50%</button>
              <input type="text" name='tipPercent' id='tipPercent' className="w-full bg-gray-100 text-custom-very-dark-cyan py-2 px-4 rounded-md hover:outline-emerald-500 hover:outline-2 hover:outline-double hover:cursor-pointer" placeholder='Custom' onChange={handleChange} />
            </div>

          </div>


          {/* Number of People */}
          <div className='space-y-2'>
            <div className="flex">
              <label htmlFor="numOfPeople">Number of People</label></div>
            <div className="flex justify-between bg-gray-100 p-4 items-center rounded-md hover:outline-emerald-500 hover:outline-2 hover:outline-double hover:cursor-pointer">
              <img src={iconPerson} alt="Person Icon" className='w-3' />
              <input type="text" name="numOfPeople" id="numOfPeople" value={numOfPeople.toFixed()} onChange={handleChange} className='bg-gray-100 focus:outline-none h-5 text-right font-custom-weight text-custom-very-dark-cyan text-xl ' />
            </div>
          </div>

        </div>

        {/* Invoice */}
        <div className='rounded-2xl bg-custom-very-dark-cyan p-8 w-full space-y-8 text-white md:flex md:flex-col 
        md:justify-between md:space-y-0 '>
          <div className="space-y-8">
            {/* tip Amount */}
            <div className="flex justify-between items-center">
              <p className='text-sm'>Tip Amount <br /> <span className='text-xs text-custom-grayish-cyan'>/ person</span></p>
              <span className='text-3xl text-emerald-500'>{tipAmountPP ? tipAmountPP.toFixed(2) : '0.00'}</span>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center">
              <p className='text-sm'>Total <br /> <span className='text-xs text-custom-grayish-cyan'>/ person</span></p>
              <span className='text-3xl text-emerald-500'>{totalPP ?
                totalPP.toFixed(2) : '0.00'}</span>
            </div>
          </div>
          {/* Reset button */}
          <button type="reset" className='w-full rounded-md bg-emerald-500 text-custom-very-dark-cyan p-2 ' onClick={() => resetValues()}>RESET</button>

        </div>
      </form>
    </div>
  );
}

export default App;

