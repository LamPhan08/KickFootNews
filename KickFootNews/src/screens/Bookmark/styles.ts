import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        paddingTop: 20,
        backgroundColor: '#fff',
        height: '100%'
    },

    bookmarkList: {
        paddingBottom: 20,
    },

    noBookmarkContainer: {
        height: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 100
    },

    noBookmarkImage: {
        width: 270,
        height: 270,
        marginBottom: 50
    },

    haventSaved: {
        color: '#000',
        fontWeight: '600',
        fontSize: 15
    },

    tapBookmarkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },

    tapBookmark: {
        fontSize: 15,
        color: 'grey'
    },

    exploreBtn: {
        marginTop: 30,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 3,
        paddingVertical: 7,
        paddingHorizontal: 20,
    },

    btnLabel: {
        color: '#000',
        fontWeight: '600',
    }
})