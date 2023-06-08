import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 120,
  },
  image: {
    height: 300,
    width: '100%',
  },
  authorPublishedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'space-between'
  },
  authorIcon: {
    width: 40,
    height: 40
  },
  authorAndPublished: {
    marginLeft: 10,
    justifyContent: 'space-between'
  },
  name: {
    fontWeight: '600',
    color: '#000'
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 30,
    paddingHorizontal: 24,
    marginVertical: 18,
  },
  content: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    paddingHorizontal: 18,
    marginTop: 20
  },
  readMoreContainer: {
    position: 'absolute',
    paddingTop: 14,
    paddingBottom: 28,
    paddingHorizontal: 24,
    bottom: 0,
    width: '100%',
  },
  readMoreText: {
    fontSize: 13,
    fontWeight: '300',
    lineHeight: 22,
  },
  link: {
    color: '#00beff',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#00beff',
  },
});