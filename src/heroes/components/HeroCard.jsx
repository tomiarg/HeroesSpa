import {  Link } from "react-router-dom"

const CharactersByHero = ({alter_ego, characters}) =>{
    if(characters === alter_ego) return (<></>)
    return(<p>{characters}</p>)
}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    const heroeImgUrl = `/assets/heroes/${id}.jpg`
  return (
    <div className="col">
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4  animate__animated animate__fadeIn">
                    <img className= 'card-img' src={heroeImgUrl} alt={superhero} />

                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">
                            {superhero}
                        </h5>
                        <p className="card-text">
                            {alter_ego}
                        </p>
                        <CharactersByHero alter_ego={alter_ego} characters={characters}/>
                        <p className="card-text">
                            <small className="text-muted">{first_appearance}</small>
                        </p>
                        <Link to={`/hero/${id}`}>
                            mas...
                        </Link>
                        
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}
