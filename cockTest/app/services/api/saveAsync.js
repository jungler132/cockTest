
import AsyncStorage from '@react-native-async-storage/async-storage'

const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('RECIPES_KEY', jsonValue)
    } catch (e) {
    }
  }

  export default storeData;