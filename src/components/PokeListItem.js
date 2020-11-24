import { Badge } from 'reactstrap';
import { Link } from 'react-router-dom';

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
                    {
                        item.types.map((value, index) => {
                            return (
                                <Badge color="success" pill className="mr-1" key={index}> 
                                    { value.type.name }
                                </Badge>
                            );
                        })
                    }
                </div>
            </div>

            <Link 
                className="btn btn-view btn-outline-success" 
                to={`/pokemon/${item.id}`}
            > 
                View 
            </Link>
        </div>
    );
}