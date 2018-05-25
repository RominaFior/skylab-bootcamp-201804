import React from "react";


function MainContent(props) {
    if (props.onError) return (<p> User not found</p>);
    
    return (
        <div>
            {!(props.empty) &&
                <section>
                    <h2>Name:{props.info.name}</h2>
                    <img src={props.info.avatar_url} alt="" />
                    <p>e-mail: {props.info.email}</p>
                </section>
            }
           {props.empty && <h2>Insert a valid username and search info</h2>}
        </div>
    )
}
    
    




export default MainContent;