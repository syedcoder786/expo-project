import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../../screens/Login';

const screens = {
    Login: {
        screen: Login
        // navigationOptions: ({ navigation }) => {
        //     return{
        //         headerTitle: () => <Header navigation = {navigation} title = 'Home'/>,
        //     } 
        // }
    },
    // SignUp: {
    //     screen: SignUp
    // }
}

const AuthStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerTitleAlign: 'center'
        // headerStyle: { backgroundColor:'#eee', height:60 }
    }
})

export default createAppContainer(AuthStack);