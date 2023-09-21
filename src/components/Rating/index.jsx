import { AiFillStar } from 'react-icons/ai';
import { Container } from './styles';
import { FiStar } from 'react-icons/fi';

export function Rating({ rate, details = false }) {
    let stars = []

    for (let count = 1; count <= 5; count++) {
        if (count <= rate) {
            stars.push(<AiFillStar key={count}/>)
        } else {
            stars.push(<FiStar key={count}/>)
        }
    }

    return (
        <Container $details={details}>
            {stars}
        </Container>
    )
}