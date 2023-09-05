import { AiFillStar } from 'react-icons/ai';
import { Container } from './styles';
import { FiStar } from 'react-icons/fi';

export function Star({ rating = false, ...rest }) {
    return (
        <Container {...rest}
            $rating={rating}
        >
            {rating}
            { rating ? <AiFillStar /> : <FiStar />}
        </Container>
    )
}