import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface ButtonProps {
  title: string;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Salve Kraioooo
      </Text>

      <Button title='Send 1'></Button>
      <Button title='Send 1'></Button>
      <Button title='Send 1'></Button>
      <Button title='Send 1'></Button>

      <StatusBar style="auto" />
    </View>
  );
}

function Button(props: ButtonProps) {
  return(
    <TouchableOpacity>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
