import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";

type Post = { userId: number; id: number; title: string; body: string };
export default function App() {
  const [postList, setPostList] = useState<Post[]>([]);

  const FetchData = async (limit = 10) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const data = await response.json();
    setPostList(data);
  };
  useEffect(() => {
    FetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={postList}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.titleText}> {item.title}</Text>
                <Text style={styles.bodyText}>{item.body}</Text>
              </View>
            );
          }}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          ListEmptyComponent={<Text>No Post Found</Text>}
          ListHeaderComponent={
            <Text style={styles.headerText}>Post List </Text>
          }
          ListFooterComponent={<Text style={styles.footerText}>End List</Text>}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    paddingTop: StatusBar.currentHeight,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  bodyText: {
    fontSize: 16,
    color: "black",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    paddingVertical: 16,
  },
  footerText: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 16,
  },
});
