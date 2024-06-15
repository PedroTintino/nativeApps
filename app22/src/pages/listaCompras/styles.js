import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  editText: {
    color: 'blue',
    marginRight: 10,
  },
  deleteText: {
    color: 'red',
  },
  emptyText: {
    alignSelf: 'center',
    marginTop: 20,
    fontStyle: 'italic',
    color: '#999',
  },
});