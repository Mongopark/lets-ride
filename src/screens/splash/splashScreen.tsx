import { Image, Text, View } from "react-native"
import { LOGO_BIG } from "../../../assets/images/image";
import { SplashScreenStyles } from "../../styles/screens/splash/splashScreen.styles";

const SplashScreen = () => {
    return(
        <View style={SplashScreenStyles.container}>
            <View>
                <Image source={LOGO_BIG} style={SplashScreenStyles.image}/>
            </View>
            <View>
                <Text style={SplashScreenStyles.text}>For riders </Text>
            </View>
        </View>
    )
}
export default SplashScreen;