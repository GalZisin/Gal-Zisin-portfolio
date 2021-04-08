import React from 'react'

class Skills extends React.Component {

    render() {
        return (
            <section className="skills" id="skills">
                <div className="max-width">
                    <h2 className="title">My skills</h2>
                    <div className="skills-content">
                        <div className="card">
                            <div className="box">
                                <div className="set">
                                    <i className="fas fa-globe"></i>
                                    <div className="text">Front End Development</div>
                                    <div className="list1">
                                        <label htmlFor="" style={{ marginTop: 10 }}>Html</label>
                                        <i className="fab fa-html5"></i>
                                    </div>
                                    <div className="list1">
                                        <label htmlFor="" style={{ marginTop: 10 }}>CSS</label>
                                        <i className="fab fa-css3-alt"></i>
                                    </div>
                                    <div className="list1">
                                        <label htmlFor="" style={{ marginTop: 10 }}>JavaScript</label>
                                        <i className="fab fa-js"></i>
                                    </div>
                                    <div className="list1">
                                        <label htmlFor="" style={{ marginTop: 10 }}>React.js</label>
                                        <i className="fab fa-react"></i>
                                    </div>
                                    <div className="list1">
                                        <label htmlFor="" style={{ marginTop: 10 }}>Angular</label>
                                        <i className="fab fa-angular"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <div className="set">
                                    <i className="fas fa-tools"></i>
                                    <div className="text">Back End Development</div>
                                    <div className="list1  mb-1">
                                        <label htmlFor="">.NET C#</label>
                                        <i className="fab fa-windows"></i>
                                    </div>
                                    <div className="list1 mb-1">
                                        <label htmlFor="">.NET</label>
                                    </div>
                                    <div className="list1">
                                        <label htmlFor="">WIN/WEB</label>
                                    </div>
                                    <div className="list1 mb-1">
                                        <label htmlFor="">Java</label>
                                        <i className="fab fa-java"></i>
                                    </div>
                                    <div className="list1">
                                        <label htmlFor="">Spring</label>

                                    </div>
                                    <div className="list1">
                                        <label htmlFor="">Hibernate</label>

                                    </div>
                                    <div className="list1">
                                        <label htmlFor="" style={{ marginTop: 10, marginBottom: 42 }}>Node.js</label>
                                        <i className="fab fa-node-js"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <div className="set" >
                                    <i className="fas fa-database"></i>
                                    <div className="text">Databases & Clouds</div>
                                    <div className="list2">
                                        <label htmlFor="">MSSQL</label>

                                    </div>
                                    <div className="list2">

                                        <label htmlFor="">Oracle</label>

                                    </div>
                                    <div className="list2">
                                        <label htmlFor="">MySQL</label>

                                    </div>
                                    <div className="list2">
                                        <label htmlFor="">MongoDB</label>

                                    </div>
                                    <div className="list2">
                                        <label htmlFor="">Firebase</label>

                                    </div>
                                    <div className="list2">
                                        <label htmlFor="">Azure</label>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Skills