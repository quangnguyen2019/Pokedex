import PokeListItem from './PokeListItem';
import './PokeList.css';

export default function PokeList(props) {
    const { pokemons } = props;
    pokemons.sort((a, b) => a.id - b.id);

    return(
        <div className="poke-list">
            { 
                pokemons.map((item, index) => 
                    <PokeListItem item={item} key={index} />
                )
            }
        </div>
    );
}