import {Button,Platform, StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addnote, deletenote} from './actions';


function ReduxScreen() {
  const notes = useSelector(state => state);

  const addNoteHandler = () => {
    let note = {
      id: notes.length,
      note: `Its note # ${notes.length}`,
    };
    dispatch(addnote(note));
  };

  const deleteNoteHandler = id => {
    dispatch(deletenote(id));
  };

  const dispatch = useDispatch();

  const renderNotes = () => {
    let res = [];
    notes.map(not => {
      res.push(
        <View key={not.id}>
          <Text>
            {not.id} <Text> : </Text>
            {}
            {not.note}
            {}
            <Text style={styles.deleteBtn}>
              <Button
                title="Delete Note"
                margin="5"
                onPress={() => deleteNoteHandler(not.id)}
              />
            </Text>
          </Text>
        </View>,
      );
    });
    return res;
  };

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.heading}>Redux Page</Text>
      <View>{renderNotes()}</View>
      <View>
        <Button
          onPress={addNoteHandler}
          title="Add Note"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
}

export default ReduxScreen;

const styles = StyleSheet.create({
  sectionContainer: {
    alignItems: 'center'
  },
  heading: {
    fontSize: 30,
    color: 'green',
  },
  deleteBtn: {
    color: 'red',
    fontSize: 30,
  },
});
