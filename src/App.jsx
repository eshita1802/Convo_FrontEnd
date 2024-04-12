import FilterDropdown from "./Filters"
import Upload from "./Upload"


function App() {
  const columns=  [ 'Admission No.', 'Branch', 'CGPA'];//Add other columns

  return (
    <>
      <Upload/>
       <FilterDropdown columns = {columns}/> 
    </>
  )
}

export default App
