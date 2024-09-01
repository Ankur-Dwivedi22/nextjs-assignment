"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const TenantLogin = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [contracts, setContracts] = useState([]);
  const [tenantEmail, setTenantEmail] = useState("");
  const [filteredContracts, setFilteredContracts] = useState([]);

  const getContracts = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/contracts");
      const data = await response.json();
      setContracts(data.result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getContracts();
  }, []);

  const handleSearch = async () => {
    if (tenantEmail) {
      const filtered = contracts.filter(
        (contract) => contract.tenantEmail === tenantEmail
      );
      setFilteredContracts(filtered);
      setShow(true);
    } else {
      setShow(true);
      setFilteredContracts([]);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-10 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Tenant Dashboard</h1>
      <input
        type="email"
        value={tenantEmail}
        onChange={(event) => setTenantEmail(event.target.value)}
        placeholder="Enter your email"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
        onClick={handleSearch}
      >
        Search Contracts
      </button>
      {filteredContracts.length > 0 ? (
        <ul className="space-y-4">
          {filteredContracts.map((contract, index) => (
            <li key={index} className="py-4 border-b border-gray-200">
              <h2 className="text-lg font-bold">Contract {index + 1}</h2>
              <ul>
                <li>Property Address: {contract.propertyAddress}</li>
                <li>Rent Amount: {contract.rentAmount}</li>
                <li>Start Date: {contract.startDate}</li>
                <li>End Date: {contract.endDate}</li>
                <li>Tenant Email: {contract.tenantEmail}</li>
                <li>Status: {contract.status}</li>
              </ul>
              {contract.status === "Accepted" ? (
                <p>Contract Already Accepted</p>
              ) : (
                <Link href={`/tenantLogin/${contract._id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                    Accept Contract
                  </button>
                </Link>
              )}
            </li>
          ))}
        </ul>
      ) : (
        show && (
          <div>
            <p className="text-red-500 text-lg font-bold mb-4 mt-5">
              No contracts found !!!
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default TenantLogin;
