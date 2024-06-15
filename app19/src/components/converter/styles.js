import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#e8f5e9'
  },

  header: {
    fontSize: 30,
    fontWeight: '600',
    color: '#2e7d32',
    marginBottom: 25
  },

  textInput: {
    width: '85%',
    height: 45,
    borderWidth: 1.5,
    borderColor: '#2e7d32',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
    backgroundColor: '#ffffff'
  },

  convertButton: {
    backgroundColor: '#388e3c',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },

  convertButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500'
  },

  conversionResult: {
    marginTop: 25,
    fontSize: 20,
    color: '#2e7d32',
    fontWeight: '600'
  }
});