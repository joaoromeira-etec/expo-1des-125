import { StyleSheet } from 'react-native'; 
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: { 
            flex: 1,
            padding: RFPercentage(1),   
            alignItems: 'center',
            gap: RFPercentage(3),
        },
        titulo: {
            fontSize: RFPercentage(4.5),
            color: '#650C0C',
            fontWeight: 'bold',
            marginVertical: RFPercentage(1.75),
        }, 
        botao: {
            borderWidth: RFPercentage(0.3),
            padding: RFPercentage(0.5),
            width: '80%',
            alignItems: 'center',
            borderRadius: RFPercentage(1)
        }, 
        txtBotao: {
            fontWeight: 'bold',
            fontSize: RFPercentage(2), 
        },
    }
);  

export default styles;