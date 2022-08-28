/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
// import type {Node} from 'react';
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
    // console.log("is task exist",taskItem.find(task))
     if(task)
     {
      Keyboard.dismiss() 
      props.AddTask(task)
      setTask("")
      // Keyboard.removeAllListeners()
     
     }
     
   
    // setTaskItem([...taskItem, task]);
    // setTask(null);
  };

  // const completeTask = index => {
    // let itemsCopy = [...taskItem];
    // itemsCopy.splice(index, 1);
    // setTaskItem(itemsCopy);
    
  // };
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useState(()=>{
    props.completedTask();
    return ()=>{
      if(task)
      {
        console.log("component will unmount");
      }

     
    }
  },[DeleteTask])

  useState(()=>{
    props.completedTask();
    return ()=>{
      console.log("component will unmount");
    }
  },[])
  return (

    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.container}>
        <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
        >
          <View style={styles.taskWrapper}>
            <Text style={styles.sectionTitle}>ToDo App 📝</Text>
          </View>
          <View style={styles.item}>
            { !props.taskList? (
              <View style={styles.item}>
              <Text style={{paddingHorizontal:20,fontSize:20}}>no task found..</Text>
            </View>
              
            ) : (
              props.taskList.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => props.DeleteTask(item)}>
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
            style={styles.input}
            onChangeText={task => setTask(task)}
            value={task}
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
    backgroundColor: '#E8EAD',
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
    // position:"absolute",
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
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    marginHorizontal:20
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
  return{
    taskList:state.task.task
  }
  console.log("map state ",taskList)
}

export default connect(mapStateToProps,{AddTask,completedTask,DeleteTask})(App);
