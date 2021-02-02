import Reat, {useState, useEffect} from 'react';
import { Container, Button, Icon } from 'nes-react';
import avatar from './Images/lando.png';

const ComponenteFuncao = () => {
    const [showInfo, setShowInfo] = useState();

    useEffect(()=>{
        setShowInfo(true);
    }, [])

    return (
        <div className='component-box'>
            <Container centered rounded dark>
                <img
                src={avatar} style={{width: '40%'}} />
                {
                    showInfo &&
                    <div style={{marginTop: '40px'}}>
                        <p className="title">Lando</p>
                        <p>Contrabandista Apostador</p>
                        <Icon icon='star'></Icon>
                        <Icon icon='star'></Icon>
                        <Icon icon='star' half></Icon>
                    </div>
                }
            <Button onClick={() => setShowInfo(!showInfo)}>
                {
                    showInfo ? 'Esconder' : 'Mostrar'
                } info</Button>
            </Container>
        </div>
    );
}

export default ComponenteFuncao;