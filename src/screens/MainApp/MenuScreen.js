
import React, { Component ,useState} from 'react';
import { View,Text,StyleSheet, ImageBackground ,Image,TouchableOpacity,ScrollView ,TouchableWithoutFeedback} from 'react-native';
import  Icon  from 'react-native-vector-icons/Feather';
import  OrangeButton from  '../../components/OrangeButon'
import Material from 'react-native-vector-icons/MaterialIcons'
import MenuItem from '../../components/MenuItem';
import ImagePicker from 'react-native-image-picker';
import SettingScreen from './SettingScreen';
import Articles from './Articles';
import ShareOnSocialMedia from './ShareOnSocialMedia';
import SetRemainderScreen from './SetReminderScreen';
import MyReuseHistoryScreen from './MyReuseHistory';

const MenuScreen=()=>{

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

            <View style={{flexDirection:"row",alignItems:'center',marginTop:10,borderBottomColor:'#E0E0E0',borderBottomWidth:2,paddingBottom:25,marginBottom:15}}> 

        <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
            <ImageBackground  style={{width:85,height:85,borderRadius:85,backgroundColor:'#99ccff'}}>


<View style={{position:"absolute", bottom:-10,right:-10,backgroundColor:'white',padding:10,borderRadius:50,elevation:4}}>


<Icon name='edit' onPress={selectFile} style={{fontSize:20}}/>
    </View>

                </ImageBackground>


            </View>

            <View style={{flex:7}}>

                <Text style={{fontSize:20,fontWeight:'bold'}}>{"Samantha Williams,24"}</Text>

    <Text style={{color:'gray',marginTop:5}}>{"samantha@gmail.com"}</Text>


                </View>

                </View>

                <ScrollView
style={{paddingTop:0,marginBottom:10,marginTop:-13}}
>


<View style={{borderColor:'#99ccff',borderWidth:2,padding:10,flexDirection:"row",marginLeft:20,marginRight:20,marginTop:20,borderRadius:20,marginBottom:15}}>


    <View style={{flex:4}}>
<Text style={{fontWeight:'bold'}}>Reuse Points:</Text>

<Text style={{fontSize:13}}>This is the number of reuse actions claimed and amount of waste you prevented reuse xx more times for your status increase!</Text>

        </View>

   
        <View style={{backgroundColor:'orange',width:110,height:110,borderRadius:110,justifyContent:'center',alignItems:'center',flex:2,marginTop:-30}}>
   <View style={{justifyContent:'center',alignItems:'center'}}>
    <Text style={{color:'white',fontWeight:'bold',fontSize:40}}>{"10"}</Text>
    <Text style={{color:'white',fontWeight:'bold',marginTop:-8,fontSize:16}}>{"Points"}</Text>
        
        </View>
            </View>



    </View>





    <View style={{borderColor:'#99ccff',borderWidth:2,padding:10,flexDirection:"row",marginLeft:20,marginRight:20,marginTop:10,borderRadius:20}}>


<View style={{flex:4}}>
<Text style={{fontWeight:'bold'}}>Network Reuse Points:</Text>

<Text style={{fontSize:13}}>These are the reuse actions claimed by those in your network.Invite more friends to see the waste you've helped prevent!</Text>

    </View>


    <View style={{backgroundColor:'orange',width:110,height:110,borderRadius:110,justifyContent:'center',alignItems:'center',flex:2,marginTop:-30}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Text style={{color:'white',fontWeight:'bold',fontSize:40}}>{"10"}</Text>
<Text style={{color:'white',fontWeight:'bold',marginTop:-8,fontSize:16}}>{"Points"}</Text>
    
    </View>
        </View>



</View>




<View>

<Image style={{alignSelf:'center',width:60,height:60,borderRadius:60,backgroundColor:'black',marginTop:10}} />
    
    <View style={{marginLeft:30,marginRight:30}}>
<View style={{backgroundColor:'orange',justifyContent:'center',alignItems:'center',padding:10,borderRadius:30,marginTop:10,marginBottom:10}}>

<Text style={{color:"white",fontSize:16}}>You are a REUSE {"NINJA!"}</Text>

    </View>

</View>

    </View>

    

<MenuItem title='Share on Social Network' onPress={()=>{setIsSocialScreenActive(true)}} />

<MenuItem title='Articles' onPress={()=>{setIsArticlesScreenActive(true)}} />

<MenuItem title='My Badges' onPress={()=>{}} />

<MenuItem title='My Reuse History' onPress={()=>{setIsHistoryScreenActive(true)}} />


<MenuItem title='Set Reminders' onPress={()=>{setIsReminderScreenActive(true)}} />

<MenuItem title='Setting' onPress={()=>{setIsSettingScreenActive(true)}} />



</ScrollView>


{isSettingScreenActive?<SettingScreen onBack={()=>{setIsSettingScreenActive(false)}} />:null}
{isArticlesScreenActive?<Articles onBack={()=>{setIsArticlesScreenActive(false)}} />:null}
{isSocialScreenActive?<ShareOnSocialMedia onBack={()=>{setIsSocialScreenActive(false)}} />:null}
 {isRemainderScreenActive?<SetRemainderScreen onBack={()=>{setIsReminderScreenActive(false)}} />:null}
 {isHistoryScreenActive?<MyReuseHistoryScreen onBack={()=>{setIsHistoryScreenActive(false)}} />:null}
            </View>
    )

}



const styles=StyleSheet.create({

    container:{

        flex:1,
    }
    
})

export default MenuScreen