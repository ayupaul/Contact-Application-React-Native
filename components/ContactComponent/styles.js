import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    alignItems: 'center',
    flexGrow: 1,
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  name: {fontSize: 17},
  rightSwipeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    paddingRight: 20,
  },
  rightSwipeButton: {
    padding: 10,
  },
});
