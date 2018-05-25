import React from "react";


function MainContent(props) {
    
    
    return (
        <div className="infousers">
            {(props.userInfo) &&
                <section>
                    <h2>Name:{props.userInfo.name}</h2>
                    <img src={props.userInfo.avatar_url} alt="" />
                    <p>followers: {props.userInfo.followers}</p>
                    <p>following: {props.userInfo.following}</p>
                </section>
            }
            
        </div>
    )
}
    
    




export default MainContent;