import { Badge, Button } from 'reactstrap';

import './PokeListItem.css';

export default function PokeListItem(props) {
    const { item } = props;

    return(
        <div className="poke-list-item">
            <div className='poke-img'>
                <img src={item.sprites.front_default} alt=''/>
            </div>
            <div className="poke-info">
                <div className="poke-name mb-2"> { item.name } </div>
                <div>
                    <Badge color="success" pill> { item.types[0].type.name } </Badge>
                </div>
            </div>
            <Button color="success" className="btn-view" outline> View </Button>
        </div>
    );
}