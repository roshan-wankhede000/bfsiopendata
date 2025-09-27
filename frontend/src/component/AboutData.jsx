import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { InsuranceContext } from '../context/InsuranceContextFile'
import { Tooltip } from "bootstrap";

function AboutData() {
    let { url } = useContext(InsuranceContext)
    let [data, setData] = useState([])

    async function aboutData() {
        try {
            let res = await axios.get(`${url}/get-aboutdata`)
            setData(res.data.data)
        } catch (err) {
            console.error("Error fetching about data:", err)
        }
    }

    useEffect(() => {
        aboutData()
    }, [])

    useEffect(() => {
        const nodes = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        const tooltips = nodes.map(
            (el) =>
                new Tooltip(el, {
                    boundary: document.body,
                    placement: "top",
                    trigger: "hover focus",
                })
        );
        return () => tooltips.forEach((t) => t.dispose());
    }, [data]);

    if (data.length == 0) {
        return (
            <>
                <h1 className='text-danger my-5 d-flex justify-content-center'>No Data Found!...</h1>
            </>
        )
    } else {
        return (
            <>
                <div className="container">
                    <h4 className="text-primary mt-3">
                        By curating and hosting structured data, BFSI OPEN DATA aims to enable better decision-making, support risk management, and inspire new tech-enabled solutions in the BFSI space. Whether you are analyzing trends, building models, or exploring insights, this platform is designed to be your trusted open data resource.
                    </h4>
                    <div className="row my-5">
                        {
                            data.map((item) => (
                                <div className="col-md-2">
                                    <div class="card shadow rounded-3" style={{ maxWidth: '500px' }}>
                                        <div class="card-body">
                                            <div
                                                className="d-flex justify-content-between align-items-start h-100 cursor-pointer"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                data-bs-custom-class="tooltip-rich"
                                                data-bs-title={item.desc} // use data-bs-title (avoids native tooltip)
                                            >
                                                <p class="mb-1">
                                                    {item.desc.length > 70 ? item.desc.substring(0, 70) + "..." : item.desc}<spam className="text-primary">...more</spam>
                                                </p>
                                            </div>

                                            <div class="d-flex gap-2 flex-wrap my-3">
                                                {/* <a href={`${url}/download/${item.csvfile}`} className="btn btn-outline-primary" title="Download File">
                                                    <i className="bi bi-filetype-xlsx"></i> Download
                                                </a> */}
                                                <a href={`${item.csvfilelink}`} className="btn btn-outline-primary" title="Download File" target='_blank'>
                                                    <i className="bi bi-filetype-xlsx"></i> Download
                                                </a> 
                                                
                                            </div>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default AboutData