import { useState } from "react"
import { getCountryCode } from "../constants/countryCodes"

export default function useFetch() {

    const [isLoading, setIsLoading] = useState(false)


    const API_URL = `http://api.geonames.org/searchJSON?`

    /*
    *  Builds the searchURL sent to the API for either Country and City with the requested query corresponding to placename
    */




    const buildUrl = (query: string, type: string): string | undefined => {
        const USR_NAME = `weknowit`
        if (type === "city") {
            return `${API_URL}name_equals=${query}&maxRows=10&featureCode=PPLA&featureCode=PPLC&username=${USR_NAME}`
        }
        else {
            const cc: string | undefined = getCountryCode(query.toLowerCase())
            if (cc) return `${API_URL}q=${query}&country=${cc}&orderby=population&maxRows=10&featureClass=P&username=${USR_NAME}`
            return undefined
        }
    }


    function get<TResponse>(url: string): Promise<TResponse[]> {
        setIsLoading(true)
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (!data) {
                        return reject(data)
                    }

                    resolve(data.geonames as TResponse[])
                })
                .catch(error => {
                    reject(error)
                })
                .finally(() => setIsLoading(false))
        })
    }

    return { get, buildUrl, isLoading }
}