import React from 'react';
import { Container, Button, Icon } from 'nes-react';
import avatar from './Images/lando.png';

class ComponenteClasse extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showInfo: true
        }
    }

    handleClick () {
        this.setState({...this.state, showInfo: !this.state.showInfo});
    }

    render () {
        return (
            <div className="component-box">
                <Container centered rounded dark>
                    <img src={avatar} style={{width: '40%'}} />
                    {
                        this.state.showInfo && 
                        <div>
                            <p>Lando</p>
                            <p>Contrabandista Apostador</p>
                            <Icon icon='star'></Icon>
                            <Icon icon='star'></Icon>
                            <Icon icon='star' half></Icon>
                        </div>
                    }
                    <Button onClick={()=>this.handleClick()}>
                        {
                            this.state.showInfo ? 'Esconder' : 'Mostrar'
                        } 
                        info</Button>
                </Container>
            </div>
        );
    }
}

export default ComponenteClasse;