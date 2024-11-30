import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainLayout from "../layouts/MainLayout";

const AboutScreen = () => {
  return (
    <MainLayout>
      <Text>Incredible ToDoList App</Text>
      <Text>Steven Tram</Text>
      <Text>November 29, 2024</Text>
    </MainLayout>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({});
