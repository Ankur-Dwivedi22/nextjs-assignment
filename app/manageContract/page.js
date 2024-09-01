"use client"
import { useState, useEffect } from "react";

async function getContracts() {
  let data = await fetch("http://localhost:3000/api/contracts");
  data = await data.json();
  return data.result;
}

export default function ManageContract() {
  const [show, setShow] = useState(false);
  const [contracts, setContracts] = useState([]);

  async function handleSubmit() {
    const contracts = await getContracts();
    console.log(contracts);
    setContracts(contracts);
    setShow(true);
  }

  return (
    <div className="max-w-md mx-auto p-4 mt-10 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Manage Contracts</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSubmit}
      >
        Show all contracts
      </button>
      {show ? (
        <>
          <h1>Hello</h1>
          <ul className="space-y-4">
            {contracts.map((contract, index) => (
              <li key={index} className="py-4 border-b border-gray-200">
                <h2 className="text-lg font-bold">Contract {index + 1}</h2>
                <ul>
                  <li>Property Address: {contract.propertyAddress}</li>
                  <li>Rent Amount: {contract.rentAmount}</li>
                  <li>Start Date: {contract.startDate}</li>
                  <li>End Date: {contract.endDate}</li>
                  <li>
                    <h3>Tenant Details:</h3>
                    <ul>
                      <li>Tenant Email: {contract.tenantEmail}</li>
                      <li>First Name: {contract.firstName}</li>
                      <li>Middle Name: {contract.middleName}</li>
                      <li>Last Name: {contract.lastName}</li>
                      <li>DOB: {contract.dob}</li>
                      <li>Job Title: {contract.jobTitle}</li>
                      <li>Annual Income: {contract.annualIncome}</li>
                      <li>Status: {contract.status}</li>
                    </ul>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}