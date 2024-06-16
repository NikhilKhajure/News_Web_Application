import { createContext, useEffect, useReducer, useState } from "react";
import { API_KEY } from "../key";
const NewsDataContext = createContext({
    HandleHeader: () => { },
    handleHeaderCss: "",
    newsContent: "",
    HandleViewAllSearch: () => { }
});




const NewsDataProvider = ({ children }) => {
    // Handle Header
    const [handleHeaderCss, setHandleHeaderCss] = useState(false);
    const HandleHeader = (value) => {
        setHandleHeaderCss(value);
    }

    // News Data variable
    const [newsContent, setContent] = useState("");




    const [newsName, setNewsName] = useState("dhoni")

    // Handle News Content Name function
    const HandleViewAllSearch = (value) => {
        if (value === "Home") {
            return;
        } else {
            setContent("");
            setNewsName(value);
        }

    }







    // Api Code
    const url = `https://newsapi.org/v2/everything?q=${newsName}&apiKey=${API_KEY}`;

    const fetchData = async (url) => {
        try {
            const res = await fetch(url)
            const data = await res.json()
            setContent(data.articles);


        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [newsName])








    return <NewsDataContext.Provider value={{ handleHeaderCss: handleHeaderCss, HandleHeader: HandleHeader, newsContent: newsContent, HandleViewAllSearch: HandleViewAllSearch }}> {children} </NewsDataContext.Provider>
}
export default NewsDataProvider;
export { NewsDataContext };