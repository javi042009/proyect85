import React, {Component} from "react";
import {Button,View} from "react-native";

export default class LoadingScreen extends Component{
  signWithGoogleAsync = async ()=>{
    try{
      const result = await Google.loginAsync({
        behaviour:"web",
        androidClientld:"",
        iosClientsld:"",
        scopes:["profile","email"]
      });
    }
  }
}