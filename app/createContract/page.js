"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateContract() {
  const router = useRouter();

  const [propertyAddress, setPropertyAddress] = useState("");
  const [rentAmount, setRentAmount] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [tenantEmail, setTenantEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [annualIncome, setAnnualIncome] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted:", {
      propertyAddress,
      rentAmount,
      startDate,
      endDate,
      tenantEmail,
      firstName,
      middleName,
      lastName,
      dob,
      jobTitle,
      annualIncome,
      status,
    });

    const contractData = {
      propertyAddress: propertyAddress || "Not Provided",
      rentAmount: rentAmount || 0,
      startDate: startDate || new Date(),
      endDate: endDate || new Date(),
      tenantEmail: tenantEmail || "not-provided@example.com",
      firstName: firstName || "None",
      middleName: middleName || "None",
      lastName: lastName || "None",
      dob: dob || "None",
      jobTitle: jobTitle || "None",
      annualIncome: annualIncome || "None",
      status: status || "Not Accepted",
    };

    let result = await fetch("http://localhost:3000/api/contracts", {
      method: "POST",
      body: JSON.stringify(contractData),
    });

    result = await result.json();

    if (result.success) {
      alert("Contract Created");
      router.push("/ownerLogin");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-10 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Create New Contract</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="propertyAddress"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Property Address:
          </label>
          <input
            type="text"
            id="propertyAddress"
            value={propertyAddress}
            onChange={(event) => setPropertyAddress(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="rentAmount"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Rent Amount:
          </label>
          <input
            type="number"
            id="rentAmount"
            value={rentAmount}
            onChange={(event) => setRentAmount(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="startDate"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Start Date:
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="endDate"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            End Date:
          </label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="tenantEmail"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Tenant Email:
          </label>
          <input
            type="email"
            id="tenantEmail"
            value={tenantEmail}
            onChange={(event) => setTenantEmail(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="middleName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Middle Name:
          </label>
          <input
            type="text"
            id="middleName"
            value={middleName}
            onChange={(event) => setMiddleName(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="dob"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Date of Birth:
          </label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(event) => setDob(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="jobTitle"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Job Title:
          </label>
          <input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={(event) => setJobTitle(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="annualIncome"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Annual Income:
          </label>
          <input
            type="number"
            id="annualIncome"
            value={annualIncome}
            onChange={(event) => setAnnualIncome(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="status"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Status:
          </label>
          <input
            type="text"
            id="status"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Contract
        </button>
      </form>
    </div>
  );
}
