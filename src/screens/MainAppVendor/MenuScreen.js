
import React, { Component ,useState} from 'react';
import { View,Text,StyleSheet, ImageBackground ,Image,TouchableOpacity,ScrollView ,TouchableWithoutFeedback} from 'react-native';
import  Icon  from 'react-native-vector-icons/Feather';
import  OrangeButton from  '../../components/OrangeButon'
import Material from 'react-native-vector-icons/MaterialIcons'
import MenuItem from '../../components/MenuItem';
import ImagePicker from 'react-native-image-picker';
import SettingScreen from './SettingScreen';
import  Icon4  from 'react-native-vector-icons/MaterialIcons';
import Ent from 'react-native-vector-icons/Entypo'
import Ion from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AboutScreen from './AboutScreen';
import PrivacyScreen from './PrivacyScreen';
import TermsScreen from './TermsScreen';
import FaqScreen from './FaqScreen';
import ContactScreen from './ContackUs';
import GDRPScreen from './GDRPScreen'
const MenuScreen=()=>{
  const [isAboutScreenActive,setIsAboutScreenActive]=useState(false)
  const [isFaqScreenActive,setIsFaqScreenActive]=useState(false)
  const [isContactScreenActive,setIsContactScreenActive]=useState(false)
  const [isPrivacyScreenActive,setIsPrivacyScreenActive]=useState(false)
  const [isGDRPScreenActive,setIsGDRPScreenActive]=useState(false)
  const [isTermsAndCScreenActive,setIsTermsAndCScreenActive]=useState(false)

 const selectFile = () => {


 
        var options = {
          title: 'Select Image',
          customButtons: [
            { 
              name: 'customOptionKey', 
              title: 'Choose file from Custom Option' 
            },
          ],
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
    
        ImagePicker.showImagePicker(options, res => {
          console.log('Response = ', res);
    
          if (res.didCancel) {
            console.log('User cancelled image picker');
          } else if (res.error) {
            console.log('ImagePicker Error: ', res.error);
          } else if (res.customButton) {
            console.log('User tapped custom button: ', res.customButton);
            alert(res.customButton);
          } else {
            let source = res;
            this.setState({
              resourcePath: source,
            });
          }
        });
      };
     

      const [isSettingScreenActive,setIsSettingScreenActive]=useState(false);

      const [isRemainderScreenActive,setIsReminderScreenActive]=useState(false);

      const [isHistoryScreenActive,setIsHistoryScreenActive]=useState(false);

      const [isBadgeScreenActive,setIsBadgeScreenActive]=useState(false);

      const [isArticlesScreenActive,setIsArticlesScreenActive]=useState(false);

      const [isSocialScreenActive,setIsSocialScreenActive]=useState(false);




    return (
        <View style={styles.container}>

            <View style={{flexDirection:"row",alignItems:'center',marginTop:10,paddingBottom:25,marginBottom:15}}> 

        <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
            <ImageBackground  style={{width:85,height:85,borderRadius:85,backgroundColor:'orange'}}>



                </ImageBackground>


            </View>
          


            <View style={{flex:7}}>

                <Text style={{fontSize:16,fontWeight:'bold'}}>{"Samantha Williams"}</Text>

    <Text style={{color:'gray',marginTop:5}}>{"samantha@gmail.com"}</Text>


                </View>

                </View>

                <View style={{flexDirection:'row',padding:5,backgroundColor:'#dff7fb',paddingBottom:10}}>

<View>
<Image style={{marginLeft:5, width:120,height:100,borderRadius:10,backgroundColor:'white',marginTop:-30,borderColor:'#b4ebf4',borderWidth:1}} source={''}>


  </Image>


  </View>

<View style={{marginLeft:20}}>
<Text style={{color:'gray'}}>Company Name</Text>

<Text style={{color:'black',fontWeight:'bold',fontSize:20}}>
  {"Carey's Cakes"}
  </Text>

<Text style={{color:'black',fontSize:17}}>
  Vendor Id {"YHGFR4"}
  </Text>

  </View>

            <View style={{position:"absolute", bottom:-10,right:10,backgroundColor:'white',padding:10,borderRadius:50,elevation:4}}>


<Icon name='edit' onPress={selectFile} style={{fontSize:20}}/>
    </View>

              </View>

                <ScrollView
                
style={{flex:1.1}}
>



<TouchableWithoutFeedback onPress={()=>{setIsFaqScreenActive(true)}}> 
<View style={{flexDirection:"row",paddingLeft:20,paddingRight:20,alignItems:'center',paddingTop:20,paddingBottom:20,borderBottomColor:'lightgray',borderBottomWidth:1}}>

<View style={{backgroundColor:'#99ccff',padding:5,width:30,height:30,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
    <Ent name='chat' style={{fontSize:16,color:'white'}} />
</View>

    <Text style={{fontSize:16,fontWeight:'bold',color:'gray',marginLeft:15}}>Create Campaign</Text> 

<Icon4 style={{position:'absolute',right:30,fontSize:25,color:'#99ccff'}} name='arrow-forward-ios' />

    </View>
</TouchableWithoutFeedback>



<TouchableWithoutFeedback onPress={()=>{setIsAboutScreenActive(true)}}>
<View style={{flexDirection:"row",paddingLeft:20,paddingRight:20,alignItems:'center',paddingTop:20,paddingBottom:20,borderBottomColor:'lightgray',borderBottomWidth:1,borderBottomColor:'lightgray',borderBottomWidth:1}}>

<View style={{backgroundColor:'#99ccff',padding:5,width:30,height:30,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
    <Ent name='info-with-circle' style={{fontSize:16,color:'white'}} />
</View>

    <Text style={{fontSize:16,fontWeight:'bold',color:'gray',marginLeft:15}}>About Us</Text> 


    <Icon4 style={{position:'absolute',right:30,fontSize:25,color:'#99ccff'}} name='arrow-forward-ios' />



    </View>
</TouchableWithoutFeedback>
    







 









<TouchableWithoutFeedback onPress={()=>{setIsContactScreenActive(true)}}>
<View style={{flexDirection:"row",paddingLeft:20,paddingRight:20,alignItems:'center',paddingTop:20,paddingBottom:20,borderBottomColor:'lightgray',borderBottomWidth:1}}>

<View style={{backgroundColor:'#99ccff',padding:5,width:30,height:30,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
    <Ent name='mail' style={{fontSize:16,color:'white'}} />
</View>

    <Text style={{fontSize:16,fontWeight:'bold',color:'gray',marginLeft:15}}>Contact Us</Text> 



    <Icon4 style={{position:'absolute',right:30,fontSize:25,color:'#99ccff'}} name='arrow-forward-ios' />


    </View>
</TouchableWithoutFeedback>
 








<TouchableWithoutFeedback onPress={()=>{setIsPrivacyScreenActive(true)}}>
<View style={{flexDirection:"row",paddingLeft:20,paddingRight:20,alignItems:'center',paddingTop:20,paddingBottom:20,borderBottomColor:'lightgray',borderBottomWidth:1}}>

<View style={{backgroundColor:'#99ccff',padding:5,width:30,height:30,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
    <Icon4 name='privacy-tip' style={{fontSize:16,color:'white'}} />
</View>

    <Text style={{fontSize:16,fontWeight:'bold',color:'gray',marginLeft:15}}>Privacy policy</Text> 


    <Icon4 style={{position:'absolute',right:30,fontSize:25,color:'#99ccff'}} name='arrow-forward-ios' />



    </View>
</TouchableWithoutFeedback>
 









<TouchableWithoutFeedback onPress={()=>{setIsGDRPScreenActive(true)}}>
<View style={{flexDirection:"row",paddingLeft:20,paddingRight:20,alignItems:'center',paddingTop:20,paddingBottom:20,borderBottomColor:'lightgray',borderBottomWidth:1}}>

<View style={{backgroundColor:'#99ccff',padding:5,width:30,height:30,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
    <Icon4 name='privacy-tip' style={{fontSize:16,color:'white'}} />
</View>

    <Text style={{fontSize:16,fontWeight:'bold',color:'gray',marginLeft:15}}>GDRP</Text> 


    <Icon4 style={{position:'absolute',right:30,fontSize:25,color:'#99ccff'}} name='arrow-forward-ios' />



    </View>
</TouchableWithoutFeedback>
 















<TouchableWithoutFeedback onPress={()=>{setIsTermsAndCScreenActive(true)}}> 
<View style={{flexDirection:"row",paddingLeft:20,paddingRight:20,alignItems:'center',paddingTop:20,paddingBottom:20,borderBottomColor:'lightgray',borderBottomWidth:1}}>

<View style={{backgroundColor:'#99ccff',padding:5,width:30,height:30,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
    <Ion name='documents' style={{fontSize:16,color:'white'}} />
</View>

    <Text style={{fontSize:16,fontWeight:'bold',color:'gray',marginLeft:15}}>Terms and Conditions</Text> 



    <Icon4 style={{position:'absolute',right:30,fontSize:25,color:'#99ccff'}} name='arrow-forward-ios' />


    </View>
</TouchableWithoutFeedback>
 








<TouchableWithoutFeedback>
<View style={{flexDirection:"row",paddingLeft:20,paddingRight:20,alignItems:'center',paddingTop:20,paddingBottom:20,borderBottomColor:'lightgray',borderBottomWidth:1}}>

<View style={{backgroundColor:'#99ccff',padding:5,width:30,height:30,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
    <FontAwesome name='user' style={{fontSize:16,color:'white'}} />
</View>

    <Text style={{fontSize:16,fontWeight:'bold',color:'gray',marginLeft:15}}>Logout</Text> 



    <Icon4 style={{position:'absolute',right:30,fontSize:25,color:'#99ccff'}} name='arrow-forward-ios' />


    </View>
</TouchableWithoutFeedback>
 
</ScrollView>

{
isAboutScreenActive?<AboutScreen onBack={()=>{setIsAboutScreenActive(false)}} />:null

}

{
isPrivacyScreenActive?<PrivacyScreen onBack={()=>{setIsPrivacyScreenActive(false)}} />:null
}


{
isTermsAndCScreenActive?<TermsScreen onBack={()=>{setIsTermsAndCScreenActive(false)}} />:null

}


{
isFaqScreenActive?<FaqScreen onBack={()=>{setIsFaqScreenActive(false)}} />:null

}
{
    isContactScreenActive?<ContactScreen onBack={()=>{setIsContactScreenActive(false)}} />:null
}
{

isGDRPScreenActive?<GDRPScreen onBack={()=>{setIsGDRPScreenActive(false)}} />:null

}

          </View>
    )

}



const styles=StyleSheet.create({

    container:{

        flex:1,
    }
    
})

export default MenuScreen