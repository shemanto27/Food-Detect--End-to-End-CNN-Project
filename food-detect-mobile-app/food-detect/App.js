import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  return (
    <View style={styles.container}>
      {hasPermission === null ? (
        <Text>Requesting Camera Permission...</Text>
      ) : hasPermission === false ? (
        <Text>No access to camera</Text>
      ) : cameraActive ? (
        <Camera style={styles.camera} type={Camera.Constants.Type.back} />
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCameraActive(true)}
        >
          <Text style={styles.buttonText}>Open Camera</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  camera: { width: "100%", height: "100%" },
  button: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: { color: "white", fontSize: 18 },
});
