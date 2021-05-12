import AsyncStorage from "@react-native-async-storage/async-storage";

const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('RECIPES_KEY')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
    }
  }
export default getData;