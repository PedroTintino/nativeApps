import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15, 
    backgroundColor: '#f5f5f5' 
  },

  title: {
    fontSize: 26, 
    fontWeight: '600', 
    color: '#FF0000', 
    marginBottom: 15 
  },

  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#bbb', 
    borderRadius: 5, 
    paddingHorizontal: 12, 
    marginBottom: 15 
  },

  button: {
    backgroundColor: '#28a745', 
    paddingVertical: 12, 
    paddingHorizontal: 25,
    borderRadius: 8, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  },

  buttonText: {
    color: '#fff', 
    fontSize: 15, 
    fontWeight: '600' 
  },

  resultado: {
    marginTop: 15, 
    fontSize: 16, 
    color: '#28a745' 
  }
});
