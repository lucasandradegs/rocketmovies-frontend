import { Container } from "./styles";

export function Tag({title, colored = false, ...rest}) {
    return (
        <Container {...rest}
            $colored={colored}
        >
            {title}
        </Container>
    )
}