import './App.css'
import Navbar from './component/Navbar'
import MediaCard from './component/MediaCard'
import { Routes, Route} from "react-router-dom"
import DataTable from "./component/DataTable"

function App() {

  return (
    <>
      <Navbar/>
      <br /><br />
      {/* <MediaCard/> */}
      <Routes>
        <Route path="/" element={<MediaCard/>}/>
        <Route path="/t" element={<DataTable/>}/>

      </Routes>
    </>
  )
}

export default App
