import './Tile.css'

function Tile (props) {
    let backgroundColor = "white"
    let textColor = "white"

    if (props.darkMode == true) {
        backgroundColor = "black"
        textColor = "white"
    } 
    return (
        <div className='tile-body'>
            <div className='tile-title'>
                <div className='tile-title-first-line'>{props.firstLine}</div>
                <div className='tile-title-second-line'>{props.secondLine}</div>
            </div>
            <div className='tile-description'>
                Artificial Intelligence is really cool
            </div>
        </div>
    )
}

export default Tile