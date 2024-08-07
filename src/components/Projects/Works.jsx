import React, { useEffect, useState } from 'react'
import { ProjectsData } from './Data'
import { projectNav } from './Data'
import WorksItems from './WorksItems'

function Works() {

    const [item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0)

    useEffect(() => {
        if (item.name === 'all') {
            setProjects(ProjectsData)
        } else {
            const newProjects = ProjectsData.filter((project) => {
                return project.category.toLowerCase() === item.name;
            })
            setProjects(newProjects);
        }
    }, [item])

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index)
    }

    return (
        <div> 
            <div className="work_filters">
                {
                    projectNav.map((item, index) => {
                        return (
                            <span onClick={(e) => { handleClick(e, index) }} className={`${active === index ? 'active-work' : 'non-active'} btn btn-secondary`} key={index}>{item.name}</span>
                        )
                    })
                }
            </div>

            <div className="work_container container grid">
                {
                    projects.map((item) => {
                        return <WorksItems item={item} key={item.id} />
                    })
                }
            </div>
        </div>
    )
};

export default Works;