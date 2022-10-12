import { Link } from 'react-router-dom';
import Button from '../../reusable/Button';
import styled from 'styled-components';

export default function SliderButton() {
    return (
        <Link to='zamow-do-domu'>
            <Button type='button' content='Zamów do domu' />
        </Link>
    );
}