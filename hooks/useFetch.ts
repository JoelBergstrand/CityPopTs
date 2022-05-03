import { useState } from "react"

export default function useFetch() {

    const [isLoading, setIsLoading] = useState(false)

    const baseUrl = ""
    function get(url: string) {
        setIsLoading(true)
        return new Promise((resolve, reject) => {
            fetch(baseUrl + url)
                .then(response => response.json())
                .then(data => {
                    if (!data) {
                        return reject(data)
                    }
                    console.log("Fetching", data)
                    resolve(data)
                })
                .catch(error => {
                    reject(error)
                })
                .finally(() => setIsLoading(false))
        })
    }

    return { get, isLoading }
}