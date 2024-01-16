import React, { useState, useEffect } from "react";
// Create a simple Reac tapp that displays a list of countries and their capitals
// Should have following features

//1 Fetch countries and capitals from API
//2 Display list in `CountriesPage`
//3 Each country should be displayed in a separate component
//4 User should be able to filer the list by capital

import Select from "@/components/ui/Select"; // pre-built select instead of building your own html select

// to fetch all countries, use `/all` endpoint.

const BASE_URL = "https://restcountries.com/v3.1"

// to filter by capital city, use the `/capital/{capital}` endpoint

const FILTERABLE_CAPITALS = [
    `Tallinn`,
    `Helinski`,
    `Stockholm`,
    `Oslo`,
    `Copenhagen`,
    `Reykjavik`
] as const;

type Capital = (typeof FILTERABLE_CAPITALS)[number]; //helper function for the filterable capitals

interface Country { //useful interface for Country
    name: {
        common: string
    };
    capital: string;
}

interface CountryCardProps { //usually, all components that receive props have their own interface which is the name of the component PLUS props
    country: Country
}

const CountryCard = ({country}: CountryCardProps) => { //CountryCard is a better name than country. more descriptive.

//({country} : Country  WILL NOT WORK because on the right it's a type Country , but on the left you're giving it an object (with a country property. Mismatch. one fix - separate interface.)

    return (
        <div style={{border:"1px solid black", margin:"10px"}}>
            <p>{country.name.common}</p>
            <p>{country.capital}</p>
        </div>
    )
}

const CountriesPage = () => {
    const [countries, setCountries] = useState<Country[]>([]) //need state for our countries
    const [capital, setCapital] = useState<Capital>() //ensures that this state variable can ever be used with one of the values that capital has

    useEffect(() => {
        const fetchData = async () => {
            const url = capital 
            ? `${BASE_URL}/capital/${capital}` 
            : `${BASE_URL}/all`; //in the interests of not repeating code
            const data = await fetch(url)
            const parsedData = await data.json()
            setCountries(parsedData)
        }

        fetchData();
    }, [capital])

    //fetchData is defined INSIDE of the useEffect, not outside, and that's because if you defined it outside, we'd have to pass it to the dependency array and it would trigger the re-render endlessly infinite loop. ALSO you need a function to await stuff.

    //function no longer needed with interviewer's solution
    // const handleChange = (value: string) => { //we dont receive an event we receive the value directly (by nature of custom <Select>)
    //     // const fetchData = async () => {
    //     //     const data = await fetch(`${BASE_URL}/capital/${value}`)
    //     //     const parsedData = await data.json()
    //     //     setCapital(parsedData)
    //     // }
    //     // fetchData()

    //     // EASIER SOLUTION FROM INTERVIEWER:
    //     setCapital(value as Capital); // it can't just be `value` because we want it to be certain strings (the ones in FILTERABLE_CAPITALS)
    // }

    return (
        <div>
            <div className="p-4">
                React Interview
            </div>
            {/* The remaining challenge, filtering, will be commented out because the Select component code was never shown */}
            {/* 
            <Select onChange={value => setCapital(value as Capital)} placeholder="Select a capital">
                // <Select.Option value="">All</Select.Option>
                {FILTERABLE_CAPITALS.map((capital) => {
                    return 
                        <Select.Option key={capital} value={capital}>
                            {capital}
                        </Select.Option>
                })}
            </Select>    
            */}
            <div>
                {countries.map((country,index) => {
                    return <CountryCard key={country.name.common} country={country} />
                })}
                {/* index as a key is important because react will complain if there's no key. The reason for that is for react needs it to make sense of each paragraph and associate it with a unique id.
                
                HOWEVER - if the countries change - ie you filter them, indexes then change. 250 -> 50 countries. All of the indexes/keys will be different. React will not know which ones are the same which ones are different. React will destroy them all and rebuild - defeats purpose of a key.

                easy fix ! use something else for the key. in this case the country NAME. no two countries have the same name
                */}
            </div>
            {/* <table>
                <tr>
                    <td>Country Name</td>
                    <td>Capital</td>
                </tr>
                {countries.map((country, index) => (
                    <tr key={index}>
                        <td>{country.name.common}</td>
                        <td>{country.capital}</td>
                    </tr>
                ))}
            </table> */}
        </div>
    );
}

export default CountriesPage
