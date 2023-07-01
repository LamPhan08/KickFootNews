import {Dimensions, Platform, StyleSheet} from 'react-native';

const boxShadow: any = Platform.select({
  ios: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  android: {elevation: 6},
});

export default StyleSheet.create({
  image: {
    height: 210,
    width: Dimensions.get('window').width,
  },
  titleContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    paddingLeft: 20,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0,0,0, 0.2)',
  },
  
  hotNews: {
    backgroundColor: 'red',
    color: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 6,
    fontWeight: 'bold',
    fontSize: 13,
  },

  text: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    color: '#fff',
    marginBottom: 5
  },

  timestampContainer: {
    width: '100%', 
    justifyContent: 'space-between', 
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 15
  },

  timestamp: {
    color: '#eee',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'right'
  },
});