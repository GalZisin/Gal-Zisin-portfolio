/* eslint-disable no-lone-blocks */
import React from 'react'

class Portfolio extends React.Component {

    render() {
        return (
            <section className="portfolio" id="portfolio">
                <div className="max-width">
                    <h2 className="title">Portfolio</h2>
                    <div className="container">
                        <div className="row">
                            <div className="card">
                                <div className="content">
                                    <div className="img">
                                        <img src="images/Reactjs-crud-application.png" style={{ height: 157 }} alt="" />
                                    </div>
                                    <div className="details">
                                        <div className="name pb-1">React.js + Node.js + TypeScript + Redux + mongoDB - CRUD application with login implementaion</div>
                                    </div>
                                    <div className="media-icons">
                                        {/* <a href="https://github.com/GalZisin/Todolist-CRUD-app" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a> */}
                                        <a href="https://github.com/GalZisin/CountDownPage" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                                    </div>
                                    {/* <a href="https://tasks-crud-app-gz.herokuapp.com/" className="btn" rel="noreferrer" target="_blank">View Project</a> */}
                                    <a href="https://countdownpage.herokuapp.com/" className="btn" rel="noreferrer" target="_blank">View Project</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="content">
                                    <div className="img">
                                        <img src="images/Reactjs-TodoList.png" alt="" />
                                    </div>
                                    <div className="details">
                                        <div className="name pb-2">React.js + Redux + TypeScript + redux-localstorage-simple - TodoList application with filter options</div>
                                    </div>
                                    <div className="media-icons">
                                        <a href="https://github.com/GalZisin/TodoList-React-Typescript" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                                    </div>
                                    <a href="https://todolist-react-typescript.herokuapp.com/" className="btn" rel="noreferrer" target="_blank">View Project</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="content">
                                    <div className="img">
                                        <img src="images/Angular-Calendar with task saving by date.png" style={{ height: 157 }} alt="" />
                                    </div>
                                    <div className="details">
                                        <div className="name pb-3">Angular11 + Firebase - Calendar organizer application</div>
                                    </div>
                                    <div className="media-icons">
                                        <a href="https://github.com/GalZisin/angular11-organizer" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                                    </div>
                                    <a href="https://angular11-calendar-organizer.herokuapp.com/" className="btn" rel="noreferrer" target="_blank">View Project</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="content">
                                    <div className="img">
                                        <img src="images/GZPortfolio.png" style={{ height: 157 }} alt="" />
                                    </div>
                                    <div className="details">
                                        <div className="name pb-4">React.js - portfolio site</div>
                                    </div>
                                    <div className="media-icons">
                                        <a href="https://github.com/GalZisin/Gal-Zisin-portfolio" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                                    </div>
                                    <a href="https://gal-zisin-portfolio.herokuapp.com/" className="btn" rel="noreferrer" target="_blank">View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}
export default Portfolio





