/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Keyboard,
  useColorScheme,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Tasks from './Compoent/Tasks';
import { connect } from 'react-redux';
import { AddTask,DeleteTask,completedTask } from './Redux/Task/task.action';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = (props) => {
  const [task, setTask] = useState('');
  const [taskItem, setTaskItem] = useState([]);

  const isDarkMode = useColorScheme() === 'dark';
  const handleAddTask = () => {
     if(task)
     {
      Keyboard.dismiss() 
      props.AddTask(task)
      setTask("")
     }
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useState(()=>{
    props.completedTask();
  },[DeleteTask])

  useState(()=>{
    props.completedTask();
  },[])
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar
          animated={true}
          backgroundColor={isDarkMode?'#454a45':'#bdbfbd'}
          barStyle={!isDarkMode?'dark-content': 'light-content'}
      />
      <View style={[styles.container,isDarkMode?{backgroundColor:'#212421'}:{backgroundColor: '#ebf0eb'}]}>
        <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
        >
          <View style={styles.taskWrapper}>
            <Text style={[styles.sectionTitle,isDarkMode?{color:'#FFF'}:{color: 'black'}]}>ToDo App 📝</Text>
          </View>
          <View style={styles.item}>
            { props.taskList===[]? (
              <View style={{justifyContent:'center',alignItems:'center',backgroundColor:"blue"}}>
              <Text style={{paddingHorizontal:20,fontSize:20}}>no task found..</Text>
            </View>
              
            ) : (
              props.taskList.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onLongPress={() => props.DeleteTask(item)}>
                    <Tasks text={item} />
                  </TouchableOpacity>
                );
              })
            )}
          </View>
        </ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.writeTaskWrapper}>
          <TextInput
            style={[styles.input,isDarkMode?{backgroundColor:'#2f332f',color:'#FFF'}:{backgroundColor:'#FFF',color:'#404240'}]}
            onChangeText={task => setTask(task)}
            value={task}
            placeholderTextColor={'#5e615e'}
            placeholder={'Enter your task'}
          />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  taskWrapper: {
    paddingTop: 50,
    paddingLeft: 30,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  item: {
    marginTop: 30,
    flex: 1,
    color:"#021129"
  },
  writeTaskWrapper: {
    marginBottom:20,
    button: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    marginHorizontal:20,
  },
  addText:{
    fontSize:30,
    color:'#f2e4e4'
  },
  addWrapper: {
    marginRight:50,
    width: 60,
    height: 60,
    backgroundColor: '#a59ce6',
    borderRadius: 60,
    fontSize: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
});
const mapStateToProps=(state)=>{
  console.log(JSON.stringify(state.task.task))
  return{
    taskList:state.task.task || []
  }
}

export default connect(mapStateToProps,{AddTask,completedTask,DeleteTask})(App);
