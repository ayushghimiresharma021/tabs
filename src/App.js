import { useEffect, useState } from 'react';
import './App.css';
import { FaAngleDoubleRight} from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [Loading,setLoading] = useState(true)
  const [Data,setData] = useState({})
  const [value,setValue] = useState(0)

  const fetchUrl_action = async() => {
    const response = await fetch(url)
    const items = await response.json()
    setLoading(false)
    setData(items)
  }
  useEffect(() => {
    fetchUrl_action()
  },[])
  if (Loading){
    return (<div className='loading'>
      <h1>Loading...</h1>
    </div>)
  }
  const {company, dates, duties, title} = Data[value]
  return (
    <section className='section'>

    {/* front-page */}
      <div className='title'>
        <h1>Experience</h1>
        <div className='underline'></div>
      </div>



      <div className='jobs-center'>
        <div className='btn-container'>
          {Data.map((item,index) => {
              return (
              <button 
                key={item.id} 
                className={`job-btn ${index===value && 'active-btn'} `}
                onClick={() => setValue(index)}>
                {item.company}
              </button>)
          })}
        </div>
        <article className='job-info'>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className='job-date'>{dates}</p>
            {duties.map((duty,value) =>{
              return (<div key={value}  className='job-desc' >
                        <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                        <p>{duty}</p>
                      </div>)
            } )}
      </article> 
      </div>


      {/*job info */}

      
      
    


    </section>
  )
}

export default App;
