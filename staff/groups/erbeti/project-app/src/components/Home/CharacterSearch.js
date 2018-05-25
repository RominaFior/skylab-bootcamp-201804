import React, { Component } from 'react'
import logic from '../../logic'
import './home.css'

function CharacterSearch(props) {


    return (

        <section>
            {
                (props.list.length > 0) &&
                <h1 className="h1Title" >Characters found</h1>
            }
            <div className="ulList">
                {
                    props.list.map(function (key) {
                        return (
                            <a href={key.urls[0].url} target="_blank">
                                <div className="card">
                                    <img src={key.thumbnail.path + "." + key.thumbnail.extension} />
                                    <h3> {key.name} </h3>

                                    <p>{key.description}</p>


                                </div>
                            </a>
                        )
                    })}

            </div>
        </section>



    )



}


export default CharacterSearch;

