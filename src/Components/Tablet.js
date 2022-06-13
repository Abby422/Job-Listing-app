import React, { useContext, useState } from 'react'
import { tabletContext } from "../context/tablets";



function Tablet({company}) {
  const {search, setSearch} = useContext(tabletContext)
  const [jobs, setJobs] = useState(company)
  const tools = jobs.tools
  const language = jobs.languages
  const New = jobs.new
  const Featured = jobs.featured
    function handleLanguages(lang){
        const searchIncludes = search.find(value => value === lang) 
        if(!searchIncludes){
             setSearch([...search, lang]);
  
        }
        search.map(value => {
               return jobs.filter(data => data.languages === value)
            })
}
  return (
    <>
    <div className='card' key={jobs.id}>
          <div className='container'>
              <div className='container1'>
                  <div>
                      <img src={jobs.logo} alt='profile' className='profile-image' />
                  </div>
                  <div>
                      <div className='company-card-name'>
                          <div className='jobs-name'>
                              <p> {jobs.jobs}</p>
                          </div>
                          {New && <div className='company-job-decription'>
                              NEW!
                          </div>}
                          {Featured && <div className='company-job-decription2'>
                              FEATURED
                          </div>}
                      </div>
                      <div className='job-title'>
                          <p>
                              <strong>{jobs.position}</strong>
                          </p>
                      </div>
                      <div className='company-card-main'>
                          <div className='day-posted'>
                              <p> {jobs.postedAt}</p>
                          </div>

                          <ul className='company-specification-list'>
                              <li className='full-time'>{jobs.contract}</li>
                              <li className='full-time'>{jobs.location}</li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className='container2'>
                  <hr />
                  <div className="card-footer">
                      <div className='filtered-description' key={jobs.role} onClick={() => handleLanguages(jobs.role)}>{jobs.role}</div>
                      <div className='filtered-description' key={jobs.level} onClick={() => handleLanguages(jobs.level)}> {jobs.level}</div>
                      {language.map((languages, index) => 
                      (<div className='filtered-description' key={index} onClick={() => handleLanguages(languages)}>{languages}</div>)
                      )}
                      {tools.map(tool => 
                      (<p className='filtered-description'onClick={() =>handleLanguages(tool)}>{tool}</p>)
                      )}
                  </div>
              </div>
          </div>
    </div>
    </>
  )
}

export default Tablet