import react from 'react'; 
import styled from 'styled-components';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

import { Text } from '../../../../components/typography/text.component';
import { DefaultRow, Row } from './row-info-component';

const Container = styled.View`
    flex-direction: col;
    margin-top: ${(props) => props.theme.space[4]}; 
    padding: ${(props) => props.theme.space[4]}; 
`; 

const Header = styled.View`
    flex-direction: row; 
    align-items: center; 
    justify-content: space-between; 
`; 

const HeaderLeft = styled.View`
    flex-direction: row; 
    align-items: center; 
    justify-content: space-between; 
`; 

const Button = styled.TouchableOpacity`

`; 

const Icon = styled(Ionicons)`
    color: ${(props) => props.theme.colors.icon.primary}; 
`;

const Label = styled.View`
    flex-direction: row; 
    margin-top: ${(props) => props.theme.space[4]}; 
    border-bottom-width: ${StyleSheet.hairlineWidth}px; 
    border-color: ${(props) => props.theme.colors.icon.primary}; 
`;

const Title = styled(Text)`
    margin-left: ${(props) => props.theme.space[7]}
`;

export const Exercise = ({ exercise = { } }) => {

    const sets = [1, 2, 3, 4, 5];

    const { 
        name="Rope Pushdown",
        PR=[135, 10],
    } = exercise; 

    return(
        <Container> 
            <Header>
                <Button>
                    <HeaderLeft>
                        <Text variant="captionBold">{name}</Text>
                        <Icon name="chevron-forward-outline" size={12}/>
                    </HeaderLeft>
                </Button>
                <Button>
                    <Icon name="timer-outline" size={12} />
                </Button>
            </Header>
            
            <Label>
                <Text variant="caption">SET</Text>
                <Title variant="caption">ACHIEVED</Title>
            </Label>

            {
                sets.map((index) => {
                    return(
                        <Row key={index} set={index} />
                    )
                })
            }
            <DefaultRow />

        </Container>
    )
}