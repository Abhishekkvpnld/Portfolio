import React, { useEffect, useState } from 'react'
import { ProjectsData } from './Data'
import { projectNav } from './Data'
import './ProjectsPagination.css'
import WorksItems from './WorksItems'

function Works() {

    const [item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;

    useEffect(() => {
        if (item.name === 'all') {
            setProjects(ProjectsData)
        } else {
            const newProjects = ProjectsData.filter((project) => {
                return project.category.toLowerCase() === item.name;
            })
            setProjects(newProjects);
        }
        setCurrentPage(1); // Reset to page 1 on filter change
    }, [item])

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index)
    }

    // Pagination Logic
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="work_filters">
                {
                    projectNav.map((item, index) => {
                        return (
                            <span onClick={(e) => { handleClick(e, index) }} className={`${active === index ? 'active-work' : ''} work_item`} key={index}>{item.name}</span>
                        )
                    })
                }
            </div>

            <div className="work_container container grid">
                {
                    currentProjects.map((item) => {
                        return <WorksItems item={item} key={item.id} />
                    })
                }
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="work_pagination">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <span
                            key={i + 1}
                            onClick={() => paginate(i + 1)}
                            className={`work_page-item ${currentPage === i + 1 ? 'work_active-page' : ''}`}
                        >
                            {i + 1}
                        </span>
                    ))}
                </div>
            )}
        </div>
    )
};

export default Works;