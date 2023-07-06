import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 15,
        backgroundColor: '#fff',
        elevation: 3,
        marginBottom: 10,
        borderRadius: 10,
        marginTop: 10
    },

    articleImage: {
        height: 140,
        width: '40%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        resizeMode: 'cover'
    },

    titleContainer: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        width: '60%'
    },

    timestampContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },

    articleSource: {
        backgroundColor: 'red',
        color: '#fff',
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderRadius: 6,
        fontWeight: 'bold',
        fontSize: 10,
        
    },

    articleTimestamp: {
         fontSize: 11,
         fontWeight: '600',
         color: 'grey'     
    },

    articleTitle: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
        flexWrap: 'wrap',
    }

})