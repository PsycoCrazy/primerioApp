import { StyleSheet, Text, View, FlatList, _Text } from 'react-native';

import Header from '../../components/Header/Index';
import Balance from '../../components/Balance/Index';
import Movements from '../../components/Movements/Index';
import Actions from '../../components/Actions/Index';

const list = [
  {
    id: 1,
    label: 'Boleto conta Luz',
    value: '390,90',
    date: '17/09/2022',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '2.500,00',
    date: '20/09/2022',
    type: 1 //despesas
  },
  {
    id: 3,
    label: 'Salário',
    value: '7.200,00',
    date: '22/09/2022',
    type: 1 //despesas
  },
]

export default function Host(){
  return (
    <View style={styles.container}>
      <Header name="Welington Santos" />

      <Balance saldo="9.250,90" gastos="-527,00"/>

      <Actions/>

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id) }
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => <Text><Movements data={item}/></Text>}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});
