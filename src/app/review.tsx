import { useLocalSearchParams, useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ReviewScreen() {
    const router = useRouter();
    const { userName, email, phoneNumber } = useLocalSearchParams<{ userName?: string; email?: string; phoneNumber?: string }>();
    const handleConfirm = (): void => {
        router.push({
            pathname: '/success',
            params: { userName },
        });
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Review Your Details</Text>
            <View style={styles.card}>
                <Text>Username: {userName}</Text>
                <Text>Email: {email || 'Not provided'}</Text>
                <Text>Phone Number: {phoneNumber || 'Not provided'}</Text>
            </View>
            
            <View style={styles.buttonContainer}>
                <Button title="Edit Info" color="red" onPress={() => router.back()} />
                    <Button title="Confirm and Submit" onPress={handleConfirm} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center' as const,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold' as const,
        marginBottom: 20,
        textAlign: 'center' as const,
    },
    card: {
        backgroundColor: '#f9f9f9',
        padding: 20,
        borderRadius: 8,
        marginBottom: 20,
    },
    detail: {
        fontSize: 16,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row'as const,
        justifyContent: 'space-between' as const,
    },
});