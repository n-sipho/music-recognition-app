import React from "react";
import { View, Image } from "react-native";
import { Card, Text, Paragraph, Title, List } from "react-native-paper";
import { Linking } from "react-native";
import { FontAwesome } from "@expo/vector-icons";  // Importing the FontAwesome icon set


const song = {
  cover: 'https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png',
  title: "Blinding Lights",
  artist: "The Weeknd",
  album: "After Hours",
  duration: "3:22",
  genre: "Synthwave",
};

export default function Playlist({ }) {
  if (!song) return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><Text>No song detected</Text></View>;

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#fff" }}>
      <Card>
        <Card.Cover source={{ uri: song.cover }} />
        <Card.Content>
          <Title>{song.title}</Title>
          <Paragraph>{song.artist}</Paragraph>
        </Card.Content>
      </Card>

      <List.Section>
        <List.Item title="Album" description={song.album} left={() => <List.Icon icon="album" />} />
        <List.Item title="Duration" description={song.duration} left={() => <List.Icon icon="clock-outline" />} />
        <List.Item title="Genre" description={song.genre} left={() => <List.Icon icon="music" />} />
      </List.Section>
    </View>
  );
}