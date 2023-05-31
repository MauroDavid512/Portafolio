import React from "react";
import './Portfolio.css'

function Portfolio() {

    let content = [
        {
            title: "SAP Pokemon",
            link: "https://pokemonapimauro-psi.vercel.app/",
            image: "",
            description: ""
        },
        {
            title: "La Reserva",
            link: "https://la-reserva.vercel.app/",
            image: "",
            description: ""
        },
        {
            title: "Liga Mendocina de improvisación",
            link: "https://lmi-frontt.vercel.app/",
            image: "",
            description: ""
        },
        {
            title: "Vero Calderón Portfolio",
            link: "https://verocalderon.vercel.app/",
            image: "",
            description: ""
        }
    ]

    return (
        <div >
            Portfolio:

            <div className="cardcontainer">
                {content.map(e => {
                    return (

                        <a className="card" target="_blank" href={e.link}>

                                <img className="cardimg" src={e.image} alt={e.title} />
                                <div className="cardtitle" >{e.title}</div>

                        </a>
                    )
                })}
            </div>
        </div>
    );
}

export default Portfolio;