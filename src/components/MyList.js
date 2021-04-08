import React, { Component } from 'react';
import {Text,View,ScrollView,TouchableOpacity, Image, FlatList,SafeAreaView} from 'react-native';

export default class MyList extends Component {
    
    constructor(props)
    {
        super(props);        
        this.state = {
        loading: false,
          dados: []
        }

        this.componenteRederizado = false;
        this.getListOfData();
    }

    componentDidMount()
    {
      this.componenteRederizado=true
    }

    getListOfData = () => {
      if(this.componenteRederizado){this.setState({loading:true});}

      let newData = [
            {
              title: "Lorem ipsum", 
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in congue risus, non viverra tellus. Nam faucibus ligula non metus ultrices mollis. Cras dolor purus, hendrerit eu eros quis, dignissim eleifend mi. In tincidunt mi in diam egestas congue ac ut purus. Nulla semper libero vitae blandit vehicula.",
              image: require("../images/img1.jpg"),
              id: this.state.dados.length
            },
            {
              title: "Curabitur vulputate", 
              text: "Curabitur vulputate enim in lacus imperdiet, a convallis odio posuere. Nulla id ex et purus sodales rutrum non eu eros. Ut consequat est lacus.",
              image: require("../images/img2.jpg"),
              id: this.state.dados.length+1
            },
            {
              title: "Proin hendrerit", 
              text: "Proin hendrerit nisl id turpis bibendum, sit amet scelerisque augue elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a blandit sapien.",
              image: require("../images/img3.jpg"),
              id: this.state.dados.length+2
            },
            {
              title: "Lorem ipsum", 
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in congue risus, non viverra tellus. Nam faucibus ligula non metus ultrices mollis. Cras dolor purus, hendrerit eu eros quis, dignissim eleifend mi. In tincidunt mi in diam egestas congue ac ut purus. Nulla semper libero vitae blandit vehicula.",
              image: require("../images/img1.jpg"),
              id: this.state.dados.length+3
            },
            {
              title: "Curabitur vulputate", 
              text: "Curabitur vulputate enim in lacus imperdiet, a convallis odio posuere. Nulla id ex et purus sodales rutrum non eu eros. Ut consequat est lacus.",
              image: require("../images/img2.jpg"),
              id: this.state.dados.length+4
            },
            {
              title: "Proin hendrerit", 
              text: "Proin hendrerit nisl id turpis bibendum, sit amet scelerisque augue elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a blandit sapien.",
              image: require("../images/img3.jpg"),
              id: this.state.dados.length+5
            }];

            if(this.componenteRederizado)
            {
              this.setState({
              dados: [...this.state.dados, ...newData],
              loading: false,
              });
            }
            else
            {
              this.state = {
                loading: false,
                dados: newData
                }
            }
    }


    renderDados = ({item}) =>{
            return(
                <TouchableOpacity key={item.id}>
                    <View style={{ padding: 10 }}>
                      <Image style={{width:120,height:120}} source={item.image} ></Image>
                       <Text style={{ fontSize: 15}}>{item.title}</Text>        
                       <Text>{item.text}</Text>
                    </View>
                </TouchableOpacity>);
            }

    render() {
        if(this.state.loading)
        {
          return <Text>Carregando...</Text>
        }
        else
        {
        return(
            <FlatList
            data={this.state.dados}
            renderItem={this.renderDados}
            keyExtractor={(item)=> item.id.toString()}
            onEndReached={()=>{this.getListOfData()}}
            onEndReachedThreshold={0.1}
            />
          );}
      }
}