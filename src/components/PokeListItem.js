import { Button } from 'reactstrap';

import './PokeListItem.css';

export default function PokeListItem(props) {
    const { item } = props;

    return(
        <div className="poke-list-item">
            <div className='poke-img'>
                <img src={item.sprites.front_default} alt=''/>
            </div>
            <div className="poke-name"> { item.name } </div>
            <Button color="primary" className="btn-view"> View </Button>
        </div>
    );
}