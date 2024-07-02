import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import ExpenseList from "../components/ExpenseList"; // Assuming this is used somewhere in your app

const dashboardVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const interestRates = {
  developmentBanks: {
    savings: {
      normalSaving: [
        { bank: "RBB", rate: 5.1 },
        { bank: "Nabil Bank", rate: 5.9 },
        { bank: "NIMB", rate: 4.9 },
      ],
      fixedDeposit: [
        { bank: "RBB", rate: 5.3 },
        { bank: "Nabil Bank", rate: 5.2 },
        { bank: "NIMB", rate: 5.0 },
      ],
    },
    loans: {
      autoLoan: [
        { bank: "RBB", rate: 8.46 },
        { bank: "Nabil Bank", rate: 9.10 },
        { bank: "NIMB", rate: 9.76 },
      ],
      homeLoan: [
        { bank: "RBB", rate: 7.46 },
        { bank: "Nabil Bank", rate: 8.99 },
        { bank: "NIMB", rate: 10.76 },
      ],
    },
  },
};

const Calculators = () => {
  const [principalAmountSI, setPrincipalAmountSI] = useState(0);
  const [interestRateSI, setInterestRateSI] = useState(0);
  const [timeSI, setTimeSI] = useState(0);
  const [simpleInterest, setSimpleInterest] = useState(0);

  const [principalAmountCI, setPrincipalAmountCI] = useState(0);
  const [interestRateCI, setInterestRateCI] = useState(0);
  const [timeCI, setTimeCI] = useState(0);
  const [compoundInterest, setCompoundInterest] = useState(0);

  const [investmentPeriod, setInvestmentPeriod] = useState("monthly");
  const [investmentAmount, setInvestmentAmount] = useState(0);
  const [expectedAnnualReturn, setExpectedAnnualReturn] = useState(0);
  const [years, setYears] = useState(0);
  const [expectedAmount, setExpectedAmount] = useState(0);
  const [amountInvested, setAmountInvested] = useState(0);
  const [wealthGain, setWealthGain] = useState(0);

  const calculateSimpleInterest = () => {
    const si = (principalAmountSI * interestRateSI * timeSI) / 100;
    setSimpleInterest(si.toFixed(2));
  };

  const calculateCompoundInterest = () => {
    const amount =
      principalAmountCI * Math.pow(1 + interestRateCI / 100, timeCI);
    const ci = amount - principalAmountCI;
    setCompoundInterest(ci.toFixed(2));
  };

  const calculateSIP = () => {
    let n, r;
    switch (investmentPeriod) {
      case "monthly":
        n = years * 12;
        r = expectedAnnualReturn / (12 * 100);
        break;
      case "quarterly":
        n = years * 4;
        r = expectedAnnualReturn / (4 * 100);
        break;
      case "semi-annually":
        n = years * 2;
        r = expectedAnnualReturn / (2 * 100);
        break;
      case "annually":
        n = years;
        r = expectedAnnualReturn / 100;
        break;
      default:
        return;
    }

    const amount = investmentAmount * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const totalInvested = investmentAmount * n;
    const gain = amount - totalInvested;

    setExpectedAmount(amount.toFixed(2));
    setAmountInvested(totalInvested.toFixed(2));
    setWealthGain(gain.toFixed(2));
  };

  return (
    <>
      <div className="dashboardContainer">
        <motion.div
          variants={dashboardVariant}
          initial="initial"
          animate="animate"
          className="p-6 max-w-[1600px] mx-auto"
        >
          <Navbar />
          <h1 className="text-3xl font-bold mb-4">Calculators</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="my-4 p-6 bg-black rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Simple Interest Calculator
              </h2>
              <div className="my-3">
                <label className="block text-white">Principal Amount: </label>
                <input
                  type="number"
                  value={principalAmountSI}
                  onChange={(e) =>
                    setPrincipalAmountSI(parseFloat(e.target.value))
                  }
                  className=" p-2 rounded w-full bg-gray-600 text-white"
                />
              </div>
              <div className="my-3">
                <label className="block text-white">Interest Rate (%): </label>
                <input
                  type="number"
                  value={interestRateSI}
                  onChange={(e) =>
                    setInterestRateSI(parseFloat(e.target.value))
                  }
                  className=" p-2 rounded w-full bg-gray-600 text-white"
                />
              </div>
              <div className="my-3">
                <label className="block text-white">Time (Years): </label>
                <input
                  type="number"
                  value={timeSI}
                  onChange={(e) => setTimeSI(parseFloat(e.target.value))}
                  className=" p-2 rounded w-full bg-gray-600 text-white"
                />
              </div>
              <button
                onClick={calculateSimpleInterest}
                className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
              >
                Calculate Simple Interest
              </button>
              <div className="my-3">
                <label className="block text-white">
                  Total Invested Amount:{" "}
                </label>
                <input
                  type="text"
                  value={principalAmountSI}
                  readOnly
                  className=" p-2 rounded w-full bg-gray-600 text-white"
                />
              </div>
              <div className="my-3">
                <label className="block text-white">Interest Earned: </label>
                <input
                  type="text"
                  value={simpleInterest}
                  readOnly
                  className=" p-2 rounded w-full bg-gray-600 text-white"
                />
              </div>
              <div className="my-3">
                <label className="block text-white">Total Amount: </label>
                <input
                  type="text"
                  value={(
                    parseFloat(principalAmountSI) + parseFloat(simpleInterest)
                  ).toFixed(2)}
                  readOnly
                  className=" p-2 rounded w-full bg-gray-600 text-white"
                />
              </div>
            </div>

            <div className="my-4 p-6 bg-black rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-white text-center">
                Interest Rates
              </h2>
              {/* Commercial Bank  */}
              <div className="my-10">
                <h3 className="text-xl font-semibold text-white text-center mb-4">
                  Commercial Banks
                </h3>
                <div className="flex justify-between gap-6">
                  <div className="w-1/2 text-center">
                    <p className="text-lg font-bold text-gray-300 mb-2">
                      Interest Rates (Savings)
                    </p>
                    <div className="flex justify-between gap-6 text-center">
                      <ul className="list-none pl-0 text-white">
                        <p className="my-3">Normal Saving</p>
                        {interestRates.developmentBanks.savings.normalSaving.map(
                          (item, index) => (
                            <li key={index} className="mb-2 flex text-start">
                              <span className="text-green-400 pr-2">
                                {item.bank}
                              </span>
                              :
                              <span className="font-semibold pl-2">
                                {item.rate}%
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                      <ul className="list-none pl-0 text-white">
                        <p className="my-3">Fixed Deposit</p>
                        {interestRates.developmentBanks.savings.fixedDeposit.map(
                          (item, index) => (
                            <li key={index} className="mb-2 flex text-start">
                              <span className="text-green-400 pr-2">
                                {item.bank}
                              </span>
                              :{" "}
                              <span className="font-semibold pl-2">
                                {item.rate}%
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                  <div className="w-1/2 text-center">
                    <p className="text-lg font-bold text-gray-300 mb-2">
                      Interest Rates (Loans)
                    </p>
                    <div className="flex justify-between gap-6 text-center">
                      <ul className="list-none pl-0 text-white">
                        <p className="my-3">Auto Loan</p>
                        {interestRates.developmentBanks.loans.autoLoan.map(
                          (item, index) => (
                            <li key={index} className="mb-2 flex text-start">
                              <span className="text-red-400 pr-2">
                                {item.bank}
                              </span>
                              :{" "}
                              <span className="font-semibold pl-2">
                                {item.rate}%
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                      <ul className="list-none pl-0 text-white">
                        <p className="my-3">Home Loan</p>
                        {interestRates.developmentBanks.loans.homeLoan.map(
                          (item, index) => (
                            <li key={index} className="mb-2 flex text-start">
                              <span className="text-red-400 pr-2">
                                {item.bank}
                              </span>
                              :
                              <span className="font-semibold pl-2">
                                {item.rate}%
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Development Bank  */}
              <div className="my-10">
                <h3 className="text-xl font-semibold text-white text-center mb-4">
                  Development Banks
                </h3>
                <div className="flex justify-between gap-6">
                  <div className="w-1/2 text-center">
                    <p className="text-lg font-bold text-gray-300 mb-2">
                      Interest Rates (Savings)
                    </p>
                    <div className="flex justify-between gap-6 text-center">
                      <ul className="list-none pl-0 text-white">
                        <p className="my-3">Normal Saving</p>
                        {interestRates.developmentBanks.savings.normalSaving.map(
                          (item, index) => (
                            <li key={index} className="mb-2 flex text-start">
                              <span className="text-green-400 pr-2">
                                {item.bank}
                              </span>
                              :
                              <span className="font-semibold pl-2">
                                {item.rate}%
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                      <ul className="list-none pl-0 text-white">
                        <p className="my-3">Fixed Deposit</p>
                        {interestRates.developmentBanks.savings.fixedDeposit.map(
                          (item, index) => (
                            <li key={index} className="mb-2 flex text-start">
                              <span className="text-green-400 pr-2">
                                {item.bank}
                              </span>
                              :{" "}
                              <span className="font-semibold pl-2">
                                {item.rate}%
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                  <div className="w-1/2 text-center">
                    <p className="text-lg font-bold text-gray-300 mb-2">
                      Interest Rates (Loans)
                    </p>
                    <div className="flex justify-between gap-6 text-center">
                      <ul className="list-none pl-0 text-white">
                        <p className="my-3">Auto Loan</p>
                        {interestRates.developmentBanks.loans.autoLoan.map(
                          (item, index) => (
                            <li key={index} className="mb-2 flex text-start">
                              <span className="text-red-400 pr-2">
                                {item.bank}
                              </span>
                              :{" "}
                              <span className="font-semibold pl-2">
                                {item.rate}%
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                      <ul className="list-none pl-0 text-white">
                        <p className="my-3">Home Loan</p>
                        {interestRates.developmentBanks.loans.homeLoan.map(
                          (item, index) => (
                            <li key={index} className="mb-2 flex text-start">
                              <span className="text-red-400 pr-2">
                                {item.bank}
                              </span>
                              :{" "}
                              <span className="font-semibold pl-2">
                                {item.rate}%
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-6">
                <a
                  href="https://bankbyaj.com/"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  Click here for full details
                </a>
              </div>
            </div>

            <div className="my-4 p-6 bg-black rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Compound Interest Calculator
              </h2>
              <div className="my-3">
                <label className="block text-white">Principal Amount: </label>
                <input
                  type="number"
                  value={principalAmountCI}
                  onChange={(e) =>
                    setPrincipalAmountCI(parseFloat(e.target.value))
                  }
                  className=" p-2 rounded w-full bg-gray-600 text-white"
                />
              </div>
              <div className="my-3">
                <label className="block text-white">Interest Rate (%): </label>
                <input
                  type="number"
                  value={interestRateCI}
                  onChange={(e) =>
                    setInterestRateCI(parseFloat(e.target.value))
                  }
                  className=" p-2 rounded w-full bg-gray-600 text-white"
                />
              </div>
              <div className="my-3">
                <label className="block text-white">Time (Years): </label>
                <input
                  type="number"
                  value={timeCI}
                  onChange={(e) => setTimeCI(parseFloat(e.target.value))}
                  className=" p-2 rounded w-full bg-gray-600 text-white"
                />
              </div>
              <button
                onClick={calculateCompoundInterest}
                className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
              >
                Calculate Compound Interest
              </button>
              <div className="my-3">
                <label className="block text-white">
                  Total Invested Amount:{" "}
                </label>
                <input
                  type="text"
                  value={principalAmountCI}
                  readOnly
                  className=" p-2 rounded w-full bg-gray-600 text-white"
                />
              </div>
              <div className="my-3">
                <label className="block text-white">Interest Earned: </label>
                <input
                  type="text"
                  value={compoundInterest}
                  readOnly
                  className=" p-2 rounded w-full bg-gray-600 text-white"
                />
              </div>
              <div className="my-3">
                <label className="block text-white">Total Amount: </label>
                <input
                  type="text"
                  value={(
                    parseFloat(principalAmountCI) + parseFloat(compoundInterest)
                  ).toFixed(2)}
                  readOnly
                  className=" p-2 rounded w-full bg-gray-600 text-white"
                />
              </div>
            </div>

            <div className="my-4 p-6 bg-black rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-white">
                SIP Calculator
              </h2>
              <div className="my-3">
                <label className="block text-white">Investment Period: </label>
                <select
                  value={investmentPeriod}
                  onChange={(e) => setInvestmentPeriod(e.target.value)}
                  className=" p-2 rounded w-full bg-gray-600 text-white"
                >
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="semi-annually">Semi-Annually</option>
                  <option value="annually">Annually</option>
                </select>
              </div>
              <div className="my-3">
                <label className="block text-white">Investment Amount: </label>
                <input
                  type="number"
                  value={investmentAmount}
                  onChange={(e) =>
                    setInvestmentAmount(parseFloat(e.target.value))
                  }
                  className=" p-2 rounded w-full bg-gray-600 text-white"
                />
              </div>
              <div className="my-3">
                <label className="block text-white">
                  Expected Annual Return (%):{" "}
                </label>
                <input
                  type="number"
                  value={expectedAnnualReturn}
                  onChange={(e) =>
                    setExpectedAnnualReturn(parseFloat(e.target.value))
                  }
                  className=" p-2 rounded w-full bg-gray-600 text-white"
                />
              </div>
              <div className="my-3">
                <label className="block text-white">Years: </label>
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(parseFloat(e.target.value))}
                  className=" p-2 rounded w-full bg-gray-600 text-white"
                />
              </div>
              <button
                onClick={calculateSIP}
                className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
              >
                Calculate SIP
              </button>
              <div className="my-3">
                <label className="block text-white">Expected Amount: </label>
                <input
                  type="text"
                  value={expectedAmount}
                  readOnly
                  className=" p-2 rounded w-full bg-gray-600 text-white"
                />
              </div>
              <div className="my-3">
                <label className="block text-white">Amount Invested: </label>
                <input
                  type="text"
                  value={amountInvested}
                  readOnly
                  className=" p-2 rounded w-full bg-gray-600 text-white"
                />
              </div>
              <div className="my-3">
                <label className="block text-white">Wealth Gain: </label>
                <input
                  type="text"
                  value={wealthGain}
                  readOnly
                  className=" p-2 rounded w-full bg-gray-600 text-white"
                />
              </div>
            </div>


            
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Calculators;
