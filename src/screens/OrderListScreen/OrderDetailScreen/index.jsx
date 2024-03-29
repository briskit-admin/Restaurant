import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import SearchBar from 'common/SearchBar'
import Layout from 'common/Layout'
import StatusToggle from 'components/order/StatusToggle'
import colors from 'constants/colors'
import ColouredButton from 'common/ColouredButton'
import ItemWithQty from 'components/order/ItemWithQty'
import { GlobalStyles } from 'constants/GlobalStyles'
import CustomCard from 'common/CustomCard'

const OrderDetailScreen = ({ route, navigation }) => {

  return (
    <Layout  
     showBackButton
     smallTitle={route.params.orderNum}
     onBackPress={() => navigation.goBack()}
    >
        <View style={styles.statusContainer}>
            <View>
                <Text >Update Status</Text>
            </View>
            <StatusToggle style={styles.toggle}/>
        </View>

        <View style={[GlobalStyles.lightBorder, { marginTop: 15}]}>
            <ItemWithQty style={styles.item} itemName={"Pizza"} itemQty={"2"}/>
            <ItemWithQty style={styles.item} itemName={"Brownie"} itemQty={"1"}/>
        </View>

        <View style={[GlobalStyles.lightBorder, { marginTop: 15}]}>
          <View style={styles.row}>
            <Text style={styles.text}>Customer Name</Text>
            <Text style={styles.custName}>Raghav Handa</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Current Status</Text>
            <CustomCard text='Began preparing'/>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Extra Comments</Text>
            <CustomCard text='I want extra Ketchup' isLightText/>
          </View>
        </View>

        <View style={[GlobalStyles.lightBorder, { marginTop: 15}]}>
          <View style={styles.row}>
            <Text style={styles.text}>Delivery Person</Text>
            <CustomCard text='Kanchana Naidu'/>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Their Phone number</Text>
            <View style={styles.phoneNumCard}>
              <Text style={[styles.text, { color: colors.theme}]}>9808701212</Text>
              <Image source={require('images/call-icon.png')} style={{ width: 26, height: 26}}/>
            </View>
          </View>
        </View>

        <View style={styles.bottomSection}>
           <ColouredButton
            bgColor= '#FFF1CC'
            textColor= '#BA8700'
            title= 'Call Helpdesk'
            icon
            onPress= {() => console.log('pressed')}
           />

           <ColouredButton
            bgColor= {colors.warning}
            textColor= {colors.danger}
            title= 'Cancel Order'
            onPress= {() => console.log('pressed')}
           />
        </View>
    </Layout>
  )
}

export default OrderDetailScreen

const styles = StyleSheet.create({
    statusContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 15,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 10,
        gap: 10,
      },
    toggle: {
        flex: 2,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10,
    },
    custName: {
      fontSize: 16,
      width: 160,
      fontWeight: '600',
      color: colors.theme,
      textAlign: 'left',
    },
    text: {
      color: colors.darkGray,
      fontWeight: '600',
      fontSize: 12,
    },
    phoneNumCard: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#2E5E821A',
      borderRadius: 6,
      paddingHorizontal: 8,
      paddingVertical: 12,
      width: 160,
    },
    bottomSection: {
        position: 'absolute',
        bottom: 10,
    }
})