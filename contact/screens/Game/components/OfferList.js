import React from 'react';
import {styles} from "./styles";
import {SafeAreaView, View, VirtualizedList, Text, Button} from 'react-native';


const getItem = (data, index) => data[index]
const getItemCount = data => data.length

const OfferActionItem = ({offer, actionOnTouch, actionTitle}) => (
  <View style={styles.offerListItem}>
    <Text style={styles.offerListTitle}>{offer.definition}</Text>
    <Text>{offer.sender_id}</Text>
    <Button title={actionTitle} onPress={() => actionOnTouch()}/>
  </View>
)

const OfferItem = ({offer}) => (
  <View style={styles.offerListItem}>
    <Text style={styles.title}>{offer.definition}</Text>
    <Text>{offer.sender_id}</Text>
  </View>
)


function renderItem(offer, actionOnTouch, actionTitle, user) {
  const senderIsSelf = user.username === offer.sender_id
  if (senderIsSelf) {
    return <OfferItem offer={offer}/>
  } else {
    return (
      <OfferActionItem
        offer={offer}
        actionOnTouch={() => actionOnTouch(offer)}
        actionTitle={actionTitle}
      />
    )
  }
}

const OfferList = ({offers, actionOnTouch, actionTitle, user}) => (
  <SafeAreaView style={styles.offerListContainer}>
    <VirtualizedList
      data={offers.filter((el) => !(el.is_canceled || el.is_contacted))}
      initialNumToRender={4}
      renderItem={({item}) => renderItem(item, actionOnTouch, actionTitle, user)}
      keyExtractor={item => item.id_key}
      getItemCount={getItemCount}
      getItem={getItem}
    />
  </SafeAreaView>
)


export default OfferList;