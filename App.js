import axios from 'axios';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Alert,
    FlatList,
    ActivityIndicator,
    Text,
    RefreshControl, 
    TouchableOpacity,  
  } from 'react-native';

  //components
import { Post } from './components/Post';

export default function App() {
  const [items, setItems] = React.useState();  // создаю сосотояние 
  const [isLoading, setIsLoading] = React.useState(true); // состояние загрузки страницы





  React.useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)
        const {data} = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        setItems(data.drinks); // назначаю в состояние беру из обьекта в который вложен массив с обьектами
        // пока страница грузится у нас отоброжается что страница загружается
      } catch (err) {
          console.log('Запрос прошел неудачно');
          Alert.alert('Ошибка', 'при получение данных'); // если ошибка выкидываю алерт с оповещением об ошибки
        }
        finally {
          setIsLoading(false); // отключаю состояние загрузки когда код успешно выполнился
        };

    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

    if (isLoading) { // если состояние true рендерю эту страницу
      return ( 
      <View 
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <ActivityIndicator size='large' />
        <Text style={{marginTop: 15, fontSize:'15px' }}>Загрузка...</Text>
      </View>
      );
    }


  return (
    <View >
    <FlatList 
       refreshControl={<RefreshControl refreshing={isLoading} />}      // устанавливаю при свайпе вниз до конца обновление странницы и заново делается рендер страницы с обновлением данных 
       data={items}
       renderItem={({item}) => ( // с помощью дектуризации отоброжаю данные которые мне нужны
       // TouchableOpacity устанавливает скрол по страннице для удобства если данных будет на странице больше
      <TouchableOpacity>  
         <Post
       strDrink={item.strDrink}
       strDrinkThumb={item.strDrinkThumb}
       strInstructions={item.strInstructions}/>
      </TouchableOpacity>
        )}
     />
          <StatusBar style="auto" /> 
    </View>
  );
}
