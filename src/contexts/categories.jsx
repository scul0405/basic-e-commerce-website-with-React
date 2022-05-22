import { createContext, useEffect, useState} from 'react'
import { getCategoriesAndDocument } from '../utilities/firebase/firebase.js'

export const CategoriesContext = createContext({
  categoriesMap: {}
})

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    useEffect(() => {
      const getCategoriesMap = async () => {
        const categoryMap = await getCategoriesAndDocument();
        setCategoriesMap(categoryMap);
      }
      getCategoriesMap();
    },[])
    const value = {categoriesMap}
  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  )
}

