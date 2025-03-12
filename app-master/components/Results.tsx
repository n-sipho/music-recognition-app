import React from "react";
import { View, Image } from "react-native";
import { Card, Text, ProgressBar, Button } from "react-native-paper";
import { Linking } from "react-native";


export default function Result({song}) {
    if (!song) return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><Text>No song detected</Text></View>;

    return (
        <Card style={{ margin: 16, padding: 16, alignItems: "center" }}>
            <Image source={{ uri: song.cover }} style={{ width: 200, height: 200, borderRadius: 10 }} />
            <Text variant="titleLarge" style={{ marginTop: 8 }}>{song.title}</Text>
            <Text variant="bodyMedium" style={{ color: "gray" }}>{song.artist}</Text>
            <ProgressBar progress={song.confidence} style={{ width: "100%", marginVertical: 10 }} />
            <Button icon={() => <FaSpotify />} mode="contained" onPress={() => Linking.openURL(song.spotifyUrl)}>
                Open in Spotify
            </Button>
        </Card>
    );
}
