import { CircleCheck } from "lucide-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TaskCard = ({ title, desc, status, onClick }) => {
    return (
        <View style={styles.card}>
            <view style={styles.header}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <CircleCheck color="green" size={32} />
            </view>
            <Text style={styles.description}>{desc}</Text>
            <TouchableOpacity style = {styles.button} onPress={onClick}>
                <Text style={styles.buttonText}>
                     {status === "Done" ? 'Deletar' : check} 
                </Text>
            </TouchableOpacity>
        </View>)
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,   
        marginVertical: 10
    },
        header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    title: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#333'
    },
    status: {
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginBotton: 10
    },
    button: {
        backGroundColor: '#d33f49',
        paddingVertical: 10,
        borderRadius: 6,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default TaskCard; 
