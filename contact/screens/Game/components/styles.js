import {StyleSheet} from "react-native";
import {PROJECT_STYLES} from "../../../styles";

export const styles = StyleSheet.create({
  ...PROJECT_STYLES,
  offerListContainer: {
    flex: 1,
    marginTop: 50,
  },
  offerListItem: {
    backgroundColor: '#f9c2ff',
    height: 100,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  offerListTitle: {
    fontSize: 32,
  },
  offerInput: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row"
  }
})