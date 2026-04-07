import { useState } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';

export default function App() {
  const [dados, setDados] = useState([
    { id: '1', nome: 'Item 1' },
    { id: '2', nome: 'Item 2' }
  ]);

  function deletarItem(id) {
    setDados((prevDados) => prevDados.filter(item => item.id !== id));
  }

  return (
    <FlatList
      data={dados}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => deletarItem(item.id)}>
          <View
            style={{
              padding: 10,
              margin: 5,
              backgroundColor: '#ddd'
            }}
          >
            <Text>{item.nome}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}