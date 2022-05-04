import { useState } from "react"
import { getCountryCode } from "../constants/countryCodes"

export default function useFetch() {

    const [isLoading, setIsLoading] = useState(false)


    const API_URL = `http://api.geonames.org/searchJSON?`

    function spacesToDash(s: string): string {
        return s.replace(/\s+/g, '-')
    }

    /*
    *  Builds the url for the query sent to the API for either Country and City with the requested query corresponding to placename
    */
    const buildUrl = (query: string, type: string): string | undefined => {
        const USR_NAME = `weknowit`
        const baseUrl = `${API_URL}q=${spacesToDash(query)}&username=${USR_NAME}`
        if (type === "city") {
            return `${baseUrl}&maxRows=10`
        }
        else {
            const cc: string | undefined = getCountryCode(query.toLowerCase())
            if (cc) return `${baseUrl}&country=${cc}&orderby=population&maxRows=10&featureClass=P`
            return undefined
        }
    }

    /**
     * 
     * @param url The url for the request
     * @returns Promise with response from api in array of type
     */

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