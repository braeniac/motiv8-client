import React, { useState } from 'react'; 
import styled from 'styled-components'; 

//components
import { SafeArea } from '../../../components/utils/safe-area.component'; 
import { Header } from '../../../components/header/header.component'; 
import { MuscleSettingModal } from '../components/muscle-setting-modal.component';

const AnalyticsContainer = styled.View`
    flex: 1; 
    background-color: ${(props) => props.theme.colors.ui.quaternary}
`; 

export const Analytics = () => {

    const [alertVisable, setAlertVisable] = useState(false); 
    const toggleMuscleSettingModal = () => setAlertVisable(!alertVisable); 

    return(
        <SafeArea>
            <AnalyticsContainer>
                <Header title="Analytics" show={true} icon="settings-outline" whenPressed={toggleMuscleSettingModal} />
                
                {
                    (alertVisable) && <MuscleSettingModal  closeModal={toggleMuscleSettingModal} /> 
                }
            
            </AnalyticsContainer>
        </SafeArea>
    )
}