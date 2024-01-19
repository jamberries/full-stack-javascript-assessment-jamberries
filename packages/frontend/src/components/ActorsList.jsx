import Item from './ListItem';
import ImageList from '@mui/material/ImageList';

function ActorsList(props) {
    return (
        <ImageList cols={5}>
            {props.actors.map(actor => 
                <Item
                    key={actor._id} 
                    item={actor}
                    title={actor.name}
                    cardClassName="actorCard" 
                    textCardClass="actorTitle"
                    link={`/actors/${actor.tmdb_id}`}
                    image={`https://media.themoviedb.org/t/p/w138_and_h175_face/${actor.poster_path}`}
                />
             )}
        </ImageList>
    )
}

export default ActorsList;