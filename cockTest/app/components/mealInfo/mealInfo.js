import React from 'react';
import { View , Text , Image, TouchableOpacity} from 'react-native'
import { styles } from './styles';


const MealsInfo = () => {

    return (
      <TouchableOpacity style={styles.mainTouchableOpacityViewStyle}>
          <View style={styles.leftSideViewStyle}> 
          <Text style={styles.titleMealTextStyle}>
              Quick pasta meal
          </Text>
          <Text numberOfLines={5} style={styles.ingredientsTextStyle}>
          In the process of writing one web application, it became necessary to test PHP code that intensively interacts with the MySQL database. The project used the xUnit port - PHPUnit as a unit testing framework. As a result, it was decided to write tests for modules that directly interact with the base, picking up the PHPUnit / DbUnit plugin. Next, I will talk about the difficulties that arose when writing tests and how I overcame them. In response, I would like to receive comments from knowledgeable people regarding the correctness of my decisions.
          </Text>
          <View style={styles.lineStyle}/>
          <Text style={styles.publisherNameTextStyle}>
              Natasha Nagpal
          </Text>
          </View>
          <Image style={styles.mealImageStyle} source={{uri:'http://forkify-api.herokuapp.com/images/Pizza2BDip2B12B500c4c0a26c.jpg'}} />
      </TouchableOpacity>
    )
}

export default MealsInfo;