import { Badge } from 'react-bootstrap';

const Tags = ({text, bgColor }) => {
    return <Badge bg={bgColor} className='tag'>{text}</Badge>;
}

export default Tags;