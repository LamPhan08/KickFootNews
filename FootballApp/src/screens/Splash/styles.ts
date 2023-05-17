import { StyleSheet } from "react-native";

export default StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20 ,
        backgroundColor: '#fff'
      },
    
      SplashScreen_RootView: {
        justifyContent: "center",
        flex: 1,
        margin: 10,
        position: "absolute",
        width: "100%",
        height: "100%",
      },
    
      SplashScreen_ChildView: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      },
})